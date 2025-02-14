// 设置 Vercel Serverless Function 超时时间为 60 秒
export const maxDuration = 60;

import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// 创建 Supabase 客户端
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const COZE_API_KEY = process.env.COZE_API_KEY!;
const COZE_WORKFLOW_ID = '7470141462618570804';

export async function POST(request: Request) {
  try {
    const { filePath } = await request.json();
    if (!filePath) {
      return NextResponse.json({ error: '缺少文件路径' }, { status: 400 });
    }

    console.log('开始处理文件:', filePath);

    // 构建完整的文件URL
    const fileUrl = `${supabaseUrl}/storage/v1/object/public/resume/${filePath}`;
    console.log('文件URL:', fileUrl);

    // 调用Coze API
    const cozeResponse = await fetch('https://api.coze.cn/v1/workflow/run', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${COZE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parameters: {
          input: fileUrl
        },
        workflow_id: COZE_WORKFLOW_ID
      })
    });

    if (!cozeResponse.ok) {
      const errorData = await cozeResponse.text();
      console.error('Coze API错误:', errorData);
      return NextResponse.json({ 
        error: 'PDF转换失败',
        details: errorData 
      }, { status: 500 });
    }

    const cozeData = await cozeResponse.json();
    
    if (cozeData.code !== 0) {
      console.error('Coze API返回错误:', cozeData);
      return NextResponse.json({ 
        error: '转换失败',
        details: cozeData.msg 
      }, { status: 500 });
    }

    // 解析返回的数据
    let outputData;
    try {
      outputData = JSON.parse(cozeData.data);
    } catch (error) {
      console.error('JSON解析错误:', error);
      return NextResponse.json({ 
        error: '数据格式错误',
        details: '无法解析返回的数据'
      }, { status: 500 });
    }

    // 验证输出数据
    if (!outputData || !outputData.output || typeof outputData.output !== 'string') {
      console.error('无效的输出数据:', outputData);
      return NextResponse.json({ 
        error: '无效的输出数据',
        details: '转换结果格式不正确'
      }, { status: 500 });
    }

    // 确保输出不为空
    if (outputData.output.trim() === '') {
      console.error('空的输出内容');
      return NextResponse.json({ 
        error: '转换结果为空',
        details: '未能提取到简历内容'
      }, { status: 500 });
    }
    
    return NextResponse.json({ markdown: outputData.output });
  } catch (error) {
    console.error('API错误:', error);
    return NextResponse.json({ 
      error: '服务器内部错误',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
} 
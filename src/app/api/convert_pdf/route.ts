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
      return NextResponse.json({ 
        error: '转换失败',
        details: cozeData.msg 
      }, { status: 500 });
    }

    // 解析返回的数据
    const outputData = JSON.parse(cozeData.data);
    
    return NextResponse.json({ markdown: outputData.output });
  } catch (error) {
    console.error('API错误:', error);
    return NextResponse.json({ 
      error: '服务器内部错误',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
} 
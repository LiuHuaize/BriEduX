// 设置 Vercel Serverless Function 超时时间为 60 秒
export const maxDuration = 60;

import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import pdf from 'pdf-parse';

// 创建 Supabase 客户端
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(request: Request) {
  try {
    const { filePath } = await request.json();
    if (!filePath) {
      return NextResponse.json({ error: '缺少文件路径' }, { status: 400 });
    }

    console.log('开始处理文件:', filePath);

    // 从 Supabase Storage 下载文件
    const { data: fileData, error: downloadError } = await supabase.storage
      .from('resume')
      .download(filePath);

    if (downloadError) {
      console.error('Supabase 下载错误:', downloadError);
      return NextResponse.json({ 
        error: '文件下载失败',
        details: downloadError.message 
      }, { status: 500 });
    }

    if (!fileData) {
      console.error('没有接收到文件数据');
      return NextResponse.json({ 
        error: '文件下载失败: 没有接收到数据'
      }, { status: 500 });
    }

    try {
      // 将文件数据转换为 Buffer
      const buffer = Buffer.from(await fileData.arrayBuffer());
      
      // 使用 pdf-parse 解析 PDF
      const data = await pdf(buffer);
      
      // 提取文本内容并进行基本格式化
      const text = data.text
        .replace(/\n{3,}/g, '\n\n') // 替换多个换行为两个换行
        .replace(/\s{2,}/g, ' ') // 替换多个空格为一个空格
        .trim();

      // 将文本转换为 Markdown 格式
      const markdown = `# 简历内容\n\n${text}`;

      console.log('转换成功');
      return NextResponse.json({ markdown });
    } catch (parseError) {
      console.error('PDF 解析错误:', parseError);
      return NextResponse.json({ 
        error: 'PDF 解析失败',
        details: parseError instanceof Error ? parseError.message : String(parseError)
      }, { status: 500 });
    }
  } catch (error) {
    console.error('API错误:', error);
    return NextResponse.json({ 
      error: '服务器内部错误',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
} 
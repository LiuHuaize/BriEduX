import { NextResponse } from 'next/server';
import mammoth from 'mammoth';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: '未找到文件' },
        { status: 400 }
      );
    }

    // 检查文件类型
    if (!file.type.includes('word')) {
      return NextResponse.json(
        { error: '不支持的文件类型，仅支持Word文档' },
        { status: 400 }
      );
    }

    // 将File对象转换为Buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // 使用mammoth转换Word文件为文本，并配置选项
    const result = await mammoth.extractRawText({
      buffer,
      options: {
        preserveNumbering: true,  // 保留编号
        includeEmbeddedImages: false,  // 不包含图片
        preserveEmptyParagraphs: false,  // 不保留空段落
      }
    });

    // 检查转换结果
    if (!result.value) {
      console.error('Word转换警告:', result.messages);
      return NextResponse.json(
        { error: 'Word文档内容提取失败' },
        { status: 400 }
      );
    }

    // 格式化提取的文本
    const formattedText = result.value
      .replace(/\r\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .replace(/\t/g, '    ')
      .replace(/\u00A0/g, ' ')
      .replace(/\s{3,}/g, '  ')
      .trim();

    if (!formattedText) {
      return NextResponse.json(
        { error: 'Word文档内容为空' },
        { status: 400 }
      );
    }

    // 如果有警告信息，记录下来
    if (result.messages.length > 0) {
      console.warn('Word转换警告:', result.messages);
    }

    return NextResponse.json({
      text: formattedText,
      warnings: result.messages
    });

  } catch (error: any) {
    console.error('Word转换错误:', error);
    return NextResponse.json(
      { 
        error: error.message || 'Word文件处理失败',
        details: error.stack
      },
      { status: 500 }
    );
  }
} 
import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// 使用 service role key 创建 Supabase 客户端
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const filePath = formData.get('filePath') as string;

    if (!file || !filePath) {
      return NextResponse.json(
        { error: '文件和路径是必需的' },
        { status: 400 }
      );
    }

    // 将 File 对象转换为 Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 上传文件到 Supabase Storage
    const { data, error } = await supabase.storage
      .from('resume')
      .upload(filePath, buffer, {
        contentType: file.type,
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      console.error('Supabase upload error:', error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    // 获取文件的公共URL
    const { data: { publicUrl } } = supabase.storage
      .from('resume')
      .getPublicUrl(filePath);

    return NextResponse.json({
      success: true,
      data: {
        path: data.path,
        publicUrl
      }
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: '文件上传失败' },
      { status: 500 }
    );
  }
} 
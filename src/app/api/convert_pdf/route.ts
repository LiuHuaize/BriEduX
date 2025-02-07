import { NextResponse } from 'next/server';
import { execFile } from 'child_process';
import { promisify } from 'util';
import { createClient } from '@supabase/supabase-js';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { tmpdir } from 'os';

const execFileAsync = promisify(execFile);

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
    const { data, error } = await supabase.storage
      .from('resume')
      .download(filePath);

    if (error) {
      console.error('Supabase 下载错误:', error);
      return NextResponse.json({ 
        error: '文件下载失败',
        details: error.message 
      }, { status: 500 });
    }

    if (!data) {
      console.error('没有接收到文件数据');
      return NextResponse.json({ 
        error: '文件下载失败: 没有接收到数据'
      }, { status: 500 });
    }

    // 将文件保存到临时目录
    const tempFilePath = join(tmpdir(), `temp_${Date.now()}.pdf`);
    console.log('保存文件到临时路径:', tempFilePath);

    try {
      await writeFile(tempFilePath, Buffer.from(await data.arrayBuffer()));
    } catch (writeError) {
      console.error('文件写入错误:', writeError);
      return NextResponse.json({ 
        error: '文件保存失败',
        details: writeError instanceof Error ? writeError.message : String(writeError)
      }, { status: 500 });
    }

    // 假设 Python 脚本在项目根目录下的 scripts 文件夹内
    const scriptPath = join(process.cwd(), 'scripts', 'pdf_to_markdown.py');
    console.log('使用脚本路径:', scriptPath);

    try {
      const { stdout, stderr } = await execFileAsync('python3', [scriptPath, tempFilePath]);
      if (stderr) {
        console.error('Python脚本错误:', stderr);
        return NextResponse.json({ 
          error: '转换失败',
          details: stderr 
        }, { status: 500 });
      }
      console.log('转换成功');
      return NextResponse.json({ markdown: stdout });
    } catch (execError) {
      console.error('执行Python脚本错误:', execError);
      return NextResponse.json({ 
        error: '执行转换脚本失败',
        details: execError instanceof Error ? execError.message : String(execError)
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
import { NextResponse } from 'next/server';

// 定义 API 响应的类型
interface CozeResponse {
  code: number;
  cost: string;
  data: string;
  debug_url: string;
  msg: string;
  token: number;
}

const COZE_API_KEY = process.env.COZE_API_KEY || 'pat_HYdaq6FMk4Ad2gmFbfHETnetfrdRi0ghyElWdOwhRJSiKwyxrInoQfEcm88FBxD9';
const WORKFLOW_ID = '7468552721685512242';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json(
        { error: '职位URL不能为空' },
        { status: 400 }
      );
    }

    // 调用 Coze API 获取岗位描述
    const cozeResponse = await fetch('https://api.coze.cn/v1/workflow/run', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${COZE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parameters: {
          input: url
        },
        workflow_id: WORKFLOW_ID
      })
    });

    if (!cozeResponse.ok) {
      throw new Error('Coze API 调用失败');
    }

    const cozeData: CozeResponse = await cozeResponse.json();
    console.log('Coze API 返回数据:', cozeData);

    if (cozeData.code !== 0) {
      throw new Error(`Coze API 返回错误: ${cozeData.msg}`);
    }

    const parsedData = JSON.parse(cozeData.data);
    
    return NextResponse.json({
      success: true,
      data: {
        description: parsedData.output,
        debug_url: cozeData.debug_url
      }
    });

  } catch (error) {
    console.error('API 错误:', error);
    return NextResponse.json(
      { 
        error: '获取岗位描述失败',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
} 
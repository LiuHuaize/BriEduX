// 设置 Vercel Serverless Function 超时时间为 60 秒
export const maxDuration = 60;

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

// API配置
const API_CONFIG = {
  TIMEOUT: 50000, // 50秒超时
  MAX_RETRIES: 3,
  RETRY_DELAY: 1000,
};

// 添加超时控制的fetch函数
const fetchWithTimeout = async (url: string, options: RequestInit, timeout: number) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
};

// 重试函数
const retry = async <T>(
  fn: () => Promise<T>,
  retries: number = API_CONFIG.MAX_RETRIES,
  delay: number = API_CONFIG.RETRY_DELAY,
): Promise<T> => {
  try {
    return await fn();
  } catch (error) {
    if (retries === 0) throw error;
    await new Promise(resolve => setTimeout(resolve, delay));
    return retry(fn, retries - 1, delay * 2);
  }
};

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

    // 使用重试机制调用 Coze API
    const cozeResponse = await retry(async () => {
      const response = await fetchWithTimeout(
        'https://api.coze.cn/v1/workflow/run',
        {
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
        },
        API_CONFIG.TIMEOUT
      );

      if (!response.ok) {
        throw new Error(`Coze API 调用失败: ${response.status} ${response.statusText}`);
      }

      return response;
    });

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
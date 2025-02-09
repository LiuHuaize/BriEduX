

import { OpenAI } from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// 创建 OpenAI 客户端
// 初始化 OpenAI 客户端
const client = new OpenAI({
    apiKey: process.env.AiHubMix_API_KEY || 'sk-ysF0SA6kJ7C1I2wG2f901fD6Fe8443Df8f75C92a0aF1Ce2b',
    baseURL: 'https://aihubmix.com/v1'
  });
export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages, temperature = 0.7, max_tokens = 2000 } = await req.json();

  // 调用 DeepSeek-r1
  const response = await client.chat.completions.create({
    model: 'DeepSeek-R1',
    messages,
    temperature,
    max_tokens,
    stream: true,
  });

  // 转换为流式响应
  const stream = OpenAIStream(response);

  // 返回流式响应
  return new StreamingTextResponse(stream);
} 
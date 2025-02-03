import { OpenAI } from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// 创建 OpenAI 客户端
const client = new OpenAI({
  apiKey: process.env.DEEPSEEK_SINGLE_API_KEY || '',
  baseURL: ' https://www.gptapi.us/v1',
});

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages, temperature = 0.7, max_tokens = 2000 } = await req.json();

  // 调用 DeepSeek-r1
  const response = await client.chat.completions.create({
    model: 'deepseek-r1',
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
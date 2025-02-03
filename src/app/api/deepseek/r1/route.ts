import { OpenAI } from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// 创建 OpenAI 客户端
const client = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY || '',
  baseURL: 'https://api.deepseek.com/v1',
});

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages, temperature = 0.3, max_tokens = 2000 } = await req.json();

  // 调用 DeepSeek-R1 推理模型
  const response = await client.chat.completions.create({
    model: 'deepseek-reasoner',
    messages,
    temperature,
    max_tokens,
    stream: true,
  });

  // 转换为流式响应，并添加控制台输出
  const stream = OpenAIStream(response, {
    onToken: (token) => {
      // 在服务器端输出每个 token
      console.log(token);
    },
    onCompletion: (completion) => {
      // 在服务器端输出完整的响应
      console.log('Complete response:', completion);
    },
  });

  // 返回流式响应
  return new StreamingTextResponse(stream);
} 
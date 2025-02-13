import { OpenAI } from 'openai';
import { StreamingTextResponse } from 'ai';

// 初始化火山引擎客户端
const client = new OpenAI({
  apiKey: process.env.VOLC_API_KEY || '0deb2718-7709-451c-8af3-53c737babead',
  baseURL: 'https://ark.cn-beijing.volces.com/api/v3',
});

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // 过滤掉消息中的reasoning内容
    const filteredMessages = messages.map(({ role, content }: any) => ({
      role,
      content: typeof content === 'string' ? content.replace(/<think>[\s\S]*?<\/think>/g, '') : content
    }));

    const response = await client.chat.completions.create({
      model: 'ep-20250213235903-c2gxm',
      messages: filteredMessages,
      stream: true,
      max_tokens: 2000,
      temperature: 0.7,
    });

    // 自定义流处理器，过滤reasoning_content
    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          for await (const chunk of response) {
            const content = chunk.choices[0]?.delta?.content;
            // 只处理有效的content内容
            if (content && typeof content === 'string') {
              controller.enqueue(encoder.encode(content));
            }
          }
          controller.close();
        } catch (error) {
          console.error('Stream processing error:', error);
          controller.error(error);
        }
      },
    });

    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error('API route error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 
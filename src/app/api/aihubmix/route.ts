import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

// 初始化 OpenAI 客户端
const client = new OpenAI({
  apiKey: process.env.AiHubMix_API_KEY || 'sk-ysF0SA6kJ7C1I2wG2f901fD6Fe8443Df8f75C92a0aF1Ce2b',
  baseURL: 'https://aihubmix.com/v1'
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { resumeContent, jobDescription } = body;

    // 构建提示词
    const prompt = `
      请分析以下简历内容和职位要求的匹配程度：
      
      简历内容：
      ${resumeContent}
      
      职位要求：
      ${jobDescription}
      
      请提供以下分析：
      1. 总体匹配度评分（0-100）
      2. 候选人的主要优势（列出3-5点）
      3. 需要改进的地方（列出2-3点）
      
      请以JSON格式返回，包含以下字段：
      {
        "score": 数字,
        "strengths": ["优势1", "优势2", "优势3"],
        "improvements": ["建议1", "建议2"]
      }
    `;

    // 调用 Gemini API
    const completion = await client.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        }
      ],
      model: "gemini-2.0-flash",
      temperature: 0.7,
      max_tokens: 1000,
    });

    // 解析返回的结果
    const result = completion.choices[0]?.message?.content;
    if (!result) {
      throw new Error('No result from API');
    }

    // 尝试解析 JSON 结果
    try {
      const parsedResult = JSON.parse(result);
      return NextResponse.json(parsedResult);
    } catch (e) {
      // 如果返回结果不是有效的 JSON，返回原始文本
      return NextResponse.json({
        error: 'Invalid JSON response',
        rawResult: result
      });
    }

  } catch (error: any) {
    console.error('AiHubMix API Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
} 
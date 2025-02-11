import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const client = new OpenAI({
  apiKey: process.env.DEEPSEEK_SINGLE_API_KEY || '',
  baseURL: 'https://www.gptapi.us/v1'
});

const SYSTEM_PROMPT = `你是一个专业的职业规划顾问。请分析简历内容，生成2个最匹配的职位关键词，按照与简历内容的相关度从高到低排序。

要求：
1. 关键词要简洁通用，例如"AI产品经理"、"全栈工程师"
2. 第一个关键词应该是最具体且最匹配的职位
3. 第二个关键词可以是更通用的上位职位
4. 每个关键词控制在2-6个字
5. 使用常见的职位名称
6. 优先考虑简历中提到的技术栈和领域经验

请严格按照以下JSON格式返回：
{
  "keywords": ["最匹配职位", "次匹配职位"]
}`;

export async function POST(request: Request) {
  try {
    const { resumeText } = await request.json();
    console.log('收到简历文本:', resumeText.substring(0, 100) + '...');
    
    const completion = await client.chat.completions.create({
      model: 'deepseek-v3',
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT
        },
        {
          role: "user",
          content: `请分析以下简历内容，生成两个简洁的职位关键词：\n\n${resumeText.substring(0, 3000)}`
        }
      ],
      temperature: 0.7,
      response_format: { type: "json_object" }
    });

    const result = completion.choices[0].message.content;
    console.log('AI 原始响应:', result);

    try {
      // 清理响应文本，移除可能的 Markdown 代码块标记
      const cleanResult = result.replace(/```json\n|\n```/g, '').trim();
      const parsed = JSON.parse(cleanResult);
      console.log('解析后的JSON:', parsed);
      
      if (!parsed.keywords) {
        console.error('缺少 keywords 字段');
        throw new Error('Missing keywords field');
      }
      
      if (!Array.isArray(parsed.keywords)) {
        console.error('keywords 不是数组');
        throw new Error('Keywords is not an array');
      }
      
      if (parsed.keywords.length < 2) {
        console.error('keywords 数组长度小于2');
        throw new Error('Not enough keywords');
      }

      return NextResponse.json({ 
        success: true, 
        keywords: parsed.keywords
      });
    } catch (parseError) {
      console.error('JSON解析错误:', parseError);
      return NextResponse.json(
        { 
          error: '生成失败', 
          details: `解析错误: ${parseError.message}`
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API错误:', error);
    return NextResponse.json(
      { 
        error: '生成失败', 
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
} 
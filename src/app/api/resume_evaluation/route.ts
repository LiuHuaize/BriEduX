import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

// 初始化 OpenAI 客户端
const client = new OpenAI({
  apiKey: process.env.AiHubMix_API_KEY || 'sk-ysF0SA6kJ7C1I2wG2f901fD6Fe8443Df8f75C92a0aF1Ce2b',
  baseURL: 'https://aihubmix.com/v1'
});

const SYSTEM_PROMPT = `你是一位资深的简历评估专家，拥有丰富的人力资源经验，能够以专业、精准的视角为各类简历进行深度分析与打分。

评估要求：
1. 全面审阅简历内容，从工作经验、工作经历、工作技能等多个维度进行评估
2. 依据行业标准，给出0-100分的具体分数，并详细说明打分依据
3. 深入分析简历中的突出优势，说明这些优势在求职过程中的具体作用
4. 找出简历中存在的问题和不足，并给出切实可行的优化建议

注意事项：
- 输出内容使用纯文本格式，不要使用markdown语法
- 评估要围绕工作经验、工作经历、工作技能进行分析
- 所有建议要高度具体、明确，具备很强的可操作性
- 保持专业水准，杜绝使用空洞套话`;

export async function POST(request: Request) {
  try {
    console.log('开始处理简历评估请求...');
    const { resumeContent } = await request.json();

    if (!resumeContent) {
      console.error('简历内容为空');
      return NextResponse.json(
        { error: '简历内容不能为空' },
        { status: 400 }
      );
    }

    console.log('简历内容长度:', resumeContent.length);
    console.log('简历内容预览:', resumeContent.substring(0, 200) + '...');

    const prompt = `${SYSTEM_PROMPT}\n\n请分析以下简历内容：\n\n${resumeContent}\n\n请严格按照以下JSON格式返回，不要包含任何其他内容：
{
  "score": 分数(0-100),
  "strengths": ["优势1", "优势2", "优势3"],
  "improvements": ["建议1", "建议2"],
  "summary": "综合评价和建议（约400字）"
}

注意：
1. 必须严格按照JSON格式返回
2. 不要添加任何额外的开场白或说明
3. 不要使用markdown格式
4. 确保所有字段都是合法的JSON值`;

    console.log('开始调用 AI API...');
    const completion = await client.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "你是一个JSON格式化助手，你的回答必须是严格的JSON格式，不能包含任何其他内容。",
        },
        {
          role: "user",
          content: prompt,
        }
      ],
      model: "gemini-2.0-pro-exp-02-05",
      temperature: 0.7,
    });

    console.log('AI API 响应:', completion);
    const result = completion.choices[0]?.message?.content;
    
    if (!result) {
      console.error('API 返回结果为空');
      throw new Error('API 返回结果为空');
    }

    // 清理和解析JSON字符串
    try {
      let cleanResult = result.trim();
      
      // 尝试提取JSON部分
      const jsonMatch = cleanResult.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        cleanResult = jsonMatch[0];
      }

      // 移除可能的注释和非JSON内容
      cleanResult = cleanResult.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');
      
      // 尝试解析JSON
      const parsedResult = JSON.parse(cleanResult);
      
      // 确保所有必需的字段都存在
      if (!parsedResult.score || !parsedResult.strengths || !parsedResult.improvements || !parsedResult.summary) {
        throw new Error('返回的JSON缺少必需字段');
      }

      // 处理summary字段，确保是纯文本
      parsedResult.summary = parsedResult.summary
        .replace(/\*\*/g, '')
        .replace(/#{1,6}\s/g, '')
        .replace(/\\n/g, '\n')
        .trim();

      return NextResponse.json({
        success: true,
        data: parsedResult
      });
    } catch (parseError) {
      console.error('JSON解析错误:', parseError);
      // 如果解析失败，返回格式化的错误信息
      return NextResponse.json({
        success: false,
        error: 'JSON解析错误',
        details: parseError instanceof Error ? parseError.message : String(parseError),
        rawContent: result
      }, { status: 400 });
    }

  } catch (error) {
    console.error('API 错误:', error);
    return NextResponse.json(
      { 
        error: '简历评估失败',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
} 

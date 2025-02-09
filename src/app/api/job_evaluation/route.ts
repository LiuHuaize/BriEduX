import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

// 初始化 OpenAI 客户端
const client = new OpenAI({
  apiKey: process.env.AiHubMix_API_KEY || 'sk-ysF0SA6kJ7C1I2wG2f901fD6Fe8443Df8f75C92a0aF1Ce2b',
  baseURL: 'https://aihubmix.com/v1'
});

const SYSTEM_PROMPT = `你是一位专业且犀利的全领域的就业指导专家，能够依据用户的简历内容、简历评估结果以及意向岗位信息，完全贴合岗位深度进行精准的岗位匹配度分析，同时提供切实可行的提升优化建议和详细的面试注意事项。

分析要求：
1. 仔细分析用户提供的简历信息和意向岗位要求，从专业技能、工作经验、综合素质等方面进行匹配度评估
2. 根据匹配度分析结果，为用户提供有针对性的简历优化建议和个人能力提升方向
3. 结合意向岗位特点，为用户提供面试相关的注意事项

注意事项：
- 输出内容使用纯文本格式，不要使用markdown语法
- 建议和注意事项要具体、可操作，避免套话
- 必须结合岗位深度，技能深度进行分析，站在行内人的视角进行分析`;

export async function POST(request: Request) {
  try {
    console.log('开始处理岗位匹配评估请求...');
    const { resumeContent, jobDescription } = await request.json();

    if (!resumeContent || !jobDescription) {
      console.error('简历内容或岗位描述为空');
      return NextResponse.json(
        { error: '简历内容和岗位描述不能为空' },
        { status: 400 }
      );
    }

    console.log('简历内容长度:', resumeContent.length);
    console.log('简历内容预览:', resumeContent.substring(0, 200) + '...');
    console.log('岗位描述长度:', jobDescription.length);
    console.log('岗位描述预览:', jobDescription.substring(0, 200) + '...');

    const prompt = `${SYSTEM_PROMPT}\n\n请分析以下简历内容和岗位要求：\n\n简历内容：\n${resumeContent}\n\n岗位要求：\n${jobDescription}\n\n请严格按照以下JSON格式返回，不要包含任何其他内容：
{
  "score": 岗位匹配度分数(0-100),
  "strengths": ["匹配优势1", "匹配优势2", "匹配优势3"],
  "improvements": ["提升建议1", "提升建议2"],
  "summary": "综合评价和建议（约500字）"
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
      model: "gemini-2.0-pro-exp-02-05-search",
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
        error: '岗位匹配评估失败',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
} 

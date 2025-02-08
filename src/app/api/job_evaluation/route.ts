import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

// 初始化 OpenAI 客户端
const client = new OpenAI({
  apiKey: process.env.AiHubMix_API_KEY || 'sk-ysF0SA6kJ7C1I2wG2f901fD6Fe8443Df8f75C92a0aF1Ce2b',
  baseURL: 'https://aihubmix.com/v1'
});

const SYSTEM_PROMPT = `# 角色
你是一位专业且犀利的全领域的就业指导专家，能够依据用户的简历内容、简历评估结果以及意向岗位信息，完全贴合岗位深度进行精准的岗位匹配度分析，同时提供切实可行的提升优化建议和详细的面试注意事项。

## 技能
### 技能 1：岗位匹配度分析
1. 仔细分析用户提供的简历信息和意向岗位要求，以行内人的视角，从专业技能、工作经验、综合素质等方面进行匹配度评估。
2. 以清晰的列表形式呈现匹配度分析结果。

### 技能 2：提升优化建议
1. 根据匹配度分析结果，为用户提供有针对性的简历优化建议和个人能力提升方向。
2. 建议要具体、可操作，避免空洞的套话，一定要深入岗位市场所用到的干货技能。

### 技能 3：面试注意事项
1. 结合意向岗位特点，为用户提供面试前、面试中、面试后的注意事项。

## 限制
- 只围绕就业指导相关内容进行分析和建议，拒绝回答与就业指导无关的话题。
- 所输出的内容必须按照给定的格式进行组织，不能偏离框架要求。
- 建议和注意事项部分要具体、可操作，避免套话。
- 必须结合岗位深度，技能深度进行分析，站在行内人的视角进行分析。`;

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

    const prompt = `${SYSTEM_PROMPT}\n\n请分析以下简历内容和岗位要求：\n\n简历内容：\n${resumeContent}\n\n岗位要求：\n${jobDescription}\n\n请以JSON格式返回，包含以下字段：
    {
      "score": 岗位匹配度分数(0-100),
      "strengths": ["匹配优势1", "匹配优势2", "匹配优势3"],
      "improvements": ["提升建议1", "提升建议2"],
      "summary": "综合评价和建议"
    }`;

    console.log('开始调用 AI API...');
    const completion = await client.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        }
      ],
      model: "gemini-2.0-flash",
      temperature: 0.7,
      max_tokens: 2000,
    });

    console.log('AI API 响应:', completion);
    const result = completion.choices[0]?.message?.content;
    
    if (!result) {
      console.error('API 返回结果为空');
      throw new Error('API 返回结果为空');
    }

    return NextResponse.json({
      success: true,
      data: result
    });

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

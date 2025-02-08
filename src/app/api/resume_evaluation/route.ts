import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

// 初始化 OpenAI 客户端
const client = new OpenAI({
  apiKey: process.env.AiHubMix_API_KEY || 'sk-ysF0SA6kJ7C1I2wG2f901fD6Fe8443Df8f75C92a0aF1Ce2b',
  baseURL: 'https://aihubmix.com/v1'
});

const SYSTEM_PROMPT = `# 角色
你是一位资深的简历评估专家，拥有丰富的人力资源经验，能够以专业、精准的视角为各类简历进行深度分析与打分。

## 技能
### 技能 1：简历打分
1. 全面审阅用户提供的简历内容，从多个专业维度进行考量。
2. 依据严格行业的标准，结合工作经验、工作经历、工作技能，要结合客观实际，侧重于个人能力，对于个人信息类的不做过多考虑，给出 0-100 分的具体分数。同时详细阐述打分的依据，包括但不限于工作经验的丰富度、技能与岗位的匹配度、教育背景的相关性等。

### 技能 2：指出优势
1. 深入剖析简历中的突出亮点和优势部分。
2. 明确说明这些优势在求职过程中的具体作用，例如能够吸引招聘者的注意力、增加面试机会等。

### 技能 3：指出缺陷
1. 准确找出简历中存在的各类问题和不足之处。
2. 详细解释这些缺陷可能对求职产生的负面效应，如降低竞争力、减少被邀约面试的几率等。

### 技能 4：提出优化意见
1. 针对简历的缺陷，给出切实可行的具体优化建议。
2. 清晰说明优化后的预期效果，如提升简历的专业性、增加被青睐的可能性等。

## 限制
- 输出内容不能使用一、二级标题，只能使用###三级标题
- 格围绕简历相关内容进行分析，拒绝回答与简历无关的话题。
- 所输出的内容必须按照给定的格式进行组织，不能偏离框架要求。
- 对优势、缺陷的描述以及优化建议要高度具体、明确，具备很强的可操作性。
- 保持专业水准，杜绝使用空洞套话。
- 主要围绕工作经验、工作经历、工作技能，要结合行业领域方向，侧重于个人能力，给出分析`;

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

    const prompt = `${SYSTEM_PROMPT}\n\n请分析以下简历内容：\n\n${resumeContent}\n\n请以JSON格式返回，包含以下字段：
    {
      "score": 分数(0-100),
      "strengths": ["优势1", "优势2", "优势3"],
      "improvements": ["建议1", "建议2"]
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

    console.log('原始返回结果:', result);

    try {
      // 尝试解析 JSON
      const parsedResult = JSON.parse(result);
      console.log('解析后的结果:', parsedResult);
      
      // 验证数据格式
      if (typeof parsedResult.score !== 'number' || 
          !Array.isArray(parsedResult.strengths) || 
          !Array.isArray(parsedResult.improvements)) {
        console.error('数据格式不正确:', parsedResult);
        throw new Error('返回数据格式不正确');
      }

      // 确保分数在 0-100 范围内
      parsedResult.score = Math.max(0, Math.min(100, parsedResult.score));

      return NextResponse.json({
        success: true,
        data: parsedResult
      });
    } catch (e) {
      console.error('JSON 解析错误:', e);
      console.log('尝试提取 JSON 字符串...');
      
      // 尝试从文本中提取 JSON
      const jsonMatch = result.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          const extractedJson = JSON.parse(jsonMatch[0]);
          console.log('提取的 JSON:', extractedJson);
          
          // 构造标准格式的响应
          const standardResponse = {
            score: typeof extractedJson.score === 'number' ? Math.max(0, Math.min(100, extractedJson.score)) : 0,
            strengths: Array.isArray(extractedJson.strengths) ? extractedJson.strengths : [],
            improvements: Array.isArray(extractedJson.improvements) ? extractedJson.improvements : []
          };

          return NextResponse.json({
            success: true,
            data: standardResponse
          });
        } catch (e2) {
          console.error('提取的 JSON 解析失败:', e2);
        }
      }

      // 如果所有解析尝试都失败，返回原始文本
      console.log('返回原始文本作为结果');
      return NextResponse.json({
        success: true,
        data: {
          score: 0,
          strengths: [],
          improvements: ['无法解析 AI 返回的结果，请重试']
        }
      });
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

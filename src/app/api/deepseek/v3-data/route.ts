import { OpenAI } from 'openai';

// 创建 OpenAI 客户端
const client = new OpenAI({
  apiKey: process.env.DEEPSEEK_SINGLE_API_KEY || '',
  baseURL: 'https://www.gptapi.us/v1',
});

export const runtime = 'edge';

// 提取信息的系统提示词
const EXTRACT_SYSTEM_PROMPT = `你是一个专门负责从对话中提取信息的AI助手。你的任务是从用户和AI助手的对话中提取关键信息，并以JSON格式返回。

请严格遵循以下规则：
1. 只提取确定的信息，不要猜测或推断
2. 如果某个字段无法提取到信息，将其值设为null
3. 返回格式必须是合法的JSON，不要包含任何其他格式标记
4. 不要添加任何解释性文字，只返回JSON对象
5. 数组如果为空，返回空数组[]而不是null
6. 确保所有字符串值都用双引号而不是单引号
7. 忽略所有<think>标签之间的内容，只提取实际对话中的信息

示例对话：
用户：我叫张三，电话13800138000，邮箱zhangsan@example.com
助手：<think>用户提供了基本信息，我需要确认</think>
您好张三！已经收到您的信息，让我确认一下：
电话：13800138000
邮箱：zhangsan@example.com

示例返回JSON：
{
  "basic_info": {
    "name": "张三",
    "phone": "13800138000",
    "email": "zhangsan@example.com"
  },
  "target_job": null,
  "education": [],
  "work_experience": [],
  "projects": [],
  "skills": [],
  "certifications": []
}`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // 预处理消息，移除思维过程
    const cleanedMessages = messages.map((msg: any) => ({
      ...msg,
      content: msg.content.replace(/<think>[\s\S]*?<\/think>/g, '').trim()
    }));

    // 构造提取信息的请求
    const response = await client.chat.completions.create({
      model: 'deepseek-v3',
      messages: [
        { role: 'system', content: EXTRACT_SYSTEM_PROMPT },
        { role: 'user', content: '请从以下对话中提取信息并直接返回JSON格式：' + JSON.stringify(cleanedMessages) }
      ],
      temperature: 0.1, // 使用较低的temperature以获得更稳定的输出
      max_tokens: 2000,
      response_format: { type: "json_object" } // 确保返回JSON格式
    });

    // 获取生成的JSON响应
    const content = response.choices[0].message.content || '';
    
    // 尝试解析JSON，确保返回的是有效的JSON
    let result;
    try {
      // 如果返回的内容包含markdown标记，尝试提取JSON部分
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      const jsonStr = jsonMatch ? jsonMatch[0] : content;
      result = JSON.parse(jsonStr);

      // 验证结果格式
      if (!result.basic_info) {
        result.basic_info = { name: null, phone: null, email: null };
      }
      if (!result.education) result.education = [];
      if (!result.work_experience) result.work_experience = [];
      if (!result.projects) result.projects = [];
      if (!result.skills) result.skills = [];
      if (!result.certifications) result.certifications = [];
      
    } catch (parseError) {
      console.error('Failed to parse JSON:', parseError);
      throw new Error('Invalid JSON format');
    }

    // 返回提取的信息
    return new Response(JSON.stringify(result), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error extracting information:', error);
    // 返回一个带有默认值的响应，而不是错误
    const defaultResponse = {
      basic_info: {
        name: null,
        phone: null,
        email: null
      },
      target_job: null,
      education: [],
      work_experience: [],
      projects: [],
      skills: [],
      certifications: []
    };
    
    return new Response(JSON.stringify(defaultResponse), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

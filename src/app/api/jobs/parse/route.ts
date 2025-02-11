import { NextResponse } from 'next/server';

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY || 'sk-b4cf093983e34e8e8cfd77df1e2c1d88';

interface JobInfo {
  company: string;
  position: string;
  location: string;
  salary: string;
  url: string;
}

const SYSTEM_PROMPT = `你是一个专业的数据解析助手。你的任务是将输入的职位信息文本解析为结构化的JSON数据。

要求：
1. 从文本中提取每个职位的公司名称、职位名称、工作地点、薪资和URL
2. 将所有信息格式化为JSON数组
3. 确保所有字段都经过清理和标准化
4. 保持原始数据的完整性
5. 如果某个字段缺失，使用空字符串代替
6. 特别注意从文本中的Markdown链接格式（[链接标题](URL)）中提取URL
7. 确保每个职位的URL与对应的职位信息完全匹配
8. 如果找不到对应的URL，将url字段设置为空字符串

输出格式示例：
{
  "jobs": [
    {
      "company": "公司名称",
      "position": "职位名称",
      "location": "工作地点",
      "salary": "薪资范围",
      "url": "职位链接"
    }
  ]
}`;

const USER_PROMPT_TEMPLATE = `请将以下职位信息解析为结构化的JSON数据：

{text}

请只返回JSON格式的数据，不要包含任何其他解释或说明。`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { text } = body;

    if (!text) {
      return NextResponse.json(
        { error: '输入文本不能为空' },
        { status: 400 }
      );
    }

    // 调用 Deepseek API 解析数据
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: SYSTEM_PROMPT
          },
          {
            role: 'user',
            content: USER_PROMPT_TEMPLATE.replace('{text}', text)
          }
        ],
        temperature: 0.1, // 使用较低的温度以获得更一致的输出
        max_tokens: 2000
      })
    });

    if (!response.ok) {
      throw new Error('Deepseek API 调用失败');
    }

    const data = await response.json();
    const parsedContent = JSON.parse(data.choices[0].message.content);

    // 验证解析后的数据
    if (!parsedContent.jobs || !Array.isArray(parsedContent.jobs)) {
      throw new Error('解析结果格式不正确');
    }

    return NextResponse.json({
      success: true,
      data: parsedContent.jobs
    });

  } catch (error) {
    console.error('解析错误:', error);
    return NextResponse.json(
      { 
        error: '解析失败',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
} 
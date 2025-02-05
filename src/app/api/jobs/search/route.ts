import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

// 定义 API 响应的类型
interface CozeResponse {
  code: number;
  cost: string;
  data: string;
  debug_url: string;
  msg: string;
  token: number;
}

// 定义工作信息的类型
interface JobInfo {
  company: string;
  position: string;
  location: string;
  salary: string;
  url: string;
}

// 定义搜索参数的类型
interface SearchParams {
  query: string;
}

const COZE_API_KEY = process.env.COZE_API_KEY || 'pat_HYdaq6FMk4Ad2gmFbfHETnetfrdRi0ghyElWdOwhRJSiKwyxrInoQfEcm88FBxD9';
const WORKFLOW_ID = process.env.WORKFLOW_ID || '7460118230254846003';

// 创建 OpenAI 客户端
const client = new OpenAI({
  apiKey: process.env.DEEPSEEK_SINGLE_API_KEY || '',
  baseURL: 'https://www.gptapi.us/v1',
});

const PARSE_SYSTEM_PROMPT = `你是一个专业的数据解析助手。你的任务是将输入的职位信息文本解析为结构化的JSON数据。

要求：
1. 从文本中提取每个职位的公司名称、职位名称、工作地点、薪资和URL
2. 将所有信息格式化为JSON数组
3. 确保所有字段都经过清理和标准化
4. 保持原始数据的完整性
5. 如果某个字段缺失，使用空字符串代替

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

export async function POST(request: Request) {
  try {
    // 解析请求体
    const body: SearchParams = await request.json();
    
    // 验证请求参数
    if (!body.query) {
      return NextResponse.json(
        { error: '搜索查询不能为空' },
        { status: 400 }
      );
    }

    // 调用 Coze API 搜索工作
    const cozeResponse = await fetch('https://api.coze.cn/v1/workflow/run', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${COZE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parameters: {
          job_title: body.query
        },
        workflow_id: WORKFLOW_ID
      })
    });

    if (!cozeResponse.ok) {
      throw new Error('Coze API 调用失败');
    }

    const cozeData: CozeResponse = await cozeResponse.json();
    console.log('Coze API 返回数据:', cozeData);
    
    const parsedData = JSON.parse(cozeData.data);
    console.log('解析后的 Coze 数据:', parsedData);
    
    // 使用 Deepseek API 解析数据
    const completion = await client.chat.completions.create({
      model: 'deepseek-v3',
      messages: [
        {
          role: 'system',
          content: PARSE_SYSTEM_PROMPT
        },
        {
          role: 'user',
          content: `请将以下职位信息解析为结构化的JSON数据：\n\n${parsedData.output}\n\n请只返回JSON格式的数据，不要包含任何其他解释或说明。`
        }
      ],
      temperature: 0.1,
      max_tokens: 2000,
      response_format: { type: "json_object" } // 确保返回JSON格式
    });

    const content = completion.choices[0].message.content;
    if (!content) {
      throw new Error('Deepseek API 返回内容为空');
    }
    
    console.log('Deepseek API 返回内容:', content);
    
    // 尝试解析JSON，确保返回的是有效的JSON
    let jobListings;
    try {
      // 如果返回的内容包含markdown标记，尝试提取JSON部分
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      const jsonStr = jsonMatch ? jsonMatch[0] : content;
      jobListings = JSON.parse(jsonStr);
      
      console.log('解析后的工作列表:', jobListings);
      
      // 验证解析后的数据
      if (!jobListings.jobs || !Array.isArray(jobListings.jobs)) {
        throw new Error('解析结果格式不正确');
      }

      return NextResponse.json({
        success: true,
        data: jobListings.jobs,
        debug_url: cozeData.debug_url
      });
    } catch (parseError) {
      console.error('JSON 解析错误:', parseError);
      return NextResponse.json({
        error: '数据解析失败',
        details: parseError instanceof Error ? parseError.message : String(parseError),
        raw_content: content
      }, { status: 500 });
    }

  } catch (error) {
    console.error('API 错误:', error);
    return NextResponse.json(
      { 
        error: '服务器内部错误',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}

// API 使用示例：
/*
curl -X POST 'http://localhost:3000/api/jobs/search' \
-H "Content-Type: application/json" \
-d '{
  "query": "重庆，律师，30000工资以上"
}'
*/ 
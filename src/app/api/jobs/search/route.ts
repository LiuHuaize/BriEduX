// 设置 Vercel Serverless Function 超时时间为 60 秒
export const maxDuration = 60;

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

// API配置
const API_CONFIG = {
  COZE_API_KEY: process.env.COZE_API_KEY || 'pat_HYdaq6FMk4Ad2gmFbfHETnetfrdRi0ghyElWdOwhRJSiKwyxrInoQfEcm88FBxD9',
  WORKFLOW_ID: process.env.WORKFLOW_ID || '7460118230254846003',
  TIMEOUT: 50000,
  DEEPSEEK_TIMEOUT: 50000,
  MAX_RETRIES: 2,
};

// 创建 OpenAI 客户端
const client = new OpenAI({
  apiKey: process.env.DEEPSEEK_SINGLE_API_KEY || '',
  baseURL: 'https://www.gptapi.us/v1',
  timeout: API_CONFIG.DEEPSEEK_TIMEOUT,
});

const PARSE_SYSTEM_PROMPT = `你是一个专业的数据解析助手。你的任务是将输入的职位信息文本解析为结构化的JSON数据。

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

// 添加超时控制的fetch函数
async function fetchWithTimeout(url: string, options: RequestInit & { timeout?: number }) {
  const { timeout = API_CONFIG.TIMEOUT, ...fetchOptions } = options;
  
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

// Coze API调用函数
async function callCozeAPI(query: string, retryCount = 0): Promise<CozeResponse> {
  try {
    const response = await fetchWithTimeout('https://api.coze.cn/v1/workflow/run', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_CONFIG.COZE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parameters: {
          job_title: query
        },
        workflow_id: API_CONFIG.WORKFLOW_ID
      }),
      timeout: API_CONFIG.TIMEOUT
    });

    if (!response.ok) {
      throw new Error(`Coze API failed with status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (retryCount < API_CONFIG.MAX_RETRIES) {
      console.log(`Retrying Coze API call, attempt ${retryCount + 1}`);
      return callCozeAPI(query, retryCount + 1);
    }
    throw error;
  }
}

// Deepseek API调用函数
async function callDeepseekAPI(text: string, retryCount = 0) {
  try {
    const completion = await client.chat.completions.create({
      model: 'deepseek-v3',
      messages: [
        {
          role: 'system',
          content: PARSE_SYSTEM_PROMPT
        },
        {
          role: 'user',
          content: `请将以下职位信息解析为结构化的JSON数据：\n\n${text}\n\n请确保从原始文本中提取所有URL信息，并正确对应到每个职位条目。只返回JSON格式的数据，不要包含任何其他解释或说明。`
        }
      ],
      temperature: 0.1,
      max_tokens: 2000,
      response_format: { type: "json_object" }
    });

    const rawContent = completion.choices[0].message.content;
    if (!rawContent) {
      throw new Error('Deepseek API 返回内容为空');
    }
    
    // 清理返回内容中的Markdown代码块标记
    let content = rawContent.replace(/^```json\n/, '').replace(/\n```$/, '');
    // 清理可能存在的其他Markdown标记
    content = content.replace(/^```\n/, '').replace(/\n```$/, '');
    
    return content;
  } catch (error) {
    if (retryCount < API_CONFIG.MAX_RETRIES) {
      console.log(`Retrying Deepseek API call, attempt ${retryCount + 1}`);
      return callDeepseekAPI(text, retryCount + 1);
    }
    throw error;
  }
}

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

    // 调用Coze API获取职位信息
    const cozeData = await callCozeAPI(body.query);
    console.log('Coze API 返回数据:', cozeData);
    
    // 调用 Deepseek API 解析数据
    const content = await callDeepseekAPI(cozeData.data);
    if (!content) {
      throw new Error('Deepseek API 返回内容为空');
    }
    
    console.log('Deepseek API 返回内容:', content);
    
    // 解析JSON响应
    let jobListings;
    try {
      jobListings = JSON.parse(content);
    } catch (error) {
      console.error('JSON解析错误，原始内容:', content);
      throw new Error(`JSON解析失败: ${error instanceof Error ? error.message : String(error)}`);
    }
    
    // 验证数据结构
    if (!jobListings.jobs || !Array.isArray(jobListings.jobs)) {
      throw new Error('解析结果格式不正确');
    }

    return NextResponse.json({
      success: true,
      data: jobListings.jobs,
      output: cozeData.data,
      debug_url: cozeData.debug_url
    });

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
  "query": "重庆，律师，3000工资以上"
}'
*/ 
#!/bin/bash

echo "1. 测试简历分析和关键词生成..."
KEYWORDS_RESPONSE=$(curl -s -X POST http://localhost:3000/api/jobs/generate-keywords \
  -H "Content-Type: application/json" \
  -d '{
    "resumeText": "工作经验：\n- 5年前端开发经验\n- 精通 React、Vue.js、TypeScript\n- 熟悉 Node.js 和后端开发\n- 参与过多个大型电商项目开发\n\n教育背景：\n计算机科学学士学位"
  }')

echo "关键词生成结果："
echo $KEYWORDS_RESPONSE | json_pp

# 提取关键词并进行搜索
if [[ $KEYWORDS_RESPONSE == *"success"* ]]; then
  echo -e "\n2. 使用生成的关键词搜索职位..."
  
  # 提取第一个关键词进行搜索
  echo -e "\n2.1 使用第一个关键词搜索："
  curl -s -X POST http://localhost:3000/api/jobs/search \
    -H "Content-Type: application/json" \
    -d '{
      "query": "前端开发"
    }' | json_pp
    
  # 等待1秒
  sleep 1
  
  # 提取第二个关键词进行搜索
  echo -e "\n2.2 使用第二个关键词搜索："
  curl -s -X POST http://localhost:3000/api/jobs/search \
    -H "Content-Type: application/json" \
    -d '{
      "query": "全栈开发"
    }' | json_pp
else
  echo "关键词生成失败，无法继续搜索"
  exit 1
fi
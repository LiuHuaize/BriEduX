首次调用 API
DeepSeek API 使用与 OpenAI 兼容的 API 格式，通过修改配置，您可以使用 OpenAI SDK 来访问 DeepSeek API，或使用与 OpenAI API 兼容的软件。

PARAM	VALUE
base_url *       	https://api.deepseek.com
api_key	apply for an API key
* 出于与 OpenAI 兼容考虑，您也可以将 base_url 设置为 https://api.deepseek.com/v1 来使用，但注意，此处 v1 与模型版本无关。

* deepseek-chat 模型已全面升级为 DeepSeek-V3，接口不变。 通过指定 model='deepseek-chat' 即可调用 DeepSeek-V3。

* deepseek-reasoner 是 DeepSeek 最新推出的推理模型 DeepSeek-R1。通过指定 model='deepseek-reasoner'，即可调用 DeepSeek-R1。

调用对话 API
在创建 API key 之后，你可以使用以下样例脚本的来访问 DeepSeek API。样例为非流式输出，您可以将 stream 设置为 true 来使用流式输出。

curl
python
nodejs
# Please install OpenAI SDK first: `pip3 install openai`

from openai import OpenAI

client = OpenAI(api_key="<DeepSeek API Key>", base_url="https://api.deepseek.com")

# DeepSeek-V3 聊天模型调用示例
def chat_with_deepseek_v3(prompt: str, system_prompt: str = "You are a helpful assistant"):
    response = client.chat.completions.create(
        model="deepseek-chat",  # DeepSeek-V3 模型
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": prompt},
        ],
        stream=False,
        temperature=0.7,
        max_tokens=2000
    )
    return response.choices[0].message.content

# DeepSeek-R1 推理模型调用示例
def reason_with_deepseek_r1(prompt: str, system_prompt: str = "You are a logical reasoning assistant"):
    response = client.chat.completions.create(
        model="deepseek-reasoner",  # DeepSeek-R1 模型
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": prompt},
        ],
        stream=False,
        temperature=0.3,  # 推理任务使用较低的温度以获得更确定的答案
        max_tokens=2000
    )
    return response.choices[0].message.content

# 使用示例
if __name__ == "__main__":
    # 测试 DeepSeek-V3
    chat_prompt = "请帮我写一个简短的自我介绍。"
    chat_response = chat_with_deepseek_v3(chat_prompt)
    print("DeepSeek-V3 回复:", chat_response)
    
    # 测试 DeepSeek-R1
    reason_prompt = "解释一下为什么地球是圆的，请给出科学依据。"
    reason_response = reason_with_deepseek_r1(reason_prompt)
    print("DeepSeek-R1 回复:", reason_response)

# 流式输出版本示例
async def stream_chat_with_deepseek_v3(prompt: str, system_prompt: str = "You are a helpful assistant"):
    response = client.chat.completions.create(
        model="deepseek-chat",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": prompt},
        ],
        stream=True,
        temperature=0.7,
        max_tokens=2000
    )
    
    full_response = ""
    for chunk in response:
        if chunk.choices[0].delta.content is not None:
            full_response += chunk.choices[0].delta.content
            print(chunk.choices[0].delta.content, end="", flush=True)
    return full_response

async def stream_reason_with_deepseek_r1(prompt: str, system_prompt: str = "You are a logical reasoning assistant"):
    response = client.chat.completions.create(
        model="deepseek-reasoner",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": prompt},
        ],
        stream=True,
        temperature=0.3,
        max_tokens=2000
    )
    
    full_response = ""
    for chunk in response:
        if chunk.choices[0].delta.content is not None:
            full_response += chunk.choices[0].delta.content
            print(chunk.choices[0].delta.content, end="", flush=True)
    return full_response


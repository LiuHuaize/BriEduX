"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  Mic, 
  Image as ImageIcon, 
  Paperclip,
  Bot,
  User,
  Loader2,
  CheckCircle2,
  CheckCircle,
  Circle,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useChat } from 'ai/react';
import { useRouter } from 'next/navigation';

// 定义简历信息收集的步骤
const RESUME_STEPS = {
  INIT: 'init',
  TARGET_JOB: 'target_job',
  EDUCATION: 'education',
  WORK_EXPERIENCE: 'work_experience',
  PROJECTS: 'projects',
  SKILLS: 'skills',
  CONFIRM: 'confirm'
} as const;

type ResumeStep = typeof RESUME_STEPS[keyof typeof RESUME_STEPS];

interface ResumeData {
  target_job?: string;
  education?: string;
  work_experience?: string;
  projects?: string;
  skills?: string;
}

// 系统提示词，包含完整的对话策略
const SYSTEM_PROMPT = `你是一个专业的简历顾问，帮助用户创建简历。请遵循以下规则：
1. 使用结构化的方式收集信息，但保持对话自然。
2. 按照以下顺序收集信息：目标职位 -> 教育背景 -> 工作经历 -> 项目经验 -> 技能证书。
3. 每个部分都要详细追问，确保信息完整：
   - 目标职位：具体职位名称、期望行业、是否有具体目标公司
   - 教育背景：学校、专业、学位、时间、GPA（如果有）
   - 工作经历：公司名称、职位、时间段、主要职责、成就（用数据量化）
   - 项目经验：项目名称、角色、技术栈、难点、成果
   - 技能证书：专业技能、语言能力、证书
4. 如果用户的回答不完整，要继续追问缺失的部分。
5. 在合适的时机总结已收集的信息，确认是否准确。
6. 所有回复使用中文，语气专业友好。
7. 如果用户想修改之前的信息，要能灵活切换到对应部分。`;

const WELCOME_MESSAGE = {
  id: 'welcome',
  role: 'assistant',
  content: `你好！我是你的AI简历助手，让我们一步步完成你的专业简历。

首先，请告诉我你期望申请的目标职位是什么？如果有具体的职位描述（JD）也可以分享给我。`
};

const CreateResume = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<ResumeStep>(RESUME_STEPS.INIT);
  const [resumeData, setResumeData] = useState<ResumeData>({});

  // 计算当前进度
  const calculateProgress = () => {
    const steps = Object.values(RESUME_STEPS);
    const currentIndex = steps.indexOf(currentStep);
    return Math.round((currentIndex / (steps.length - 1)) * 100);
  };

  const { messages: apiMessages, input, handleInputChange, handleSubmit: handleChatSubmit, isLoading } = useChat({
    api: '/api/deepseek/r1',
    initialMessages: [
      {
        id: 'system',
        role: 'system',
        content: SYSTEM_PROMPT
      }
    ],
    onFinish: (message) => {
      // 分析AI回复，更新当前步骤
      updateStepBasedOnResponse(message.content);
    }
  });

  // 分析AI回复，更新当前步骤和简历数据
  const updateStepBasedOnResponse = (content: string) => {
    // 根据AI回复的内容，判断当前完成的步骤
    if (content.includes('教育背景') && currentStep === RESUME_STEPS.TARGET_JOB) {
      setCurrentStep(RESUME_STEPS.EDUCATION);
    } else if (content.includes('工作经历') && currentStep === RESUME_STEPS.EDUCATION) {
      setCurrentStep(RESUME_STEPS.WORK_EXPERIENCE);
    } else if (content.includes('项目经验') && currentStep === RESUME_STEPS.WORK_EXPERIENCE) {
      setCurrentStep(RESUME_STEPS.PROJECTS);
    } else if (content.includes('技能') && currentStep === RESUME_STEPS.PROJECTS) {
      setCurrentStep(RESUME_STEPS.SKILLS);
    }
  };

  // 处理表单提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // 更新简历数据
    const updatedResumeData = { ...resumeData };
    if (currentStep === RESUME_STEPS.TARGET_JOB && input.length > 0) {
      updatedResumeData.target_job = input;
    }
    setResumeData(updatedResumeData);

    // 调用聊天提交
    handleChatSubmit(e);
  };

  // 合并欢迎消息和API消息
  const messages = [WELCOME_MESSAGE, ...apiMessages.filter(msg => msg.role !== 'system')];

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 判断步骤是否完成
  const isStepCompleted = (step: ResumeStep) => {
    const steps = Object.values(RESUME_STEPS);
    const currentIndex = steps.indexOf(currentStep);
    const stepIndex = steps.indexOf(step);
    return stepIndex < currentIndex;
  };

  // 判断步骤是否当前
  const isCurrentStep = (step: ResumeStep) => {
    return step === currentStep;
  };

  return (
    <div className="fixed inset-0 flex bg-gradient-to-br from-gray-100 via-white to-gray-100">
      {/* 返回按钮 */}
      <Button
        variant="outline"
        className="absolute top-4 left-4 z-50 bg-white/90 backdrop-blur-md hover:bg-gray-100 text-gray-800 hover:text-gray-900 flex items-center gap-2 border-gray-300 shadow-md hover:shadow-lg transition-all duration-200"
        onClick={() => router.push('/resume')}
      >
        <ArrowLeft className="w-5 h-5" />
        <span>返回列表</span>
      </Button>

      {/* 主要内容区域 */}
      <div className="flex-1 flex flex-col relative">
        {/* 聊天区域 */}
        <div className="absolute inset-0 bottom-[100px] overflow-y-auto">
          <div className="flex flex-col px-6">
            <div className="h-4" />
            {/* 添加进度提示到中间 */}
            <div className="sticky top-4 mb-4 flex justify-center">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl px-6 py-3 shadow-lg border border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-blue-700" />
                    </div>
                    <span className="font-medium text-gray-800">
                      {currentStep === RESUME_STEPS.INIT && '开始创建简历'}
                      {currentStep === RESUME_STEPS.TARGET_JOB && '目标职位'}
                      {currentStep === RESUME_STEPS.EDUCATION && '教育背景'}
                      {currentStep === RESUME_STEPS.WORK_EXPERIENCE && '工作经历'}
                      {currentStep === RESUME_STEPS.PROJECTS && '项目经验'}
                      {currentStep === RESUME_STEPS.SKILLS && '技能证书'}
                      {currentStep === RESUME_STEPS.CONFIRM && '确认信息'}
                    </span>
                  </div>
                  <div className="h-5 w-[1px] bg-gray-300" />
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-700" />
                    <span className="text-sm font-medium text-blue-700">{calculateProgress()}%</span>
                  </div>
                </div>
              </div>
            </div>
            {/* 添加开始创建简历的图标和文本 */}
            {currentStep === RESUME_STEPS.INIT && (
              <div className="flex mb-6">
                <div className="flex items-start gap-3 max-w-[85%]">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md bg-gradient-to-br from-gray-700 to-gray-800">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="rounded-2xl px-6 py-4 bg-white border border-gray-200 text-gray-800 shadow-md">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-blue-700" />
                        </div>
                        <span className="font-medium text-gray-800">开始创建简历</span>
                        <div className="h-5 w-[1px] bg-gray-300" />
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-700" />
                          <span className="text-sm font-medium text-blue-700">0%</span>
                        </div>
                      </div>
                      <p className="text-[15px] leading-relaxed text-gray-500">AI将引导你一步步完成简历创建</p>
                    </div>
                    <span className="text-xs text-gray-500 px-1">
                      {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              </div>
            )}
            <AnimatePresence initial={false}>
              {messages.map((message) => (
                message.role !== 'system' && (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-6`}
                  >
                    <div className={`flex items-start gap-3 max-w-[85%] ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md ${
                        message.role === 'user' 
                          ? 'bg-gradient-to-br from-blue-600 to-blue-700' 
                          : 'bg-gradient-to-br from-gray-700 to-gray-800'
                      }`}>
                        {message.role === 'user' ? 
                          <User className="w-5 h-5 text-white" /> : 
                          <Bot className="w-5 h-5 text-white" />
                        }
                      </div>
                      <div className={`flex flex-col gap-2 ${message.role === 'user' ? 'items-end' : 'items-start'}`}>
                        <div className={`rounded-2xl px-6 py-4 max-w-full break-words shadow-md ${
                          message.role === 'user' 
                            ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white' 
                            : 'bg-white border border-gray-200 text-gray-800'
                        }`}>
                          <p className="text-[15px] leading-relaxed whitespace-pre-wrap">{message.content}</p>
                        </div>
                        <span className="text-xs text-gray-500 px-1">
                          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start mb-6"
              >
                <div className="flex items-center gap-3 text-gray-600 bg-white/90 backdrop-blur-md rounded-full px-5 py-2.5 shadow-md border border-gray-200">
                  <Loader2 className="w-5 h-5 animate-spin text-blue-700" />
                  <span className="text-sm font-medium text-gray-700">AI正在思考...</span>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* 底部输入区域 */}
        <div className="absolute bottom-0 left-0 right-[300px]">
          {/* 示例提示 */}
          {!isLoading && (
            <div className="px-6 mb-2">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {currentStep === RESUME_STEPS.TARGET_JOB && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleInputChange({ target: { value: "我想应聘前端开发工程师职位" } } as any)}
                      className="whitespace-nowrap bg-white/90 backdrop-blur-md hover:bg-gray-100 border-gray-300 text-gray-700 hover:text-gray-900 shadow-md"
                    >
                      前端开发工程师
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleInputChange({ target: { value: "我想找后端开发的工作，主要用Java" } } as any)}
                      className="whitespace-nowrap bg-white/90 backdrop-blur-md hover:bg-gray-100 border-gray-300 text-gray-700 hover:text-gray-900 shadow-md"
                    >
                      后端开发工程师
                    </Button>
                  </>
                )}
                {currentStep === RESUME_STEPS.EDUCATION && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleInputChange({ target: { value: "我是XX大学计算机科学专业的应届毕业生" } } as any)}
                      className="whitespace-nowrap bg-white/90 backdrop-blur-md hover:bg-gray-100 border-gray-300 text-gray-700 hover:text-gray-900 shadow-md"
                    >
                      应届生学历
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleInputChange({ target: { value: "我有本科和硕士学历" } } as any)}
                      className="whitespace-nowrap bg-white/90 backdrop-blur-md hover:bg-gray-100 border-gray-300 text-gray-700 hover:text-gray-900 shadow-md"
                    >
                      本硕学历
                    </Button>
                  </>
                )}
              </div>
            </div>
          )}

          {/* 输入框区域 */}
          <div className="border-t border-transparent bg-white/90 backdrop-blur-md py-3">
            <div className="px-6">
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder={
                    currentStep === RESUME_STEPS.TARGET_JOB ? "请输入你想要申请的职位..." :
                    currentStep === RESUME_STEPS.EDUCATION ? "请描述你的教育背景..." :
                    currentStep === RESUME_STEPS.WORK_EXPERIENCE ? "请描述你的工作经历..." :
                    currentStep === RESUME_STEPS.PROJECTS ? "请描述你的项目经验..." :
                    currentStep === RESUME_STEPS.SKILLS ? "请描述你的技能和证书..." :
                    "输入你的问题..."
                  }
                  disabled={isLoading}
                  className="w-full px-6 py-4 pr-[180px] text-[15px] text-gray-800 placeholder:text-gray-500 rounded-2xl shadow-lg focus:ring-4 focus:ring-blue-200 outline-none transition-all bg-white border-2 border-blue-300 disabled:opacity-60 disabled:cursor-not-allowed"
                />
                
                {/* 工具按钮组 */}
                <div className="absolute right-[120px] top-1/2 -translate-y-1/2 flex items-center gap-1">
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    disabled={isLoading}
                    className="text-gray-500 hover:text-gray-700 hover:bg-gray-200/80 rounded-lg disabled:opacity-60"
                  >
                    <Paperclip className="w-5 h-5" />
                  </Button>
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    disabled={isLoading}
                    className="text-gray-500 hover:text-gray-700 hover:bg-gray-200/80 rounded-lg disabled:opacity-60"
                  >
                    <ImageIcon className="w-5 h-5" />
                  </Button>
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    disabled={isLoading}
                    className="text-gray-500 hover:text-gray-700 hover:bg-gray-200/80 rounded-lg disabled:opacity-60"
                  >
                    <Mic className="w-5 h-5" />
                  </Button>
                </div>

                {/* 发送按钮 */}
                <Button 
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-[15px] font-medium rounded-lg px-5 py-2.5 flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      发送中...
                    </>
                  ) : (
                    <>
                      发送
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* 右侧状态栏 */}
      <div className="w-[300px] border-l border-gray-200 bg-white/90 backdrop-blur-md">
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full" />
            <h3 className="text-lg font-semibold text-gray-900">简历创建进度</h3>
          </div>
          <div className="space-y-3">
            {Object.entries(RESUME_STEPS).map(([key, step]) => (
              key !== 'INIT' && (
                <div 
                  key={step}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                    isCurrentStep(step) ? 'bg-blue-50/60 shadow-md' : ''
                  }`}
                >
                  {isStepCompleted(step) ? (
                    <div className="w-7 h-7 rounded-lg bg-green-200 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-700" />
                    </div>
                  ) : isCurrentStep(step) ? (
                    <div className="w-7 h-7 rounded-lg bg-blue-200 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-blue-700 animate-pulse" />
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-lg border-2 border-gray-300 flex items-center justify-center">
                      <Circle className="w-4 h-4 text-gray-500" />
                    </div>
                  )}
                  <span className={`text-sm ${
                    isCurrentStep(step) ? 'font-medium text-gray-900' : 
                    isStepCompleted(step) ? 'text-gray-800' : 
                    'text-gray-500'
                  }`}>
                    {step === RESUME_STEPS.TARGET_JOB && '目标职位'}
                    {step === RESUME_STEPS.EDUCATION && '教育背景'}
                    {step === RESUME_STEPS.WORK_EXPERIENCE && '工作经历'}
                    {step === RESUME_STEPS.PROJECTS && '项目经验'}
                    {step === RESUME_STEPS.SKILLS && '技能证书'}
                    {step === RESUME_STEPS.CONFIRM && '确认信息'}
                  </span>
                </div>
              )
            ))}
          </div>
          {currentStep === RESUME_STEPS.CONFIRM && (
            <div className="pt-4 border-t border-gray-200">
              <Button 
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                onClick={() => {/* 处理生成简历逻辑 */}}
              >
                生成简历
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateResume; 
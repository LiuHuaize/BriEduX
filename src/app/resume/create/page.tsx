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
const SYSTEM_PROMPT = `你是一个专业的简历顾问，帮助用户创建简历。你的主要任务是通过自然对话收集信息，并将其格式化。请遵循以下规则：

1. 交互风格：
- 使用轻松自然的对话方式
- 接受用户任何形式的回答
- 你来负责将信息提取和格式化
- 每次确认格式化的信息是否准确

2. 信息收集步骤：

第1步 - 目标职位：
- 用户可能直接说职位名称，如"AI产品经理"
- 从用户回答中提取：职位名称、目标领域
- 总结并确认："我理解您期望申请的是XX领域的XX职位，对吗？"
- 确认无误后，自然引导到下一步

第2步 - 教育背景：
- 询问教育经历
- 从用户回答中提取：学历、学校、专业、时间等信息
- 总结并确认当前学历信息
- 主动询问："除了这段教育经历，您是否还有其他教育背景想要补充？"
- 如果有，继续收集；如果没有，进入下一步

第3步 - 工作经历：
- 自然询问最近的工作经历
- 从回答中提取：公司、职位、时间、职责等
- 格式化并确认当前工作经历
- 主动询问："除了这份工作，您是否还有其他相关工作经历想要补充？"
- 如果有，继续收集；如果没有，进入下一步
- 注意：实习经历也可以在这里提到

第4步 - 项目经验：
- 让用户自由分享项目经历
- 提取关键信息：项目背景、角色、成果
- 格式化并确认当前项目信息
- 主动询问："除了这个项目，您是否还有其他想要展示的项目经验？"
- 如果有，继续收集；如果没有，进入下一步
- 建议：重点展示与目标职位相关的项目

第5步 - 技能证书：
- 让用户自由列举技能和证书
- 整理成结构化信息
- 确认并询问是否还有补充
- 完成所有信息收集后结束

3. 处理原则：
- 用户说什么都接受，由你来格式化
- 主动提取关键信息
- 始终保持友好的对话语气
- 如信息不完整，用轻松的方式继续询问
- 每完成一个经历都要确认并询问是否还有其他相关经历
- 在进入下一步之前，确保用户没有遗漏想要补充的信息

4. 特殊情况：
- 如果用户信息混乱，帮助梳理
- 如果用户跳步，温询问他是否是因为缺少工作经历等，如果属实，允许跳步，并且标注这一步已完成
- 如果用户要求修改之前信息，配合修改
- 遇到不确定的信息，礼貌确认
- 如果用户表示没有某类经历，给予理解并平稳过渡到下一步

5. 语言风格：
- 避免生硬的格式要求
- 用轻松的语气确认信息
- 给予积极的反馈
- 在询问更多经历时保持友好和开放的态度

记住：你的角色是将用户的自然表达转化为结构化信息，要主动询问是否有更多经历需要补充，确保不遗漏重要信息。`;

const WELCOME_MESSAGE = {
  id: 'welcome',
  role: 'assistant',
  content: `您好！我是您的简历助手，让我们一步步完成您的专业简历。

首先，请告诉我您期望申请的目标职位是什么？`
};

const CreateResume = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<ResumeStep>(RESUME_STEPS.INIT);
  const [resumeData, setResumeData] = useState<ResumeData>({});
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const recordingTimerRef = useRef<NodeJS.Timeout | null>(null);

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
    // 根据AI回复的内容，判断当前步骤是否完成
    if (content.includes('第1步') || content.includes('目标职位确认')) {
      setCurrentStep(RESUME_STEPS.TARGET_JOB);
    }
    if (content.includes('第2步') || content.includes('教育背景')) {
      setCurrentStep(RESUME_STEPS.EDUCATION);
    }
    if (content.includes('第3步') || content.includes('工作经历') || content.includes('实习经历')) {
      setCurrentStep(RESUME_STEPS.WORK_EXPERIENCE);
    }
    if (content.includes('第4步') || content.includes('项目经验')) {
      setCurrentStep(RESUME_STEPS.PROJECTS);
    }
    if (content.includes('第5步') || content.includes('技能证书')) {
      setCurrentStep(RESUME_STEPS.SKILLS);
    }
    if (content.includes('完成') && currentStep === RESUME_STEPS.SKILLS) {
      setCurrentStep(RESUME_STEPS.CONFIRM);
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

  // 计算当前进度
  const calculateProgress = () => {
    const steps = Object.values(RESUME_STEPS);
    const totalSteps = steps.length - 2; // 减去 INIT 和 CONFIRM
    const currentIndex = steps.indexOf(currentStep);
    const progressIndex = currentIndex > 0 ? currentIndex - 1 : 0; // 减去 INIT 的索引
    return Math.round((progressIndex / totalSteps) * 100);
  };

  useEffect(() => {
    // 监听步骤变化，更新进度
    console.log('Current Step:', currentStep);
  }, [currentStep]);

  // 处理文件上传
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // 这里可以根据需要限制文件类型和大小
    if (file.size > 10 * 1024 * 1024) { // 10MB限制
      alert('文件大小不能超过10MB');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);
      
      // TODO: 实现文件上传到服务器的逻辑
      console.log('Uploading file:', file.name);
      
      // 可以在这里添加文件上传后的处理逻辑
      
    } catch (error) {
      console.error('File upload failed:', error);
      alert('文件上传失败，请重试');
    }
  };

  // 开始录音
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        // TODO: 实现音频上传到服务器的逻辑
        console.log('Recording completed, size:', audioBlob.size);
        
        // 停止所有音轨
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      
      // 开始计时
      recordingTimerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
      
    } catch (error) {
      console.error('Failed to start recording:', error);
      alert('无法访问麦克风，请检查权限设置');
    }
  };

  // 停止录音
  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setRecordingTime(0);
      
      // 清除计时器
      if (recordingTimerRef.current) {
        clearInterval(recordingTimerRef.current);
        recordingTimerRef.current = null;
      }
    }
  };

  // 格式化录音时间
  const formatRecordingTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
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

      {/* 左侧历史记录列表 */}
      <div className="w-[280px] border-r border-gray-200 bg-white/90 backdrop-blur-md">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">历史简历</h3>
          <div className="space-y-3">
            {/* 这里可以添加历史记录列表项 */}
            <div className="p-3 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer transition-all duration-200">
              <div className="text-sm font-medium text-gray-800">前端开发工程师简历</div>
              <div className="text-xs text-gray-500 mt-1">最后编辑于 2024-01-20</div>
            </div>
            <div className="p-3 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer transition-all duration-200">
              <div className="text-sm font-medium text-gray-800">产品经理简历</div>
              <div className="text-xs text-gray-500 mt-1">最后编辑于 2024-01-19</div>
            </div>
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="flex-1 flex flex-col relative">
        {/* 当前步骤提示 */}
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-2xl px-6 py-3 shadow-lg border border-gray-200 z-10">
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

        {/* 聊天区域 */}
        <div className="flex-1 overflow-y-auto pt-24 pb-32">
          <div className="flex flex-col px-6 min-h-full">
            <AnimatePresence initial={false} mode="wait">
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
                      <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center shadow-md ${
                        message.role === 'user' 
                          ? 'bg-gradient-to-br from-blue-600 to-blue-700' 
                          : 'bg-gradient-to-br from-gray-700 to-gray-800'
                      }`}>
                        {message.role === 'user' ? 
                          <User className="w-5 h-5 text-white" /> : 
                          <Bot className="w-5 h-5 text-white" />
                        }
                      </div>
                      <div className={`flex flex-col gap-2 min-w-0 ${message.role === 'user' ? 'items-end' : 'items-start'}`}>
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

              {/* AI思考中的加载状态 */}
              {isLoading && messages.length > 0 && (
                messages[messages.length - 1]?.role === 'user' || 
                !messages[messages.length - 1]?.content
              ) && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex justify-start mb-6"
                >
                  <div className="flex items-start gap-3 max-w-[85%]">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md bg-gradient-to-br from-gray-700 to-gray-800">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-md border border-gray-200">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:-0.3s]"></div>
                          <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:-0.15s]"></div>
                          <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"></div>
                        </div>
                        <span className="text-sm font-medium text-gray-600">AI正在深度分析您的简历需求...</span>
                      </div>
                      <span className="text-xs text-gray-500 px-1">
                        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div ref={messagesEndRef} className="h-1" />
          </div>
        </div>
      </div>

      {/* 右侧状态栏 */}
      <div className="w-[280px] border-l border-gray-200 bg-white/90 backdrop-blur-md">
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

      {/* 底部输入框 */}
      <div className="fixed bottom-0 left-[280px] right-[280px] p-6 bg-white/90 backdrop-blur-xl border-t border-gray-200/50 shadow-[0_-20px_30px_-10px_rgba(0,0,0,0.05)]">
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative flex items-center gap-3 p-1.5 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.1)] transition-all duration-300">
            <div className="flex items-center gap-1.5 pl-1.5">
              {/* 文件上传按钮 */}
              <div className="relative">
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  accept=".pdf,.doc,.docx,.txt"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-xl bg-gray-50/50 hover:bg-gray-100/80 transition-all duration-200"
                >
                  <Paperclip className="w-[18px] h-[18px] text-gray-600" />
                </Button>
              </div>

              {/* 录音按钮 */}
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className={`h-9 w-9 rounded-xl transition-all duration-200 relative ${
                  isRecording 
                    ? 'bg-red-50 hover:bg-red-100/80' 
                    : 'bg-gray-50/50 hover:bg-gray-100/80'
                }`}
                onClick={isRecording ? stopRecording : startRecording}
              >
                <Mic className={`w-[18px] h-[18px] ${
                  isRecording ? 'text-red-500' : 'text-gray-600'
                }`} />
                {isRecording && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                    {formatRecordingTime(recordingTime)}
                  </div>
                )}
              </Button>
            </div>

            {/* 分隔线 */}
            <div className="w-[1px] h-6 bg-gray-200/70" />

            {/* 文本输入框 */}
            <div className="flex-1 relative">
              <textarea
                value={input}
                onChange={handleInputChange}
                placeholder="输入消息..."
                rows={1}
                className="w-full resize-none rounded-xl bg-transparent px-3 py-2 text-[15px] text-gray-700 placeholder:text-gray-400 focus:outline-none"
                style={{
                  minHeight: '36px',
                  maxHeight: '120px'
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.stopPropagation();
                  }
                }}
              />
            </div>

            {/* 发送按钮 */}
            <Button
              type="submit"
              disabled={isLoading || !input.trim()}
              className={`h-9 w-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isLoading || !input.trim()
                  ? 'bg-gray-100/80 text-gray-400'
                  : 'bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400 hover:from-indigo-600 hover:via-blue-600 hover:to-cyan-500 text-white shadow-[0_4px_12px_-2px_rgba(79,70,229,0.4)] hover:shadow-[0_8px_20px_-2px_rgba(79,70,229,0.5)] scale-100 hover:scale-105'
              }`}
              onClick={(e) => {
                e.preventDefault();
                if (input.trim() && !isLoading) {
                  handleSubmit(e);
                }
              }}
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateResume; 
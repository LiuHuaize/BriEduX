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
import { useResume } from "@/app/resume/context/ResumeContext";
import { ResumeData } from "@/app/resume/context/ResumeContext";

// 定义简历信息收集的步骤
const RESUME_STEPS = {
  INIT: 'init',
  BASIC_INFO: 'basic_info',
  TARGET_JOB: 'target_job',
  EDUCATION: 'education',
  WORK_EXPERIENCE: 'work_experience',
  PROJECTS: 'projects',
  SKILLS: 'skills',
  CONFIRM: 'confirm'
} as const;

type ResumeStep = typeof RESUME_STEPS[keyof typeof RESUME_STEPS];

interface Education {
  school: string;
  degree: string;
  major?: string;
  start_year: string;
  end_year: string;
  extra?: string;
}

interface WorkExperience {
  company: string;
  role: string;
  start_year: string;
  end_year: string;
  responsibilities: string[];
}

interface Project {
  title: string;
  start_year: string;
  end_year: string;
  responsibilities: string[];
}

// 系统提示词，包含完整的对话策略
const SYSTEM_PROMPT = `你是一个专业的简历顾问，帮助用户创建简历。你的主要任务是通过自然对话收集信息，并将其格式化。请遵循以下规则：

1. 交互风格：
- 使用轻松自然的对话方式
- 接受用户任何形式的回答
- 你来负责将信息提取和格式化
- 每次确认格式化的信息是否准确
- 如果用户跳步，温询问他是否是因为缺少工作经历等，如果属实，允许跳步，并且标注这一步已完成
- 不需要把之前步骤的信息全部重复一遍，最后汇总写最终简历的时候再写出来
- 在每一步（如工作经历、教育背景等）收集完数据后，加一句类似"请确认或补充更多细节"来鼓励用户进一步补充。如果用户描述较为简略，系统可以主动询问"您是否还有更多详细信息，例如团队规模、项目成果的具体数据等？"
保持语气亲切自然，比如"您可以简单描述……"、"如果方便的话，请再补充……"，让用户感觉对话更像是交流而不是机械问答。


2. 信息收集步骤：

第1步 - 基础信息：
- 询问用户的姓名、联系电话和邮箱
- 引导用户按照顺序提供这些信息
- 如果用户一次性提供多个信息，也要正确解析
- 确保获取所有必要的基础信息后再进入下一步
- 格式化输出：
  姓名：xxx
  电话：xxx
  邮箱：xxx

第2步 - 目标职位：
- 用户可能直接说职位名称，如"AI产品经理"
- 从用户回答中提取：职位名称
- 总结并确认："我理解您期望申请的是XX领域的XX职位，对吗？"
- 确认无误后，自然引导到下一步

第3步 - 教育背景：
- 询问教育经历 可以使用更详细的例子，引导用户提供完整的信息。提示词可以调整为：
"请描述您的教育经历，例子：
'2015-2019，我在北京大学软件工程专业（本科）就读，gpa3.8，还曾获得国家奖学金与校内优秀学生称号。'
这里请包含就读学校、专业、起止年份、以及您觉得值得标注的荣誉或奖项。"
这样不仅让例子更生动，也能帮助系统提取出起止时间、学校名称、专业详情及额外成就。

- 从用户回答中提取：学历、学校、专业、时间
- 总结并确认
- 如果用户提到多个学历，都记录下来
- 确认（可以问一下是否需要添加奖学金，gpa等成就）无误后，继续下一步
- 你的输出需要格式化一下，不需要要求用户输出格式，你来格式化  
                     学校   年份
                     专业

第4步 - 工作经历：
- 自然询问工作经历，告诉用户越详细越好，并告知大模型会根据回答总结成简历标准格式给用户过目
- 从回答中提取：公司、职位、年份、职责等
- 格式化并确认当前工作经历
- 主动询问："除了这份工作，您是否还有其他相关工作经历想要补充？"
- 如果有，继续收集；如果没有，进入下一步
- 注意：实习经历也可以在这里提到
- "请描述您最近的工作经历，您可以这样说：
'2019-2021，我在字节跳动担任产品经理，主要负责AI产品规划和跨部门协调，带领团队从0到1成功交付多个核心项目，并在过程中提升了产品迭代效率。'
这样便于我提取公司、职位、起止时间以及工作职责和成就哦！"
通过这种方式，用户既能理解所需信息，又能自然而详细地描述自己的工作过程和成果。
-  你的输出需要格式化一下，不需要要求用户输出格式，你来格式化，每个项目都需要单独的格式化 
      标题         持续时间
      两到三点概括
      xxxx
      xxxx
      xxxx


第5步 - 项目经验：
- 让用户自由分享项目经历，并告知越详细越好
- 提取关键信息：项目背景、角色、成果
- 格式化并确认当前项目信息
- 主动询问："除了这个项目，您是否还有其他想要展示的项目经验？"
- 如果有，继续收集；如果没有，进入下一步
- 建议：重点展示与目标职位相关的项目
-  你的输出需要格式化一下  不需要要求用户输出格式，你来格式化  
      标题         持续时间
      两到三点概括
      xxxx
      xxxx
      xxxx

第6步 - 技能证书：
- 让用户自由列举技能和证书
- 整理成结构化信息
- 确认并询问是否还有补充
- 完成所有信息收集后结束

3. 处理原则：
- 用户说什么都接受，由你来格式化
- 主动提取关键信息
- 始终保持友好的对话语气
- 如信息不完整，继续询问
- 每完成一个经历都要确认并询问是否还有其他相关经历
- 在进入下一步之前，确保用户没有遗漏想要补充的信息

4. 特殊情况：
- 如果用户信息混乱，帮助梳理
- 如果用户跳步，温询问他是否是因为缺少工作经历等，如果属实，允许跳步，并且标注这一步已完成
- 如果用户要求修改之前信息，配合修改
- 遇到不确定的信息，礼貌确认
- 如果用户表示没有某类经历，给予理解并平稳过渡到下一步

5. 语言风格：
- 举例是不要用格式要
- 给予积极的反馈
- 在询问更多经历时保持友好和开放的态度

记住：你的角色是将用户的自然表达转化为结构化信息，要主动询问是否有更多经历需要补充，确保不遗漏重要信息。`;

const WELCOME_MESSAGE = {
  id: 'welcome',
  role: 'assistant' as const,
  content: `您好！我是您的简历助手，让我一步步完成您的专业简历。

我们开始吧，您可以先告诉我您的姓名、联系电话和邮箱。`
};

const COMPLETION_MESSAGE = {
  id: 'completion',
  role: 'assistant' as const,
  content: `恭喜您完成了简历信息的收集！🎉

我们正在马不停蹄地开发更多功能：
- 自定义简历模板功能
- PDF/Word格式简历下载
- 在线简历编辑器
  
预计这些功能将在未来2周内陆续上线，敬请期待！

您可以点击左上角的"返回列表"按钮回到简历列表页面。`
};

const CreateResume = () => {
  const router = useRouter();
  const { setResumeData } = useResume();
  const [currentStep, setCurrentStep] = useState<ResumeStep>(RESUME_STEPS.INIT);
  const [resumeData, setResumeDataState] = useState<ResumeData>({
    basic_info: {
      name: '',
      phone: '',
      email: ''
    },
    education: [],
    work_experience: [],
    projects: []
  });
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [showThinking, setShowThinking] = useState(false);
  const [showCompletionMessage, setShowCompletionMessage] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const recordingTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isMounted = useRef(true);

  // 在组件卸载时更新挂载状态
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  // 解析AI助手的回复,更新简历数据
  const parseAIResponse = async (content: string) => {
    console.log('Parsing AI Response:', content);
    
    // 将最新的 assistant 回复也追加到消息数组中，确保传递完整的对话记录
    const conversation = [...apiMessages, { role: 'assistant', content }];
    console.log("Sending conversation to extraction API:", conversation);

    try {
      const response = await fetch('/api/deepseek/v3-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: conversation }),
      });

      if (!response.ok) {
        throw new Error('Failed to extract information');
      }

      const extractedData = await response.json();
      console.log('Extracted Data:', extractedData);

      // 更新简历数据
      setResumeDataState(prevData => {
        const updatedResumeData = { ...prevData };

        // 更新基础信息
        if (extractedData.basic_info) {
          updatedResumeData.basic_info = {
            ...updatedResumeData.basic_info,
            ...extractedData.basic_info
          };
        }

        // 更新目标职位
        if (extractedData.target_job) {
          updatedResumeData.target_job = extractedData.target_job;
        }

        // 更新教育经历
        if (extractedData.education?.length > 0) {
          updatedResumeData.education = extractedData.education;
        }

        // 更新工作经历
        if (extractedData.work_experience?.length > 0) {
          updatedResumeData.work_experience = extractedData.work_experience;
        }

        // 更新项目经验
        if (extractedData.projects?.length > 0) {
          updatedResumeData.projects = extractedData.projects;
        }

        // 更新技能和证书
        if (extractedData.skills) {
          updatedResumeData.skills = extractedData.skills;
        }
        if (extractedData.certifications) {
          updatedResumeData.certifications = extractedData.certifications;
        }

        return updatedResumeData;
      });

      // 验证基础信息完整性后，再更新步骤
      setTimeout(() => updateStepBasedOnResponse(), 0);
    } catch (error) {
      console.error('Error extracting information:', error);
    }
  };

  const { messages: apiMessages, input, handleInputChange, handleSubmit: handleChatSubmit, isLoading } = useChat({
    api: '/api/deepseek/r1-2.4',
    initialMessages: [
      {
        id: 'system',
        role: 'system',
        content: SYSTEM_PROMPT
      }
    ],
    onFinish: (message) => {
      // 只在组件挂载时更新状态
      if (isMounted.current) {
        parseAIResponse(message.content);
        setTimeout(() => {
          if (isMounted.current) {
            updateStepBasedOnResponse();
          }
        }, 0);
      }
    },
    onResponse: (response) => {
      // 只在组件挂载时更新状态
      if (isMounted.current) {
        setShowThinking(false);
      }
    }
  });

  // 分析AI回复，更新当前步骤
  const updateStepBasedOnResponse = () => {
    const basicValidation = validateBasicInfo();
    if (!basicValidation.isComplete || Object.values(basicValidation.isValid).includes(false)) {
      setCurrentStep(RESUME_STEPS.BASIC_INFO);
    } else if (!resumeData.target_job) {
      setCurrentStep(RESUME_STEPS.TARGET_JOB);
    } else if (!resumeData.education || resumeData.education.length === 0) {
      setCurrentStep(RESUME_STEPS.EDUCATION);
    } else if (!resumeData.work_experience || resumeData.work_experience.length === 0) {
      setCurrentStep(RESUME_STEPS.WORK_EXPERIENCE);
    } else if (!resumeData.projects || resumeData.projects.length === 0) {
      setCurrentStep(RESUME_STEPS.PROJECTS);
    } else if (!resumeData.skills || resumeData.skills.length === 0) {
      setCurrentStep(RESUME_STEPS.SKILLS);
    } else {
      setCurrentStep(RESUME_STEPS.CONFIRM);
    }
  };

  // 验证基础信息是否完整
  const validateBasicInfo = () => {
    let { name = '', phone = '', email = '' } = resumeData.basic_info || {};

    const isValid = {
      name: (name || '').length >= 2,
      phone: (phone || '').trim() !== '',
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '')
    };

    const isComplete = isValid.name && isValid.phone && isValid.email;

    return {
      isComplete,
      isValid,
      message: '' // 不再显示提示信息
    };
  };

  useEffect(() => {
    // 监听 resumeData 变化
    console.log('Resume Data Updated:', resumeData);
    
    if (currentStep === RESUME_STEPS.BASIC_INFO) {
      const validation = validateBasicInfo();
      
      if (validation.isComplete && !Object.values(validation.isValid).includes(false)) {
      }
    }
  }, [resumeData, currentStep]);

  // 新增 useEffect，当 resumeData 更新后，根据最新值更新步骤
  useEffect(() => {
    const basicValidation = validateBasicInfo();
    if (basicValidation.isComplete) {
      // 当前基础信息验证通过后，若目标职位为空，则移动到目标职位步骤
      if (!resumeData.target_job) {
        setCurrentStep(RESUME_STEPS.TARGET_JOB);
      } else if (!resumeData.education || resumeData.education.length === 0) {
        setCurrentStep(RESUME_STEPS.EDUCATION);
      } else if (!resumeData.work_experience || resumeData.work_experience.length === 0) {
        setCurrentStep(RESUME_STEPS.WORK_EXPERIENCE);
      } else if (!resumeData.projects || resumeData.projects.length === 0) {
        setCurrentStep(RESUME_STEPS.PROJECTS);
      } else if (!resumeData.skills || resumeData.skills.length === 0) {
        setCurrentStep(RESUME_STEPS.SKILLS);
      } else {
        setCurrentStep(RESUME_STEPS.CONFIRM);
      }
    } else {
      // 若基本信息不完整，则始终保持在基础信息步骤
      setCurrentStep(RESUME_STEPS.BASIC_INFO);
    }
  }, [resumeData]);

  // 合并欢迎消息和API消息
  const allMessages = [
    WELCOME_MESSAGE,
    ...apiMessages.filter(msg => msg.role !== 'system'),
    ...(showCompletionMessage ? [COMPLETION_MESSAGE] : [])
  ];

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [allMessages]);

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

  // 处理表单提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    if (isMounted.current) {
      setShowThinking(true);
    }
    
    try {
      await handleChatSubmit(e);
    } catch (error) {
      console.error('Error submitting chat:', error);
      if (isMounted.current) {
        setShowThinking(false);
      }
    }
  };

  const handleFinalSubmit = () => {
    if (currentStep === RESUME_STEPS.CONFIRM) {
      setResumeData(resumeData);
      setShowCompletionMessage(true);
    }
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
                {currentStep === RESUME_STEPS.BASIC_INFO && '基础信息'}
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
        <div className="flex-1 overflow-y-auto pt-24 pb-32 scroll-smooth">
          <div className="flex flex-col px-6 min-h-full">
            <AnimatePresence mode="popLayout">
              {allMessages.map((message) => (
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

              {/* AI 思考中的加载状态 */}
              {showThinking && isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex justify-start mb-6"
                >
                  <div className="flex items-start gap-3 max-w-[85%]">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center shadow-md bg-gradient-to-br from-gray-700 to-gray-800">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-col gap-2 min-w-0">
                      <div className="rounded-2xl px-6 py-4 bg-white border border-gray-200 shadow-md">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse delay-150" />
                          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse delay-300" />
                          <span className="text-[15px] text-gray-500">AI 正在深度思考...</span>
                        </div>
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
                    {step === RESUME_STEPS.BASIC_INFO && '基础信息'}
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
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                onClick={handleFinalSubmit}
              >
                完成创建
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
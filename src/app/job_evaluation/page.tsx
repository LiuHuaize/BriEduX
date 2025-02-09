"use client";

import { useState } from "react";
import { UploadCloud, LineChart, ArrowRight, CheckCircle2, AlertCircle, X } from "lucide-react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";

interface EvaluationResult {
  score: number;
  strengths: string[];
  improvements: string[];
  summary?: string;
}

interface CombinedEvaluationResult {
  resumeEvaluation: EvaluationResult | null;
  jobEvaluation: EvaluationResult | null;
}

const JobEvaluation = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [evaluationResults, setEvaluationResults] = useState<CombinedEvaluationResult>({
    resumeEvaluation: null,
    jobEvaluation: null
  });
  const [activeTab, setActiveTab] = useState<'resume' | 'job'>('resume');
  const [error, setError] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [filePath, setFilePath] = useState<string | null>(null);
  const [conversionResult, setConversionResult] = useState<string | null>(null);
  const [conversionLoading, setConversionLoading] = useState(false);
  const [conversionError, setConversionError] = useState<string | null>(null);

  const handleConvertPDF = async () => {
    if (!filePath) {
      toast.error('无效的文件路径');
      return;
    }
    setConversionLoading(true);
    setConversionResult(null);
    setConversionError(null);
    try {
      const response = await fetch('/api/convert_pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filePath }),
      });
      const data = await response.json();
      if (data.error) {
        setConversionError(data.error);
      } else {
        setConversionResult(data.markdown);
      }
    } catch (error: any) {
      setConversionError(error.message || '转换出错');
    } finally {
      setConversionLoading(false);
    }
  };

  // 新增：处理文本文件
  const handleTextFile = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        resolve(e.target?.result as string);
      };
      reader.onerror = (e) => {
        reject(new Error('文本文件读取失败'));
      };
      reader.readAsText(file);
    });
  };

  // 新增：处理Word文件
  const handleWordFile = async (file: File): Promise<string> => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      const response = await fetch('/api/convert_word', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Word文件处理失败');
      }
      
      const data = await response.json();
      if (!data.text || typeof data.text !== 'string') {
        throw new Error('Word文件内容转换失败');
      }

      // 格式化Word文档内容
      const formattedText = data.text
        .replace(/\r\n/g, '\n')
        .replace(/\n{3,}/g, '\n\n')
        .replace(/\t/g, '    ')  // 将制表符转换为空格
        .replace(/\u00A0/g, ' ')  // 替换特殊空格字符
        .replace(/\s{3,}/g, '  ')  // 将多个空格替换为两个空格
        .trim();

      if (!formattedText) {
        throw new Error('Word文件内容为空');
      }

      return formattedText;
    } catch (error: any) {
      console.error('Word处理错误:', error);
      throw new Error(`Word文件处理失败: ${error.message}`);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
      if (!validTypes.includes(file.type)) {
        toast.error('请上传 PDF、Word 或 TXT 格式的简历');
        return;
      }

      try {
        setResumeFile(file);
        setUploadStatus('uploading');
        setUploadProgress(20);
        setError(null); // 清除之前的错误

        let resumeContent = '';

        // 根据文件类型选择不同的处理方式
        if (file.type === 'text/plain') {
          // 处理TXT文件
          resumeContent = await handleTextFile(file);
        } else if (file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
          // 处理Word文件
          setUploadProgress(40);
          resumeContent = await handleWordFile(file);
          setUploadProgress(80);
        } else {
          // PDF文件处理
          const fileExt = file.name.split('.').pop();
          const fileName = `${uuidv4()}.${fileExt}`;
          const filePath = `resume/${fileName}`;

          const formData = new FormData();
          formData.append('file', file);
          formData.append('filePath', filePath);

          setUploadProgress(40);

          // 调用上传 API
          const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
          });

          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || '文件上传失败');
          }

          setUploadProgress(60);

          const result = await response.json();
          if (result.error) {
            throw new Error(result.error);
          }

          // 保存文件的公共URL和存储路径
          setFileUrl(result.data.publicUrl);
          setFilePath(filePath);
          
          // 转换PDF文件
          setUploadProgress(80);
          const pdfResponse = await fetch('/api/convert_pdf', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filePath }),
          });
          
          if (!pdfResponse.ok) {
            const error = await pdfResponse.json();
            throw new Error(error.message || 'PDF转换失败');
          }

          const pdfData = await pdfResponse.json();
          if (pdfData.error) {
            throw new Error(pdfData.error);
          }
          
          resumeContent = pdfData.markdown;
        }

        // 验证和格式化最终内容
        if (!resumeContent || typeof resumeContent !== 'string') {
          throw new Error('文件内容获取失败');
        }

        // 格式化内容
        const formattedContent = resumeContent
          .replace(/\r\n/g, '\n')
          .replace(/\n{3,}/g, '\n\n')
          .replace(/\t/g, '    ')
          .replace(/\u00A0/g, ' ')
          .replace(/\s{3,}/g, '  ')
          .trim();

        if (!formattedContent) {
          throw new Error('文件内容为空');
        }

        setConversionResult(formattedContent);
        setUploadProgress(100);
        setUploadStatus('success');
        toast.success(`${file.type === 'text/plain' ? '文本' : file.type.includes('word') ? 'Word' : 'PDF'}文件处理成功！`);

      } catch (err: any) {
        console.error('Upload error:', err);
        setUploadStatus('error');
        setError(err.message || '文件上传失败');
        toast.error(err.message || '文件上传失败，请重试');
        setConversionResult(null);
      } finally {
        setUploadProgress(100);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    console.log('开始提交评估请求...');

    try {
      if (!resumeFile) {
        throw new Error('请先上传简历文件');
      }

      if (!conversionResult) {
        throw new Error('简历内容获取失败');
      }

      // 格式化简历内容，确保文本格式正确
      const formattedContent = conversionResult
        .replace(/\r\n/g, '\n')  // 统一换行符
        .replace(/\n{3,}/g, '\n\n')  // 将多个连续空行减少为最多两个
        .trim();  // 去除首尾空白

      console.log('简历内容长度:', formattedContent.length);
      console.log('简历内容预览:', formattedContent.substring(0, 200) + '...');

      // 同时发起两个评估请求
      const [resumeEvalResponse, jobEvalResponse] = await Promise.all([
        // 简历评估
        fetch('/api/resume_evaluation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            resumeContent: formattedContent 
          }),
        }),
        // 岗位匹配评估（如果有岗位描述）
        jobDescription ? fetch('/api/job_evaluation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            resumeContent: formattedContent,
            jobDescription: jobDescription.trim()
          }),
        }) : Promise.resolve(null)
      ]);

      // 检查响应状态
      if (!resumeEvalResponse.ok) {
        const errorData = await resumeEvalResponse.json();
        throw new Error(errorData.error || '简历评估请求失败');
      }

      if (jobEvalResponse && !jobEvalResponse.ok) {
        const errorData = await jobEvalResponse.json();
        throw new Error(errorData.error || '岗位匹配评估请求失败');
      }

      // 处理简历评估结果
      const resumeResult = await resumeEvalResponse.json();
      let resumeEvaluation: EvaluationResult | null = null;
      
      if (resumeResult.data) {
        try {
          // 如果data已经是解析好的JSON对象
          const parsedData = typeof resumeResult.data === 'string' 
            ? JSON.parse(resumeResult.data) 
            : resumeResult.data;
          
          resumeEvaluation = {
            score: typeof parsedData.score === 'number' ? parsedData.score : 0,
            strengths: Array.isArray(parsedData.strengths) ? parsedData.strengths : [],
            improvements: Array.isArray(parsedData.improvements) ? parsedData.improvements : [],
            summary: parsedData.summary || ''
          };
        } catch (e) {
          console.error('简历评估结果解析错误:', e);
          resumeEvaluation = {
            score: 0,
            strengths: [],
            improvements: ['简历评估结果解析失败'],
            summary: resumeResult.data || ''
          };
        }
      }

      // 处理岗位匹配评估结果
      let jobEvaluation: EvaluationResult | null = null;
      if (jobEvalResponse) {
        const jobResult = await jobEvalResponse.json();
        if (jobResult.data) {
          try {
            // 如果data已经是解析好的JSON对象
            const parsedData = typeof jobResult.data === 'string' 
              ? JSON.parse(jobResult.data) 
              : jobResult.data;
            
            jobEvaluation = {
              score: typeof parsedData.score === 'number' ? parsedData.score : 0,
              strengths: Array.isArray(parsedData.strengths) ? parsedData.strengths : [],
              improvements: Array.isArray(parsedData.improvements) ? parsedData.improvements : [],
              summary: parsedData.summary || ''
            };
          } catch (e) {
            console.error('岗位匹配评估结果解析错误:', e);
            jobEvaluation = {
              score: 0,
              strengths: [],
              improvements: ['岗位匹配评估结果解析失败'],
              summary: jobResult.data || ''
            };
          }
        }
      }

      setEvaluationResults({
        resumeEvaluation,
        jobEvaluation
      });
      
      toast.success('评估完成！');

    } catch (err: any) {
      const errorMessage = err.message || '评测过程中发生错误';
      console.error('评估错误:', {
        message: errorMessage,
        error: err,
        stack: err.stack
      });
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
      console.log('评估流程结束');
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-gray-50/80" />
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-100/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-100/20 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4" />
      
      {/* 内容区域 */}
      <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-16">
        {/* 标题区域 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 mb-3">
              AI 简历评测
            </h1>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto" />
          </div>
          <p className="text-gray-500 mt-4 text-base">
            智能分析您的简历与目标职位的匹配程度
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          {/* 主要内容卡片 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 文件上传区域 */}
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100">
                      <UploadCloud className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <h3 className="text-base font-medium text-gray-700">上传简历</h3>
                  </div>
                  <div className="relative">
                    {!resumeFile ? (
                      <div 
                        onClick={() => document.getElementById('resume-upload')?.click()}
                        className="flex flex-col items-center justify-center py-8 px-6 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50 hover:bg-blue-50/50 hover:border-blue-200 transition-all cursor-pointer group"
                      >
                        <input
                          type="file"
                          onChange={handleFileUpload}
                          className="hidden"
                          id="resume-upload"
                          accept=".pdf,.doc,.docx,.txt"
                        />
                        <div className="flex items-center gap-2 text-gray-500 group-hover:text-blue-600 transition-colors">
                          <UploadCloud className="w-5 h-5" />
                          <span className="text-sm">点击上传简历文件</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">
                          支持 PDF、Word、TXT 格式
                        </p>
                      </div>
                    ) : (
                      <div className="relative group">
                        <div className="flex items-center gap-3 p-4 bg-blue-50/80 border border-blue-100 rounded-xl">
                          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg">
                            <UploadCloud className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-700 truncate">
                              {resumeFile.name}
                            </p>
                            <div className="mt-1.5">
                              {uploadStatus === 'uploading' && (
                                <div className="w-full">
                                  <Progress value={uploadProgress} className="h-1" />
                                  <p className="text-xs text-blue-600 mt-1">上传中 {uploadProgress}%</p>
                                </div>
                              )}
                              {uploadStatus === 'success' && (
                                <p className="text-xs text-green-600">上传成功</p>
                              )}
                              {uploadStatus === 'error' && (
                                <p className="text-xs text-red-600">上传失败</p>
                              )}
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setResumeFile(null);
                              setUploadStatus('idle');
                              setUploadProgress(0);
                            }}
                            className="flex-shrink-0 p-1.5 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* 岗位要求输入区域 */}
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100">
                      <LineChart className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <h3 className="text-base font-medium text-gray-700">岗位要求</h3>
                  </div>
                  <textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="w-full h-[140px] p-4 text-sm text-gray-600 bg-gray-50/50 border border-gray-200 rounded-xl resize-none focus:ring-1 focus:ring-blue-200 focus:border-transparent transition-all placeholder:text-gray-400"
                    placeholder="请输入目标岗位的要求描述..."
                  />
                </div>
              </div>

              {/* 错误提示 */}
              {error && (
                <div className="flex items-center justify-center gap-2 text-red-600 bg-red-50/80 backdrop-blur-sm p-3 rounded-lg">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">{error}</span>
                </div>
              )}

              {/* 提交按钮 */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={!resumeFile || !jobDescription || isLoading}
                  className="group relative inline-flex items-center px-8 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-lg
                    hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-blue-600 disabled:hover:to-blue-700
                    transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
                >
                  <span className="relative">
                    {isLoading ? "分析中..." : (
                      <>
                        开始评测
                        <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* 评测结果展示区域 */}
        {(evaluationResults.resumeEvaluation || evaluationResults.jobEvaluation) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl mx-auto mt-8 px-4"
          >
            {/* 切换按钮 */}
            <div className="flex justify-center mb-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-lg border border-gray-100/50">
                <button
                  onClick={() => setActiveTab('resume')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTab === 'resume'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  简历评估
                </button>
                <button
                  onClick={() => setActiveTab('job')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTab === 'job'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  disabled={!evaluationResults.jobEvaluation}
                >
                  岗位匹配
                </button>
              </div>
            </div>

            {/* 评估结果内容 */}
            <div className="space-y-8">
              {/* 分数展示 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 p-8">
                <div className="flex flex-col items-center">
                  <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    {activeTab === 'resume' 
                      ? evaluationResults.resumeEvaluation?.score || 0
                      : evaluationResults.jobEvaluation?.score || 0}
                    <span className="text-lg text-gray-400 ml-1">分</span>
                  </div>
                  <div className="w-full max-w-sm h-2 bg-gray-100 rounded-full overflow-hidden mt-4">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ 
                        width: `${activeTab === 'resume' 
                          ? evaluationResults.resumeEvaluation?.score || 0
                          : evaluationResults.jobEvaluation?.score || 0}%` 
                      }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                    />
                  </div>
                  <p className="mt-3 text-sm text-gray-500">
                    {activeTab === 'resume' ? '简历完整度评分' : '岗位匹配度评分'}
                  </p>
                </div>
              </div>

              {/* 优势和建议展示 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 优势展示 */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 p-8">
                  <h3 className="flex items-center gap-3 text-base font-medium text-gray-900 mb-6">
                    <div className="p-2 bg-green-50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </div>
                    优势分析
                  </h3>
                  <ul className="space-y-4">
                    {(activeTab === 'resume' 
                      ? evaluationResults.resumeEvaluation?.strengths 
                      : evaluationResults.jobEvaluation?.strengths)?.map((strength: string, index: number) => (
                      <li 
                        key={index}
                        className="flex items-start gap-3 p-3 bg-green-50/50 rounded-xl"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700 leading-relaxed">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 改进建议展示 */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 p-8">
                  <h3 className="flex items-center gap-3 text-base font-medium text-gray-900 mb-6">
                    <div className="p-2 bg-amber-50 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-amber-500" />
                    </div>
                    改进建议
                  </h3>
                  <ul className="space-y-4">
                    {(activeTab === 'resume'
                      ? evaluationResults.resumeEvaluation?.improvements
                      : evaluationResults.jobEvaluation?.improvements)?.map((improvement: string, index: number) => (
                      <li 
                        key={index}
                        className="flex items-start gap-3 p-3 bg-amber-50/50 rounded-xl"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700 leading-relaxed">{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 综合评价 */}
              {((activeTab === 'resume' ? evaluationResults.resumeEvaluation?.summary : evaluationResults.jobEvaluation?.summary) || '') && (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 p-8">
                  <h3 className="flex items-center gap-3 text-base font-medium text-gray-900 mb-6">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <LineChart className="w-5 h-5 text-blue-500" />
                    </div>
                    综合评价
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    {(activeTab === 'resume' 
                      ? evaluationResults.resumeEvaluation?.summary 
                      : evaluationResults.jobEvaluation?.summary)
                      ?.split('\n')
                      .map((paragraph, index) => (
                        <p key={index} className="text-sm leading-relaxed">
                          {paragraph}
                        </p>
                      ))
                    }
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default JobEvaluation; 
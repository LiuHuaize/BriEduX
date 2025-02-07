"use client";

import { useState } from "react";
import { UploadCloud, LineChart, ArrowRight, CheckCircle2, AlertCircle, X } from "lucide-react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";

const JobEvaluation = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [fileUrl, setFileUrl] = useState<string | null>(null);

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

        // 生成唯一的文件名
        const fileExt = file.name.split('.').pop();
        const fileName = `${uuidv4()}.${fileExt}`;
        const filePath = `resume/${fileName}`;

        // 创建 FormData 对象
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

        setUploadProgress(80);

        const result = await response.json();
        if (result.error) {
          throw new Error(result.error);
        }

        // 保存文件的公共URL
        setFileUrl(result.data.publicUrl);
        
        setUploadProgress(100);
        setUploadStatus('success');
        toast.success('文件上传成功！');

      } catch (err: any) {
        console.error('Upload error:', err);
        setUploadStatus('error');
        setError(err.message || '文件上传失败');
        toast.error('文件上传失败，请重试');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      if (!resumeFile || !fileUrl) {
        throw new Error('请先上传简历文件');
      }

      const response = await fetch('/api/aihubmix', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          resumeContent: await readFileContent(resumeFile),
          jobDescription,
          fileUrl 
        }),
      });

      if (!response.ok) throw new Error('评测请求失败');
      const result = await response.json();
      if (result.error) throw new Error(result.error);
      setEvaluationResult(result);
    } catch (err: any) {
      setError(err.message || '评测过程中发生错误');
      console.error('Evaluation error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const readFileContent = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result as string);
      reader.onerror = () => reject(new Error('文件读取失败'));
      reader.readAsText(file);
    });
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
        {evaluationResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8"
          >
            {/* 分数展示 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 p-6 mb-6">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                  {evaluationResult.score}
                  <span className="text-base text-gray-400 ml-1">分</span>
                </div>
                <div className="w-full max-w-xs h-1.5 bg-gray-100 rounded-full overflow-hidden mt-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${evaluationResult.score}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* 详细分析 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 p-6">
                <h3 className="flex items-center gap-2 text-sm font-medium text-gray-900 mb-4">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                  </div>
                  优势亮点
                </h3>
                <ul className="space-y-2">
                  {evaluationResult.strengths.map((strength: string, index: number) => (
                    <li 
                      key={index}
                      className="flex items-start gap-2 p-2.5 bg-green-50/50 rounded-xl"
                    >
                      <span className="w-1 h-1 mt-1.5 bg-green-500 rounded-full flex-shrink-0" />
                      <span className="text-xs text-gray-600">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 p-6">
                <h3 className="flex items-center gap-2 text-sm font-medium text-gray-900 mb-4">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-orange-100">
                    <AlertCircle className="w-3 h-3 text-orange-600" />
                  </div>
                  改进建议
                </h3>
                <ul className="space-y-2">
                  {evaluationResult.improvements.map((improvement: string, index: number) => (
                    <li 
                      key={index}
                      className="flex items-start gap-2 p-2.5 bg-orange-50/50 rounded-xl"
                    >
                      <span className="w-1 h-1 mt-1.5 bg-orange-500 rounded-full flex-shrink-0" />
                      <span className="text-xs text-gray-600">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default JobEvaluation; 
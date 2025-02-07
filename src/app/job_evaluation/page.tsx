"use client";

import { useState } from "react";
import { UploadCloud, LineChart, ArrowRight, CheckCircle2, AlertCircle, X } from "lucide-react";
import { motion } from "framer-motion";

const JobEvaluation = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setResumeFile(file);
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const resumeContent = await readFileContent(resumeFile);
      const response = await fetch('/api/aihubmix', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resumeContent, jobDescription }),
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

  const readFileContent = (file: File | null): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!file) {
        reject(new Error('请先上传简历文件'));
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result as string);
      reader.onerror = () => reject(new Error('文件读取失败'));
      reader.readAsText(file);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-5xl mx-auto px-6 pt-28 pb-20">
        {/* 标题区域 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-3 mb-16"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            AI 简历评测
          </h1>
          <p className="text-gray-500 text-lg">
            智能分析您的简历与目标职位的匹配程度
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* 文件上传区域 - 改进版 */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <UploadCloud className="w-4 h-4 text-blue-600" />
                  <h3 className="font-medium text-gray-700">上传简历</h3>
                </div>
                <div className="relative">
                  {!resumeFile ? (
                    <div 
                      onClick={() => document.getElementById('resume-upload')?.click()}
                      className="flex flex-col items-center justify-center p-6 border border-dashed border-gray-200 rounded-xl bg-gray-50/30 hover:bg-gray-50/50 hover:border-blue-200 transition-all cursor-pointer group"
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
                        <span className="text-sm">点击或拖拽文件到此处上传</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">
                        支持 PDF、Word、TXT 格式
                      </p>
                    </div>
                  ) : (
                    <div className="relative group">
                      <div className="flex items-center gap-3 p-4 bg-blue-50/50 border border-blue-100 rounded-xl">
                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg">
                          <UploadCloud className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-700 truncate">
                            {resumeFile.name}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5">
                            {(resumeFile.size / 1024).toFixed(2)} KB
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setResumeFile(null)}
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
              <div className="flex-1">
                <div className="h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <LineChart className="w-4 h-4 text-blue-600" />
                    <h3 className="font-medium text-gray-700">岗位要求描述</h3>
                  </div>
                  <textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="flex-1 min-h-[180px] p-4 text-sm text-gray-600 bg-gray-50/30 border border-gray-200 rounded-xl resize-none focus:ring-2 focus:ring-blue-200 focus:border-transparent transition-all placeholder:text-gray-400"
                    placeholder="请输入目标岗位的要求描述..."
                  />
                </div>
              </div>
            </div>

            {/* 错误提示 */}
            {error && (
              <div className="flex items-center justify-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl">
                <AlertCircle className="w-4 h-4" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            {/* 提交按钮 */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={!resumeFile || !jobDescription || isLoading}
                className="group relative inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-xl
                  hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-blue-600 disabled:hover:to-blue-700
                  transition-all duration-200 ease-in-out"
              >
                <span className="relative">
                  {isLoading ? "分析中..." : (
                    <>
                      开始评测
                      <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>
            </div>
          </form>
        </motion.div>

        {/* 评测结果展示区域 */}
        {evaluationResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16"
          >
            {/* 分数展示 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <div className="flex flex-col items-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  {evaluationResult.score}
                  <span className="text-lg text-gray-400 ml-1">分</span>
                </div>
                <div className="w-full max-w-md h-2 bg-gray-100 rounded-full overflow-hidden mt-4">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="flex items-center gap-2 text-lg font-medium text-gray-900 mb-6">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  优势亮点
                </h3>
                <ul className="space-y-3">
                  {evaluationResult.strengths.map((strength: string, index: number) => (
                    <li 
                      key={index}
                      className="flex items-start gap-3 p-3 bg-green-50/50 rounded-xl"
                    >
                      <span className="w-1.5 h-1.5 mt-2 bg-green-500 rounded-full flex-shrink-0" />
                      <span className="text-gray-600">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="flex items-center gap-2 text-lg font-medium text-gray-900 mb-6">
                  <AlertCircle className="w-5 h-5 text-orange-500" />
                  改进建议
                </h3>
                <ul className="space-y-3">
                  {evaluationResult.improvements.map((improvement: string, index: number) => (
                    <li 
                      key={index}
                      className="flex items-start gap-3 p-3 bg-orange-50/50 rounded-xl"
                    >
                      <span className="w-1.5 h-1.5 mt-2 bg-orange-500 rounded-full flex-shrink-0" />
                      <span className="text-gray-600">{improvement}</span>
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
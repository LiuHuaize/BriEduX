"use client";

import { useState } from "react";
import { UploadCloud, LineChart } from "lucide-react";
import { motion } from "framer-motion";

const JobEvaluation = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState<any>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setResumeFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // 这里模拟API调用
    setTimeout(() => {
      setIsLoading(false);
      setEvaluationResult({
        score: 85,
        strengths: ["技能匹配度高", "项目经验丰富", "教育背景相关"],
        improvements: ["可以增加更多量化成果", "建议添加相关证书"],
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* 页面内容容器，添加顶部padding避免被导航栏遮挡 */}
      <div className="max-w-5xl mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
            AI 简历评测
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            上传您的简历和目标职位，获取专业的匹配度分析和改进建议
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* 文件上传区域 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-8">
                <div 
                  className="flex flex-col items-center justify-center p-10 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer group"
                  onClick={() => document.getElementById('resume-upload')?.click()}
                >
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="resume-upload"
                    accept=".pdf,.doc,.docx"
                  />
                  <div className="mb-6 p-4 bg-blue-50 rounded-full group-hover:scale-110 transition-transform">
                    <UploadCloud className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {resumeFile ? resumeFile.name : "上传您的简历"}
                  </h3>
                  <p className="text-sm text-gray-500">
                    支持 PDF、Word 格式文件
                  </p>
                </div>
              </div>
            </div>

            {/* 岗位要求输入区域 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <LineChart className="w-5 h-5 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">岗位要求描述</h3>
                </div>
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  rows={6}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="请输入目标岗位的详细要求描述..."
                />
              </div>
            </div>

            {/* 提交按钮 */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={!resumeFile || !jobDescription || isLoading}
                className="px-8 py-4 bg-blue-600 text-white text-lg font-medium rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm hover:shadow-md"
              >
                {isLoading ? "分析中..." : "开始评测"}
              </button>
            </div>
          </form>
        </motion.div>

        {/* 评测结果展示区域 */}
        {evaluationResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">评测结果</h2>
              
              <div className="mb-12">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium text-gray-700">匹配度评分</span>
                  <span className="text-3xl font-bold text-blue-600">
                    {evaluationResult.score}分
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${evaluationResult.score}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-blue-600 rounded-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    优势亮点
                  </h3>
                  <ul className="space-y-3">
                    {evaluationResult.strengths.map((strength: string, index: number) => (
                      <li key={index} className="flex items-center text-gray-700 bg-green-50 px-4 py-2 rounded-lg">
                        <span className="mr-2 text-green-500">✓</span>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    改进建议
                  </h3>
                  <ul className="space-y-3">
                    {evaluationResult.improvements.map((improvement: string, index: number) => (
                      <li key={index} className="flex items-center text-gray-700 bg-orange-50 px-4 py-2 rounded-lg">
                        <span className="mr-2 text-orange-500">•</span>
                        {improvement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default JobEvaluation; 
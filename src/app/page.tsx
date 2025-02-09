"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, FileText, Briefcase, Zap } from "lucide-react";
import { HeroDemo } from "@/components/hero-demo";
import { SectionDivider } from "@/components/ui/section-divider";
import Testimonials from "@/app/components/Testimonials";
import { useState, useEffect } from "react";

export default function Home() {
  const words = ["智能化", "AI驱动", "专业级"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* 背景装饰 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:40px] bg-[position:center] z-0"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px] bg-[position:center] z-0"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                AI + ATS 双引擎
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
                打造
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block px-2 relative"
                  >
                    {words[currentWordIndex]}
                    <div className="absolute bottom-2 left-0 right-0 h-3 bg-blue-200/30 -z-10 transform skew-x-12"></div>
                  </motion.span>
                </AnimatePresence>
                求职体验
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                融合 DeepSeek、Gemini 等顶尖 AI 技术，结合智联招聘百万级岗位数据库分析，帮助你打造专业简历，
                精准匹配理想工作。让求职更智能、更高效。
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>智联数据支持</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>DeepSeek 引擎</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>HR 专家认证</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                href="/resume/create" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                开始使用
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link 
                href="#features" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 bg-white hover:bg-gray-50 rounded-lg border border-gray-200 transition-colors duration-200"
              >
                了解更多
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              核心功能
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI + ATS 智能简历优化系统</h2>
            <p className="text-lg text-gray-600">融合多项前沿技术，打造全方位的智能求职助手</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.03, y: -5 }}
              className="p-8 bg-gradient-to-br from-white to-blue-50/50 rounded-2xl shadow-lg hover:shadow-xl border border-blue-100/50 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/20 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">ATS 制作简历</h3>
                <p className="text-gray-600 leading-relaxed">智能分析 ATS 系统评分标准，优化关键词匹配度，提升简历通过率</p>
                <Link href="/resume/create" className="inline-flex items-center text-blue-600 mt-6 hover:text-blue-700 group">
                  开始制作 
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.03, y: -5 }}
              className="p-8 bg-gradient-to-br from-white to-purple-50/50 rounded-2xl shadow-lg hover:shadow-xl border border-purple-100/50 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/20 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI 智能匹配</h3>
                <p className="text-gray-600 leading-relaxed">DeepSeek 深度分析职位要求，结合智联招聘大数据，提供最精准的岗位推荐</p>
                <Link href="/jobs" className="inline-flex items-center text-purple-600 mt-6 hover:text-purple-700 group">
                  开始匹配 
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.03, y: -5 }}
              className="p-8 bg-gradient-to-br from-white to-green-50/50 rounded-2xl shadow-lg hover:shadow-xl border border-green-100/50 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100/20 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">专家级评测</h3>
                <p className="text-gray-600 leading-relaxed">结合 HR 专家经验，提供深度简历诊断和面试能力评估</p>
                <Link href="/job_evaluation" className="inline-flex items-center text-green-600 mt-6 hover:text-green-700 group">
                  开始评测 
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              技术赋能
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">前沿技术驱动</h2>
            <p className="text-lg text-gray-600">整合多项顶尖AI技术，打造智能简历优化系统</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.03, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-8 bg-gradient-to-br from-white to-blue-50/50 rounded-2xl shadow-lg hover:shadow-xl border border-blue-100/50 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/20 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">智联招聘数据库</h3>
                <p className="text-gray-600 leading-relaxed">直连智联招聘百万级岗位数据库，实时分析市场需求，智能匹配最新职位，提供精准的职业发展方向</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.03, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="p-8 bg-gradient-to-br from-white to-purple-50/50 rounded-2xl shadow-lg hover:shadow-xl border border-purple-100/50 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/20 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">DeepSeek 简历优化</h3>
                <p className="text-gray-600 leading-relaxed">结合专业简历数据库，DeepSeek 大模型深度解析行业标准，为你量身定制符合 ATS 筛选标准的专业简历</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.03, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="p-8 bg-gradient-to-br from-white to-green-50/50 rounded-2xl shadow-lg hover:shadow-xl border border-green-100/50 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100/20 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gemini 智能评测</h3>
                <p className="text-gray-600 leading-relaxed">基于私有评分数据库和 Gemini Ultra 模型，提供专业的简历诊断、评分和优化建议，助你打造完美简历</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative w-full bg-gradient-to-b from-white via-blue-50/50 to-white py-20 overflow-hidden">
        {/* 装饰元素 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
          {/* 网格背景 */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px)] bg-[size:40px] bg-[position:center]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px] bg-[position:center]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonials />
        </div>
      </section>
    </main>
  );
}

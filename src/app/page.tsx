"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, FileText, Briefcase, Zap } from "lucide-react";
import { HeroDemo } from "@/components/hero-demo";
import { SectionDivider } from "@/components/ui/section-divider";
import Testimonials from "@/app/components/Testimonials";
import { useState, useEffect } from "react";

export default function Home() {
  const words = ["精准型", "高效型", "专业型", "智能型"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
                全新升级
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
                使用 AI 技术帮助你打造专业简历，精准匹配理想工作。让求职之路不再迷茫，轻松实现职业理想。
              </p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">智能简历制作和职位匹配</h2>
            <p className="text-lg text-gray-600">一站式解决求职难题，让求职更轻松、更高效</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-6 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">打造简历</h3>
              <p className="text-gray-600">智能生成专业简历，突出个人优势，提高简历通过率</p>
              <Link href="/resume/create" className="inline-flex items-center text-blue-600 mt-4 hover:text-blue-700">
                开始制作 <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8 }}
              className="p-6 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">匹配岗位</h3>
              <p className="text-gray-600">基于简历智能匹配最适合的工作机会，提供个性化推荐</p>
              <Link href="/auth/register" className="inline-flex items-center text-purple-600 mt-4 hover:text-purple-700">
                开始匹配 <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8 }}
              className="p-6 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI 赋能</h3>
              <p className="text-gray-600">利用最新的 AI 技术，帮助您打造完美简历，找到理想工作</p>
              <Link href="/auth/register" className="inline-flex items-center text-green-600 mt-4 hover:text-green-700">
                了解更多 <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
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
              AI 赋能
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">提升求职效率</h2>
            <p className="text-lg text-gray-600">利用最新的 AI 技术，帮助您打造完美简历，找到理想工作</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">关键词优化</h3>
              <p className="text-gray-600">智能分析职位要求，优化简历关键词，提高通过 ATS 系统的概率</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">智能写作建议</h3>
              <p className="text-gray-600">AI 助手提供专业的写作建议，让您的简历更有说服力</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">个性化推荐</h3>
              <p className="text-gray-600">基于您的技能和偏好，智能推荐最适合的工作机会</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Testimonials />
        </div>
      </section>
    </main>
  );
}

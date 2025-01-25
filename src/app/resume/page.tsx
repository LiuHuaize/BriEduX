"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  Upload, 
  Download, 
  Sparkles,
  ArrowRight,
  Mic,
  Settings,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumePage() {
  const [step, setStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "上传已有简历",
      description: "上传你现有的简历，AI 将帮助你优化",
      icon: Upload,
      color: "blue"
    },
    {
      id: 2,
      title: "创建新简历",
      description: "从头开始创建一份全新的专业简历",
      icon: FileText,
      color: "indigo"
    },
    {
      id: 3,
      title: "AI 优化建议",
      description: "获取 AI 针对性的优化建议",
      icon: Sparkles,
      color: "purple"
    },
    {
      id: 4,
      title: "导出简历",
      description: "导出优化后的专业简历",
      icon: Download,
      color: "green"
    },
  ];

  const features = [
    {
      icon: Mic,
      title: "语音输入",
      description: "支持语音输入，让简历制作更轻松"
    },
    {
      icon: Settings,
      title: "智能优化",
      description: "AI 自动优化内容和格式"
    },
    {
      icon: CheckCircle,
      title: "ATS 优化",
      description: "确保简历通过 ATS 系统筛选"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-20">
      {/* Header Section */}
      <div className="relative overflow-hidden pt-16 pb-32">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-top" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              打造你的专业简历
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              使用 AI 技术，让你的简历脱颖而出
            </motion.p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Steps Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 ${
                step === s.id ? 'ring-2 ring-blue-500 ring-offset-2' : ''
              }`}
              onClick={() => setStep(s.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-${s.color}-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <s.icon className={`w-6 h-6 text-${s.color}-600`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">{s.title}</h3>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
                <p className="text-gray-600">{s.description}</p>
                {step === s.id && (
                  <div className="mt-6 flex justify-end">
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
                    >
                      开始制作
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <motion.div 
        className="fixed bottom-8 right-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Button
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full px-8 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          快速开始
        </Button>
      </motion.div>
    </div>
  );
} 
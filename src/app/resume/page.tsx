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
  CheckCircle,
  MessageCircle,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ResumePage() {
  const [step, setStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "对话式创建",
      description: "像聊天一样轻松创建简历，AI助手会引导你挖掘亮点",
      icon: MessageCircle,
      color: "blue",
      action: "开始对话"
    },
    {
      id: 2,
      title: "匹配岗位经历",
      description: "AI分析目标岗位要求，帮你发掘最匹配的经历和技能",
      icon: Target,
      color: "indigo",
      action: "开始匹配"
    },
    {
      id: 3,
      title: "智能优化建议",
      description: "获得针对性的简历优化建议，让简历更专业更有竞争力",
      icon: Sparkles,
      color: "purple",
      action: "获取建议"
    },
    {
      id: 4,
      title: "一键生成简历",
      description: "基于对话内容，自动生成精美的专业简历模板",
      icon: FileText,
      color: "green",
      action: "立即生成"
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
      <div className="relative overflow-hidden pt-24 pb-32">
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                onClick={() => window.location.href = '/resume/create'}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                开始使用
              </Button>
            </motion.div>
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
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
              onClick={() => setStep(s.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-8">
                <div className="flex items-center mb-6">
                  <div className={cn(
                    "w-10 h-10 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                    {
                      'bg-blue-100/50': s.color === 'blue',
                      'bg-indigo-100/50': s.color === 'indigo',
                      'bg-purple-100/50': s.color === 'purple',
                      'bg-green-100/50': s.color === 'green'
                    }
                  )}>
                    <s.icon className={cn(
                      "w-5 h-5 stroke-[1.5]",
                      {
                        'text-blue-600': s.color === 'blue',
                        'text-indigo-600': s.color === 'indigo',
                        'text-purple-600': s.color === 'purple',
                        'text-green-600': s.color === 'green'
                      }
                    )} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">{s.title}</h3>
                </div>
                <p className="text-gray-600">{s.description}</p>
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
          onClick={() => window.location.href = '/resume/create'}
        >
          <Sparkles className="w-5 h-5 mr-2" />
          快速开始
        </Button>
      </motion.div>
    </div>
  );
} 
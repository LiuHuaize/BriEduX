"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Briefcase, 
  Target, 
  Star,
  Building2,
  MapPin,
  Users,
  ArrowRight,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";

const jobTypes = [
  { id: "all", label: "全职", count: 2345 },
  { id: "intern", label: "实习", count: 1234 },
  { id: "parttime", label: "兼职", count: 890 },
  { id: "campus", label: "校招", count: 678 },
  { id: "social", label: "社招", count: 456 },
  { id: "remote", label: "远程", count: 234 },
];

const jobCategories = [
  {
    title: "技术研发",
    count: 2345,
    icon: Search,
    color: "blue",
    trending: true,
    description: "软件开发、算法、人工智能等技术岗位"
  },
  {
    title: "产品设计",
    count: 1234,
    icon: Target,
    color: "indigo",
    trending: true,
    description: "产品经理、UI/UX 设计师等创意岗位"
  },
  {
    title: "运营市场",
    count: 890,
    icon: Users,
    color: "purple",
    trending: false,
    description: "市场营销、内容运营、用户增长等岗位"
  },
  {
    title: "职能支持",
    count: 567,
    icon: Building2,
    color: "green",
    trending: false,
    description: "人力资源、财务、行政等支持岗位"
  },
];

export default function JobsPage() {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
              匹配理想岗位
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              基于你的简历，智能匹配最适合的工作机会
            </motion.p>
          </div>
        </div>
      </div>

      {/* Job Types Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Filter className="w-5 h-5 text-blue-600" />
              筛选条件
            </h2>
            <Button 
              variant="outline"
              size="sm"
              className="text-gray-500 hover:text-gray-700"
            >
              重置筛选
            </Button>
          </div>
          <div className="flex flex-wrap gap-3">
            {jobTypes.map((type) => (
              <Button
                key={type.id}
                variant={selectedType === type.id ? "default" : "outline"}
                onClick={() => setSelectedType(type.id)}
                className={`
                  group relative 
                  ${selectedType === type.id 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'hover:bg-blue-50'
                  }
                `}
              >
                <span>{type.label}</span>
                <span className="ml-2 text-xs opacity-60">({type.count})</span>
                {selectedType === type.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                  />
                )}
              </Button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Job Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className={`
                group relative bg-white rounded-2xl shadow-lg hover:shadow-xl 
                transition-all duration-300 cursor-pointer border border-gray-100
                ${selectedCategory === category.title ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
              `}
              onClick={() => setSelectedCategory(category.title)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-${category.color}-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`w-6 h-6 text-${category.color}-600`} />
                  </div>
                  {category.trending && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      热门
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {category.count} 个职位
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all" />
                </div>
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
          <Target className="w-5 h-5 mr-2" />
          开始匹配
        </Button>
      </motion.div>
    </div>
  );
} 
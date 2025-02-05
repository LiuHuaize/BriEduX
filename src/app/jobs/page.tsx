"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Upload,
  FileText,
  Filter,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// 类型定义
type JobFilter = {
  location?: string;
  position?: string;
  minSalary?: number;
  education?: string;
  companyType?: string;
  experience?: string;
  keywords?: string[];
};

export default function JobsPage() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<JobFilter>({});
  const [activeMethod, setActiveMethod] = useState<'resume' | 'search'>('resume');

  const handleResumeUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type)) {
      alert('请上传 PDF 或 Word 文档');
      return;
    }

    setResumeFile(file);
    setIsUploading(true);
    // TODO: 实现文件上传和简历分析逻辑
    setIsUploading(false);
  };

  const handleSearch = async () => {
    // TODO: 实现搜索逻辑
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* 顶部背景装饰 */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-50 to-transparent -z-10" />
      
      {/* 主要内容区域 */}
      <div className="relative max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            匹配理想岗位
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            上传简历或直接搜索，找到最适合你的工作机会
          </motion.p>
        </div>

        {/* 选择方式切换 */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-100 rounded-xl">
            <button
              onClick={() => setActiveMethod('resume')}
              className={`px-6 py-3 rounded-lg flex items-center space-x-2 transition-all ${
                activeMethod === 'resume'
                  ? 'bg-white shadow-sm text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText className="w-5 h-5" />
              <span>简历匹配</span>
            </button>
            <button
              onClick={() => setActiveMethod('search')}
              className={`px-6 py-3 rounded-lg flex items-center space-x-2 transition-all ${
                activeMethod === 'search'
                  ? 'bg-white shadow-sm text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Search className="w-5 h-5" />
              <span>自定义搜索</span>
            </button>
          </div>
        </div>

        {/* 内容区域 */}
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {activeMethod === 'resume' ? (
            // 简历上传区域
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="relative group cursor-pointer">
                <input
                  type="file"
                  id="resume-upload"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeUpload}
                />
                <Label
                  htmlFor="resume-upload"
                  className="block"
                >
                  <div className="flex flex-col items-center justify-center p-10 border-2 border-dashed border-gray-200 rounded-xl group-hover:border-blue-400 transition-colors duration-200">
                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-200">
                      <Upload className="w-10 h-10 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {resumeFile ? resumeFile.name : "点击上传简历"}
                    </h3>
                    <p className="text-gray-500">支持 PDF、Word 格式</p>
                    {isUploading && (
                      <div className="mt-4 text-blue-600 flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent mr-2" />
                        正在分析简历...
                      </div>
                    )}
                  </div>
                </Label>
              </div>
            </div>
          ) : (
            // 自定义搜索区域
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="space-y-6">
                <div className="relative">
                  <textarea
                    placeholder="例如：我想要在重庆找一份律师的工作，我是本科然后想要一份6000以上的工作"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-32 px-4 py-3 text-base resize-none rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="text-gray-600 hover:text-gray-900">
                        <Filter className="w-4 h-4 mr-2" />
                        高级筛选
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[500px] sm:w-[540px] bg-white/80 backdrop-blur-xl">
                      <SheetHeader className="px-1 border-b pb-6">
                        <SheetTitle className="text-2xl font-semibold text-gray-800">高级筛选</SheetTitle>
                        <SheetDescription className="text-base text-gray-500">
                          设置详细的工作筛选条件，帮助你更精准地找到心仪的工作
                        </SheetDescription>
                      </SheetHeader>
                      <div className="mt-8 space-y-8 px-1">
                        {/* 工作基本信息 */}
                        <div>
                          <h3 className="text-sm font-medium text-gray-400 mb-4">基本信息</h3>
                          <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label className="text-sm font-medium text-gray-700">工作地点</Label>
                              <Input
                                placeholder="例如：重庆"
                                value={filters.location}
                                onChange={(e) => setFilters({...filters, location: e.target.value})}
                                className="h-11 bg-gray-50/50 border-gray-200 hover:border-gray-300 focus:border-blue-500 transition-colors"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-sm font-medium text-gray-700">职位名称</Label>
                              <Input
                                placeholder="例如：律师"
                                value={filters.position}
                                onChange={(e) => setFilters({...filters, position: e.target.value})}
                                className="h-11 bg-gray-50/50 border-gray-200 hover:border-gray-300 focus:border-blue-500 transition-colors"
                              />
                            </div>
                          </div>
                        </div>

                        {/* 薪资和学历要求 */}
                        <div>
                          <h3 className="text-sm font-medium text-gray-400 mb-4">薪资与要求</h3>
                          <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label className="text-sm font-medium text-gray-700">最低薪资</Label>
                              <div className="relative">
                                <Input
                                  type="number"
                                  placeholder="例如：6"
                                  value={filters.minSalary}
                                  onChange={(e) => setFilters({...filters, minSalary: Number(e.target.value)})}
                                  className="h-11 pr-16 bg-gray-50/50 border-gray-200 hover:border-gray-300 focus:border-blue-500 transition-colors"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400 border-l border-gray-200">
                                  K/月
                                </div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label className="text-sm font-medium text-gray-700">学历</Label>
                              <Select
                                value={filters.education}
                                onValueChange={(value) => setFilters({...filters, education: value})}
                              >
                                <SelectTrigger className="h-11 bg-gray-50/50 border-gray-200 hover:border-gray-300 focus:border-blue-500 transition-colors">
                                  <SelectValue placeholder="选择学历要求" />
                                </SelectTrigger>
                                <SelectContent className="bg-white/80 backdrop-blur-xl max-h-[300px]">
                                  <SelectItem value="1">1. 不限</SelectItem>
                                  <SelectItem value="2">2. 初中及以下</SelectItem>
                                  <SelectItem value="3">3. 中技</SelectItem>
                                  <SelectItem value="4">4. 高中</SelectItem>
                                  <SelectItem value="5">5. 中专/中技</SelectItem>
                                  <SelectItem value="6">6. 大专</SelectItem>
                                  <SelectItem value="7">7. 本科</SelectItem>
                                  <SelectItem value="8">8. 硕士</SelectItem>
                                  <SelectItem value="9">9. MBA/EMBA</SelectItem>
                                  <SelectItem value="10">10. EMBA</SelectItem>
                                  <SelectItem value="11">11. 博士</SelectItem>
                                  <SelectItem value="12">12. 其他</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>

                        {/* 公司和经验要求 */}
                        <div>
                          <h3 className="text-sm font-medium text-gray-400 mb-4">公司与经验</h3>
                          <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label className="text-sm font-medium text-gray-700">公司类型</Label>
                              <Select
                                value={filters.companyType}
                                onValueChange={(value) => setFilters({...filters, companyType: value})}
                              >
                                <SelectTrigger className="h-11 bg-gray-50/50 border-gray-200 hover:border-gray-300 focus:border-blue-500 transition-colors">
                                  <SelectValue placeholder="选择公司类型" />
                                </SelectTrigger>
                                <SelectContent className="bg-white/80 backdrop-blur-xl max-h-[300px]">
                                  <SelectItem value="1">1. 国企</SelectItem>
                                  <SelectItem value="2">2. 外商独资</SelectItem>
                                  <SelectItem value="3">3. 代表处</SelectItem>
                                  <SelectItem value="4">4. 合资</SelectItem>
                                  <SelectItem value="5">5. 民营</SelectItem>
                                  <SelectItem value="6">6. 国家机关</SelectItem>
                                  <SelectItem value="7">7. 其他</SelectItem>
                                  <SelectItem value="8">8. 股份制企业</SelectItem>
                                  <SelectItem value="9">9. 上市公司</SelectItem>
                                  <SelectItem value="10">10. 事业单位</SelectItem>
                                  <SelectItem value="11">11. 银行</SelectItem>
                                  <SelectItem value="12">12. 医院</SelectItem>
                                  <SelectItem value="13">13. 学校/下级学院</SelectItem>
                                  <SelectItem value="14">14. 律师事务所</SelectItem>
                                  <SelectItem value="15">15. 社会团体</SelectItem>
                                  <SelectItem value="16">16. 港澳台公司</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label className="text-sm font-medium text-gray-700">工作经验</Label>
                              <Select
                                value={filters.experience}
                                onValueChange={(value) => setFilters({...filters, experience: value})}
                              >
                                <SelectTrigger className="h-11 bg-gray-50/50 border-gray-200 hover:border-gray-300 focus:border-blue-500 transition-colors">
                                  <SelectValue placeholder="选择工作经验" />
                                </SelectTrigger>
                                <SelectContent className="bg-white/80 backdrop-blur-xl">
                                  <SelectItem value="fresh">应届生</SelectItem>
                                  <SelectItem value="1-3">1-3年</SelectItem>
                                  <SelectItem value="3-5">3-5年</SelectItem>
                                  <SelectItem value="5-10">5-10年</SelectItem>
                                  <SelectItem value="10+">10年以上</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>

                        <div className="pt-6 border-t">
                          <Button 
                            onClick={() => setFilters({})} 
                            variant="outline" 
                            className="w-full h-11 border-gray-200 hover:bg-gray-50 text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            重置筛选条件
                          </Button>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                  <Button 
                    onClick={handleSearch}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                  >
                    搜索
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
} 
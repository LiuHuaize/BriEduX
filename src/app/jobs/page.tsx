"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Upload,
  FileText,
  Filter,
  ArrowRight,
  Building2,
  MapPin,
  Briefcase,
  DollarSign,
  ExternalLink,
  Loader2,
  X,
  CheckCircle2,
  AlertCircle,
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';
import { toast } from "sonner";
import { useDropzone } from 'react-dropzone';
import { Progress } from "@/components/ui/progress";

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

interface JobInfo {
  company: string;
  position: string;
  location: string;
  salary: string;
  url: string;
}

// Supabase 客户端配置 - 使用 anon key 用于基本操作
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 教育程度和工作经验的映射
const educationMap: { [key: string]: string } = {
  "1": "学历不限",
  "2": "初中及以下",
  "3": "中技",
  "4": "高中",
  "5": "中专/中技",
  "6": "大专",
  "7": "本科",
  "8": "硕士",
  "9": "MBA/EMBA",
  "10": "EMBA",
  "11": "博士",
  "12": "其他"
};

const experienceMap: { [key: string]: string } = {
  "fresh": "应届生",
  "1-3": "1-3年经验",
  "3-5": "3-5年经验",
  "5-10": "5-10年经验",
  "10+": "10年以上经验"
};

export default function JobsPage() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<JobFilter>({
    location: "",
    position: "",
    minSalary: undefined,
    education: undefined,
    companyType: undefined,
    experience: undefined,
    keywords: [],
  });
  const [activeMethod, setActiveMethod] = useState<'resume' | 'search'>('resume');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<JobInfo[]>([]);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [uploadLogs, setUploadLogs] = useState<Array<{
    time: Date;
    message: string;
    type: 'info' | 'success' | 'error';
  }>>([]);

  // 添加日志
  const addLog = (message: string, type: 'info' | 'success' | 'error' = 'info') => {
    setUploadLogs(prev => [...prev, {
      time: new Date(),
      message,
      type
    }]);
  };

  // 处理文件拖拽
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      handleFileUpload(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    multiple: false
  });

  const handleFileUpload = async (file: File) => {
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type)) {
      toast.error('请上传 PDF 或 Word 格式的简历');
      return;
    }

    try {
      setResumeFile(file);
      setIsUploading(true);
      setUploadStatus('uploading');
      setUploadProgress(0);

      // 生成唯一的文件名
      const fileExt = file.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `resume/${fileName}`;

      // 创建 FormData 对象
      const formData = new FormData();
      formData.append('file', file);
      formData.append('filePath', filePath);

      // 模拟分析进度
      const progressSteps = [
        { progress: 20, message: '正在解析简历...' },
        { progress: 40, message: '提取关键技能...' },
        { progress: 60, message: '分析工作经验...' },
        { progress: 80, message: '匹配合适职位...' },
        { progress: 90, message: '生成推荐报告...' }
      ];

      let currentStep = 0;
      const progressInterval = setInterval(() => {
        if (currentStep < progressSteps.length) {
          setUploadProgress(progressSteps[currentStep].progress);
          addLog(progressSteps[currentStep].message, 'info');
          currentStep++;
        } else {
          clearInterval(progressInterval);
        }
      }, 1000);

      // 上传文件
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || '上传失败');
      }

      const data = await response.json();
      setUploadProgress(100);
      setUploadStatus('success');
      
      toast.success('简历分析完成！');
      addLog('🎉 已为您匹配最适合的职位', 'success');
      
      // 获取文件URL
      const { data: { publicUrl } } = supabase.storage
        .from('resume')
        .getPublicUrl(filePath);

    } catch (error) {
      console.error('Upload error:', error);
      setUploadStatus('error');
      toast.error('简历处理失败，请重试');
    } finally {
      setIsUploading(false);
    }
  };

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  // 构建搜索查询
  const buildSearchQuery = () => {
    let query = searchQuery;

    // 如果有筛选条件，将其添加到查询中
    if (filters.location) {
      query += ` 工作地点在${filters.location}`;
    }
    if (filters.position) {
      query += ` 职位是${filters.position}`;
    }
    if (filters.minSalary) {
      query += ` 薪资${filters.minSalary}k以上`;
    }
    if (filters.education) {
      query += ` 学历要求${educationMap[filters.education]}`;
    }
    if (filters.experience) {
      query += ` 工作经验${experienceMap[filters.experience]}`;
    }

    return query.trim();
  };

  const handleSearch = async () => {
    const finalQuery = buildSearchQuery();
    
    if (!finalQuery) {
      setSearchError('请输入搜索内容或设置筛选条件');
      return;
    }

    setIsSearching(true);
    setSearchError(null);
    setSearchResults([]);

    try {
      const response = await fetch('/api/jobs/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: finalQuery }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || '搜索失败');
      }

      if (data.success && Array.isArray(data.data)) {
        setSearchResults(data.data);
      } else {
        throw new Error('返回数据格式不正确');
      }
    } catch (error) {
      setSearchError(error instanceof Error ? error.message : '搜索过程中发生错误');
    } finally {
      setIsSearching(false);
    }
  };

  // 重置筛选条件
  const handleResetFilters = () => {
    setFilters({
      location: "",
      position: "",
      minSalary: undefined,
      education: undefined,
      companyType: undefined,
      experience: undefined,
      keywords: [],
    });
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
            className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            AI 智能岗位匹配
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            上传简历，让 AI 为您精准匹配最适合的工作机会
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
            <div className="space-y-8">
              {/* 上传区域 */}
              <div
                {...getRootProps()}
                className={`relative overflow-hidden bg-white rounded-2xl shadow-lg transition-all duration-300 ${
                  isDragActive ? 'border-2 border-blue-500 bg-blue-50' : ''
                } ${!isUploading && 'hover:shadow-xl'}`}
              >
                <input {...getInputProps()} onChange={handleResumeUpload} disabled={isUploading} />
                
                <div className="p-8">
                  {isUploading ? (
                    <div className="space-y-6">
                      <div className="flex items-center justify-center">
                        <div className="relative w-24 h-24">
                          <div className="absolute inset-0 rounded-full border-4 border-blue-100 border-opacity-50"></div>
                          <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <FileText className="w-8 h-8 text-blue-500" />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="text-center">
                          <p className="text-lg font-medium text-gray-900">正在分析您的简历</p>
                          <p className="text-sm text-gray-500 mt-1">请稍候，这可能需要几秒钟...</p>
                        </div>
                        <Progress value={uploadProgress} className="w-full h-1.5" />
                        <p className="text-center text-sm font-medium text-blue-600">
                          {uploadProgress < 100 ? '正在处理...' : '分析完成！'}
                        </p>
                      </div>
                    </div>
                  ) : resumeFile && uploadStatus === 'success' ? (
                    <div className="text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">简历分析完成</h3>
                        <p className="text-sm text-gray-500 mt-1">我们已经为您找到最匹配的职位</p>
                      </div>
                      <Button 
                        className="mt-4"
                        onClick={() => {
                          // TODO: 跳转到匹配结果页面
                        }}
                      >
                        查看匹配结果
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50">
                        <Upload className="w-8 h-8 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {isDragActive ? "释放以上传简历" : "上传您的简历"}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          支持 PDF、Word 格式
                        </p>
                      </div>
                      {!isDragActive && (
                        <Button variant="outline" className="mt-4">
                          选择文件
                          <Upload className="w-4 h-4 ml-2" />
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* 处理步骤说明 */}
              {!isUploading && !resumeFile && (
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center space-y-2">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50">
                      <FileText className="w-6 h-6 text-blue-500" />
                    </div>
                    <p className="text-sm font-medium text-gray-900">上传简历</p>
                    <p className="text-xs text-gray-500">支持多种文档格式</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50">
                      <Search className="w-6 h-6 text-blue-500" />
                    </div>
                    <p className="text-sm font-medium text-gray-900">AI 分析</p>
                    <p className="text-xs text-gray-500">提取关键技能和经验</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50">
                      <Briefcase className="w-6 h-6 text-blue-500" />
                    </div>
                    <p className="text-sm font-medium text-gray-900">智能匹配</p>
                    <p className="text-xs text-gray-500">推荐最适合的职位</p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            // 自定义搜索区域
            <div className="space-y-6">
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
                        <Button 
                          variant="outline" 
                          className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 hover:border-gray-300 shadow-sm"
                        >
                          <Filter className="w-4 h-4 mr-2 text-gray-500" />
                          高级筛选
                        </Button>
                      </SheetTrigger>
                      <SheetContent 
                        side="right" 
                        className="w-[500px] sm:w-[540px] bg-white border-l border-gray-100 shadow-2xl"
                      >
                        <SheetHeader className="px-1 border-b border-gray-100 pb-6">
                          <SheetTitle className="text-2xl font-semibold text-gray-800">高级筛选</SheetTitle>
                          <SheetDescription className="text-base text-gray-500">
                            设置详细的工作筛选条件，帮助你更精准地找到心仪的工作
                          </SheetDescription>
                        </SheetHeader>
                        <div className="mt-8 space-y-10 px-1">
                          {/* 工作基本信息 */}
                          <div>
                            <h3 className="text-sm font-medium text-gray-400 mb-6 flex items-center">
                              <span className="w-1 h-4 bg-blue-500 rounded-full mr-2"></span>
                              基本信息
                            </h3>
                            <div className="grid grid-cols-2 gap-6">
                              <div className="space-y-2.5">
                                <Label className="text-sm font-medium text-gray-600">工作地点</Label>
                                <Input
                                  placeholder="例如：重庆"
                                  value={filters.location || ""}
                                  onChange={(e) => setFilters({...filters, location: e.target.value})}
                                  className="h-11 bg-gray-50 border-0 hover:bg-gray-100 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                                />
                              </div>
                              <div className="space-y-2.5">
                                <Label className="text-sm font-medium text-gray-600">职位名称</Label>
                                <Input
                                  placeholder="例如：律师"
                                  value={filters.position || ""}
                                  onChange={(e) => setFilters({...filters, position: e.target.value})}
                                  className="h-11 bg-gray-50 border-0 hover:bg-gray-100 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                                />
                              </div>
                            </div>
                          </div>

                          {/* 薪资和学历要求 */}
                          <div>
                            <h3 className="text-sm font-medium text-gray-400 mb-6 flex items-center">
                              <span className="w-1 h-4 bg-green-500 rounded-full mr-2"></span>
                              薪资与要求
                            </h3>
                            <div className="grid grid-cols-2 gap-6">
                              <div className="space-y-2.5">
                                <Label className="text-sm font-medium text-gray-600">最低薪资</Label>
                                <div className="relative">
                                  <Input
                                    type="number"
                                    placeholder="例如：6"
                                    value={filters.minSalary || ""}
                                    onChange={(e) => setFilters({...filters, minSalary: e.target.value ? Number(e.target.value) : undefined})}
                                    className="h-11 pr-16 bg-gray-50 border-0 hover:bg-gray-100 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                                  />
                                  <div className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-400 bg-gray-100 rounded-r-md">
                                    K/月
                                  </div>
                                </div>
                              </div>
                              <div className="space-y-2.5">
                                <Label className="text-sm font-medium text-gray-600">学历要求</Label>
                                <Select
                                  value={filters.education || ""}
                                  onValueChange={(value) => setFilters({...filters, education: value || undefined})}
                                >
                                  <SelectTrigger className="h-11 bg-gray-50 border-0 hover:bg-gray-100 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200">
                                    <SelectValue placeholder="选择学历要求" />
                                  </SelectTrigger>
                                  <SelectContent className="bg-white border border-gray-100 shadow-lg">
                                    <SelectItem value="1">不限</SelectItem>
                                    <SelectItem value="2">初中及以下</SelectItem>
                                    <SelectItem value="3">中技</SelectItem>
                                    <SelectItem value="4">高中</SelectItem>
                                    <SelectItem value="5">中专/中技</SelectItem>
                                    <SelectItem value="6">大专</SelectItem>
                                    <SelectItem value="7">本科</SelectItem>
                                    <SelectItem value="8">硕士</SelectItem>
                                    <SelectItem value="9">MBA/EMBA</SelectItem>
                                    <SelectItem value="10">EMBA</SelectItem>
                                    <SelectItem value="11">博士</SelectItem>
                                    <SelectItem value="12">其他</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          </div>

                          {/* 公司和经验要求 */}
                          <div>
                            <h3 className="text-sm font-medium text-gray-400 mb-6 flex items-center">
                              <span className="w-1 h-4 bg-purple-500 rounded-full mr-2"></span>
                              公司与经验
                            </h3>
                            <div className="grid grid-cols-2 gap-6">
                              <div className="space-y-2.5">
                                <Label className="text-sm font-medium text-gray-600">公司类型</Label>
                                <Select
                                  value={filters.companyType || ""}
                                  onValueChange={(value) => setFilters({...filters, companyType: value || undefined})}
                                >
                                  <SelectTrigger className="h-11 bg-gray-50 border-0 hover:bg-gray-100 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200">
                                    <SelectValue placeholder="选择公司类型" />
                                  </SelectTrigger>
                                  <SelectContent className="bg-white border border-gray-100 shadow-lg">
                                    <SelectItem value="1">国企</SelectItem>
                                    <SelectItem value="2">外商独资</SelectItem>
                                    <SelectItem value="3">代表处</SelectItem>
                                    <SelectItem value="4">合资</SelectItem>
                                    <SelectItem value="5">民营</SelectItem>
                                    <SelectItem value="6">国家机关</SelectItem>
                                    <SelectItem value="7">其他</SelectItem>
                                    <SelectItem value="8">股份制企业</SelectItem>
                                    <SelectItem value="9">上市公司</SelectItem>
                                    <SelectItem value="10">事业单位</SelectItem>
                                    <SelectItem value="11">银行</SelectItem>
                                    <SelectItem value="12">医院</SelectItem>
                                    <SelectItem value="13">学校/下级学院</SelectItem>
                                    <SelectItem value="14">律师事务所</SelectItem>
                                    <SelectItem value="15">社会团体</SelectItem>
                                    <SelectItem value="16">港澳台公司</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="space-y-2.5">
                                <Label className="text-sm font-medium text-gray-600">工作经验</Label>
                                <Select
                                  value={filters.experience || ""}
                                  onValueChange={(value) => setFilters({...filters, experience: value || undefined})}
                                >
                                  <SelectTrigger className="h-11 bg-gray-50 border-0 hover:bg-gray-100 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200">
                                    <SelectValue placeholder="选择工作经验" />
                                  </SelectTrigger>
                                  <SelectContent className="bg-white border border-gray-100 shadow-lg">
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

                          <div className="pt-6 border-t border-gray-100">
                            <Button 
                              onClick={handleResetFilters} 
                              variant="outline" 
                              className="w-full h-11 bg-gray-50 border-0 hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-all duration-200"
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
                      disabled={isSearching}
                    >
                      {isSearching ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          搜索中...
                        </>
                      ) : (
                        <>
                          搜索
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              {/* 搜索结果展示 */}
              {searchError && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600">
                  {searchError}
                </div>
              )}

              {searchResults.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-900">搜索结果</h2>
                  <div className="grid gap-4">
                    {searchResults.map((job, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <CardTitle className="flex items-center justify-between">
                            <span className="text-xl font-semibold text-gray-900">{job.position}</span>
                            <span className="text-lg font-bold text-blue-600">{job.salary}</span>
                          </CardTitle>
                          <CardDescription className="text-base text-gray-600">
                            {job.company}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-4 text-gray-600">
                            <div className="flex items-center">
                              <Building2 className="w-4 h-4 mr-2" />
                              <span>{job.company}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="w-4 h-4 mr-2" />
                              <span>{job.salary}</span>
                            </div>
                            <a
                              href={job.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-blue-600 hover:text-blue-700 transition-colors ml-auto"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              查看详情
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* 在搜索框下方添加当前筛选条件提示 */}
              {Object.values(filters).some(value => value !== undefined && value !== "" && value !== null) && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {filters.location && (
                    <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-50 text-gray-700 text-sm border border-gray-200 hover:bg-gray-100 transition-colors">
                      <span className="mr-2">地点:</span>
                      <span className="font-medium">{filters.location}</span>
                    </div>
                  )}
                  {filters.position && (
                    <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-50 text-gray-700 text-sm border border-gray-200 hover:bg-gray-100 transition-colors">
                      <span className="mr-2">职位:</span>
                      <span className="font-medium">{filters.position}</span>
                    </div>
                  )}
                  {filters.minSalary && (
                    <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-50 text-gray-700 text-sm border border-gray-200 hover:bg-gray-100 transition-colors">
                      <span className="mr-2">最低薪资:</span>
                      <span className="font-medium">{filters.minSalary}k</span>
                    </div>
                  )}
                  {filters.education && (
                    <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-50 text-gray-700 text-sm border border-gray-200 hover:bg-gray-100 transition-colors">
                      <span className="mr-2">学历:</span>
                      <span className="font-medium">{educationMap[filters.education]}</span>
                    </div>
                  )}
                  {filters.experience && (
                    <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-50 text-gray-700 text-sm border border-gray-200 hover:bg-gray-100 transition-colors">
                      <span className="mr-2">经验:</span>
                      <span className="font-medium">{experienceMap[filters.experience]}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
} 
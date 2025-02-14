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
  Info,
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
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

// 类型定义
type JobFilter = {
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
  description?: string;
}

interface SearchResponse {
  success: boolean;
  data: JobInfo[];
  message?: string;
  output?: string;
}

interface KeywordSearchResult {
  keyword: string;
  jobs: JobInfo[];
  isLoading: boolean;
  error?: string;
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
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [filters, setFilters] = useState<JobFilter>({
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
    type: 'info' | 'success' | 'error' | 'warning';
  }>>([]);
  const [searchMessage, setSearchMessage] = useState<string>("");
  const [loadingDescriptions, setLoadingDescriptions] = useState<{ [key: string]: boolean }>({});
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [conversionResult, setConversionResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [keywordResults, setKeywordResults] = useState<KeywordSearchResult[]>([]);
  const [isGeneratingKeywords, setIsGeneratingKeywords] = useState(false);
  const [generatedKeywords, setGeneratedKeywords] = useState<string[]>([]);
  const [keywordError, setKeywordError] = useState<string | null>(null);

  // 添加日志
  const addLog = (message: string, type: 'info' | 'success' | 'error' | 'warning' = 'info') => {
    // 只记录错误信息
    if (type === 'error') {
      setUploadLogs(prev => [...prev, {
        time: new Date(),
        message,
        type
      }]);
    }
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
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'text/plain': ['.txt']
    },
    multiple: false
  });

  const handleFileUpload = async (file: File) => {
    const validTypes = {
      'application/pdf': 'pdf',
      'application/msword': 'doc',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
      'text/plain': 'txt'
    };
    
    const fileType = validTypes[file.type as keyof typeof validTypes];
    if (!fileType) {
      toast.error('请上传 PDF、Word 或 TXT 格式的简历');
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

      setUploadProgress(20);

      let extractedText = '';
      
      // 根据文件类型调用不同的处理API
      if (fileType === 'pdf') {
        console.log('正在上传PDF文件...');
        const formData = new FormData();
        formData.append('file', file);
        formData.append('filePath', filePath);
        
        // 上传文件
        const uploadResponse = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (!uploadResponse.ok) {
          const errorData = await uploadResponse.json();
          throw new Error(errorData.error || '文件上传失败');
        }

        setUploadProgress(40);

        // 处理PDF文件
        const response = await fetch('/api/convert_pdf', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ filePath }),
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'PDF处理失败');
        }
        
        const result = await response.json();
        extractedText = result.markdown;
        
      } else if (fileType === 'doc' || fileType === 'docx') {
        console.log('开始处理Word文件...');
        const formData = new FormData();
        formData.append('file', file);
        
        const response = await fetch('/api/convert_word', {
          method: 'POST',
          body: formData,
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Word文件处理失败');
        }
        
        const result = await response.json();
        extractedText = result.text;

        console.log('Word文件处理成功，开始上传...');
        const uploadFormData = new FormData();
        uploadFormData.append('file', file);
        uploadFormData.append('filePath', filePath);
        
        const uploadResponse = await fetch('/api/upload', {
          method: 'POST',
          body: uploadFormData,
        });

        if (!uploadResponse.ok) {
          console.warn('文件存储失败，但内容已提取');
        }
        
      } else if (fileType === 'txt') {
        extractedText = await file.text();

        console.log('文本文件读取成功，开始上传...');
        const uploadFormData = new FormData();
        uploadFormData.append('file', file);
        uploadFormData.append('filePath', filePath);
        
        const uploadResponse = await fetch('/api/upload', {
          method: 'POST',
          body: uploadFormData,
        });

        if (!uploadResponse.ok) {
          console.warn('文件存储失败，但内容已提取');
        }
      }

      setUploadProgress(100);
      setUploadStatus('success');
      setConversionResult(extractedText);

      toast.success('文件处理成功！');

    } catch (error: any) {
      console.error('Upload error:', error);
      setUploadStatus('error');
      setError(error.message || '文件处理失败');
      addLog(error.message || '文件处理失败', 'error');
      toast.error(error.message || '文件处理失败，请重试');
      setConversionResult(null);
    } finally {
      setIsUploading(false);
      setUploadProgress(100);
    }
  };

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  // 修改搜索查询构建函数
  const buildSearchQuery = () => {
    let query = searchQuery;
    
    // 添加额外说明到查询
    if (additionalInfo) {
      query += `，${additionalInfo}`;
    }
    
    if (filters.position) {
      query += ` ${filters.position}`;
    }
    if (filters.minSalary) {
      query += ` ${filters.minSalary}以上工资`;
    }
    if (filters.education && educationMap[filters.education]) {
      query += ` ${educationMap[filters.education]}`;
    }
    if (filters.experience && experienceMap[filters.experience]) {
      query += ` ${experienceMap[filters.experience]}`;
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
    setSearchMessage("");

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
        throw new Error(data.message || '搜索失败');
      }

      // 设置搜索结果
      setSearchResults(data.data || []);
      
      // 设置 AI 建议消息
      if (data.output) {
        setSearchMessage(data.output);
      }

      // 加载职位描述
      if (data.data && data.data.length > 0) {
        data.data.forEach((job: JobInfo) => {
          setLoadingDescriptions(prev => ({ ...prev, [job.url]: true }));
          handleLoadDescription(job);
        });
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
      position: "",
      minSalary: undefined,
      education: undefined,
      companyType: undefined,
      experience: undefined,
      keywords: [],
    });
  };

  // 修改 handleLoadDescription 函数
  const handleLoadDescription = async (job: JobInfo) => {
    if (job.description || loadingDescriptions[job.url]) return;
    
    setLoadingDescriptions(prev => ({ ...prev, [job.url]: true }));
    let retries = 3;
    
    while (retries > 0) {
      try {
        const descResponse = await fetch('/api/jobs/description', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ url: job.url }),
        });

        if (descResponse.ok) {
          const descData = await descResponse.json();
          if (descData.success && descData.data.description) {
            // 更新搜索结果中的职位描述
            setSearchResults(prev => 
              prev.map(j => 
                j.url === job.url 
                  ? { ...j, description: descData.data.description }
                  : j
              )
            );

            // 同时更新关键词搜索结果中的职位描述
            setKeywordResults(prev => 
              prev.map(result => ({
                ...result,
                jobs: result.jobs.map(j =>
                  j.url === job.url
                    ? { ...j, description: descData.data.description }
                    : j
                )
              }))
            );
            break;
          }
        } else if (descResponse.status === 504) {
          await new Promise(resolve => setTimeout(resolve, 2000));
          retries--;
          continue;
        }
        
        throw new Error('获取岗位描述失败');
      } catch (error) {
        console.error('获取岗位描述失败:', error);
        retries--;
        if (retries === 0) {
          const errorMessage = '获取岗位描述失败，请稍后重试';
          // 更新搜索结果中的错误信息
          setSearchResults(prev => 
            prev.map(j => 
              j.url === job.url 
                ? { ...j, description: errorMessage }
                : j
            )
          );
          // 更新关键词搜索结果中的错误信息
          setKeywordResults(prev => 
            prev.map(result => ({
              ...result,
              jobs: result.jobs.map(j =>
                j.url === job.url
                  ? { ...j, description: errorMessage }
                  : j
              )
            }))
          );
        } else {
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      }
    }
    
    setLoadingDescriptions(prev => ({ ...prev, [job.url]: false }));
  };

  const handleKeywordSearch = async (keyword: string) => {
    setKeywordResults((prev: KeywordSearchResult[]) => [
      ...prev,
      { keyword, jobs: [], isLoading: true }
    ]);

    try {
      const response = await fetch('/api/jobs/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: keyword })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || '搜索失败');

      setKeywordResults((prev: KeywordSearchResult[]) => 
        prev.map(result => 
          result.keyword === keyword 
            ? { ...result, jobs: data.data || [], isLoading: false }
            : result
        )
      );

      // 加载职位描述
      if (data.data && data.data.length > 0) {
        data.data.forEach((job: JobInfo) => {
          setLoadingDescriptions(prev => ({ ...prev, [job.url]: true }));
          handleLoadDescription(job);
        });
      }
    } catch (error) {
      setKeywordResults(prev => 
        prev.map(result => 
          result.keyword === keyword 
            ? { ...result, isLoading: false, error: error instanceof Error ? error.message : '搜索失败' }
            : result
        )
      );
    }
  };

  const handleAutoSearch = async (resumeText: string) => {
    setIsGeneratingKeywords(true);
    setKeywordError(null);
    setKeywordResults([]);
    
    try {
      const keywordResponse = await fetch('/api/jobs/generate-keywords', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resumeText })
      });

      if (!keywordResponse.ok) {
        throw new Error('关键词生成失败');
      }

      const { keywords } = await keywordResponse.json();
      if (!keywords || keywords.length < 2) {
        throw new Error('未能生成有效的职位关键词');
      }

      setGeneratedKeywords(keywords);
      
      // 为每个关键词执行搜索，不再添加地址信息
      keywords.forEach((keyword: string) => {
        handleKeywordSearch(keyword);
      });
      
    } catch (error) {
      setKeywordError(error instanceof Error ? error.message : '自动搜索失败');
    } finally {
      setIsGeneratingKeywords(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* 顶部背景装饰 */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-50 to-transparent -z-10" />
      
      {/* 主要内容区域 */}
      <div className="relative max-w-6xl mx-auto px-4 pt-24 pb-16 sm:px-6 lg:px-8">
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
                      </div>
                    </div>
                  ) : resumeFile && uploadStatus === 'success' ? (
                    <div className="text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50">
                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">简历上传成功</h3>
                        <p className="text-sm text-gray-500 mt-1">{resumeFile.name}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button
                          className="mt-4 bg-blue-600 text-white hover:bg-blue-700"
                          onClick={(e) => {
                            e.stopPropagation();  // 阻止事件冒泡
                            if (conversionResult) {
                              handleAutoSearch(conversionResult);
                            }
                          }}
                          disabled={!conversionResult || isGeneratingKeywords}
                        >
                          {isGeneratingKeywords ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              正在分析...
                            </>
                          ) : (
                            <>
                              <Search className="w-4 h-4 mr-2" />
                              开始分析匹配
                            </>
                          )}
                        </Button>
                        <Button
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();  // 阻止事件冒泡
                            setResumeFile(null);
                            setUploadStatus('idle');
                            setUploadProgress(0);
                            setUploadLogs([]);
                            setConversionResult(null);
                          }}
                        >
                          重新上传
                        </Button>
                      </div>
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
                        <Button variant="outline" className="mt-4 bg-blue-600 text-white hover:bg-blue-700">
                          <Upload className="w-4 h-4 mr-2" />
                          选择文件
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

              {/* 显示上传状态和进度 */}
              {uploadStatus !== 'idle' && (
                <div className="space-y-4">
                  {/* 只在出错时显示错误信息 */}
                  {uploadLogs.map((log, index) => (
                    log.type === 'error' && (
                      <Alert key={index} variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{log.message}</AlertDescription>
                      </Alert>
                    )
                  ))}
                </div>
              )}

              {/* 显示分析结果 */}
              {isGeneratingKeywords && (
                <div className="mt-8">
                  <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm">
                    <Loader2 className="w-6 h-6 animate-spin text-blue-500 mr-3" />
                    <span className="text-gray-600">正在分析简历，生成匹配关键词...</span>
                  </div>
                </div>
              )}

              {keywordError && (
                <Alert variant="destructive" className="mt-8">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>分析失败</AlertTitle>
                  <AlertDescription>{keywordError}</AlertDescription>
                </Alert>
              )}

              {keywordResults.length > 0 && (
                <div className="mt-8 space-y-8">
                  {keywordResults.map((result, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-gray-900">
                          匹配方向 {index + 1}：{result.keyword}
                        </h3>
                        {result.isLoading ? (
                          <div className="flex items-center text-blue-600">
                            <Loader2 className="w-4 h-4 animate-spin mr-2" />
                            <span>搜索中...</span>
                          </div>
                        ) : (
                          <span className="text-gray-500">
                            找到 {result.jobs.length} 个匹配职位
                          </span>
                        )}
                      </div>

                      {result.error ? (
                        <Alert variant="destructive">
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>搜索失败</AlertTitle>
                          <AlertDescription>{result.error}</AlertDescription>
                        </Alert>
                      ) : (
                        <div className="grid gap-4">
                          {result.jobs.map((job, jobIndex) => (
                            <Card key={jobIndex} className="hover:shadow-lg transition-shadow duration-300">
                              <div className="flex flex-col md:flex-row">
                                {/* 左侧基本信息 */}
                                <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-gray-100">
                                  <div className="flex flex-col space-y-4">
                                    <div className="flex flex-col space-y-2">
                                      <h3 className="text-xl font-semibold text-gray-900 break-words line-clamp-2 hover:line-clamp-none">{job.position}</h3>
                                      <div className="flex items-center justify-between">
                                        <span className="text-base text-gray-600 break-words line-clamp-1 hover:line-clamp-none">{job.company}</span>
                                        <span className="text-lg font-bold text-blue-600 whitespace-nowrap ml-2">{job.salary}</span>
                                      </div>
                                    </div>
                                    
                                    <div className="space-y-3 pt-2">
                                      <div className="flex items-center text-gray-600">
                                        <Building2 className="w-4 h-4 min-w-[16px] mr-2" />
                                        <span className="break-words line-clamp-1 hover:line-clamp-none">{job.company}</span>
                                      </div>
                                      <div className="flex items-center text-gray-600">
                                        <MapPin className="w-4 h-4 min-w-[16px] mr-2" />
                                        <span className="break-words line-clamp-1 hover:line-clamp-none">{job.location}</span>
                                      </div>
                                    </div>

                                    <div className="flex items-center justify-end pt-2">
                                      <Button
                                        variant="link"
                                        className="text-blue-600 hover:text-blue-700"
                                        onClick={() => window.open(job.url, '_blank', 'noopener,noreferrer')}
                                      >
                                        <ExternalLink className="w-4 h-4 mr-1" />
                                        查看原文
                                      </Button>
                                    </div>
                                  </div>
                                </div>

                                {/* 右侧岗位描述 */}
                                <div className="flex-1 p-6">
                                  <div className="h-full">
                                    <h4 className="font-medium text-gray-900 mb-4">岗位描述</h4>
                                    <div className="relative min-h-[200px] max-h-[600px] overflow-y-auto">
                                      {loadingDescriptions[job.url] ? (
                                        <div className="flex flex-col items-center justify-center space-y-3 absolute inset-0">
                                          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                                          <p className="text-sm text-gray-500">正在加载岗位描述...</p>
                                        </div>
                                      ) : job.description ? (
                                        <div className="animate-fadeIn pr-4">
                                          {job.description.includes('获取岗位描述失败') ? (
                                            <div className="flex flex-col items-center justify-center space-y-3">
                                              <AlertCircle className="w-8 h-8 text-red-500" />
                                              <p className="text-sm text-red-500">{job.description}</p>
                                              <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handleLoadDescription(job)}
                                                className="mt-2"
                                              >
                                                重试加载
                                              </Button>
                                            </div>
                                          ) : (
                                            <div className="space-y-4">
                                              {job.description.split('\n').map((line, index) => {
                                                // 处理主标题
                                                if (line.match(/^(职位概述|岗位职责|任职要求|岗位要求|工作职责|薪资待遇)：?$/)) {
                                                  return (
                                                    <h4 key={index} className="text-base font-semibold text-gray-900 mt-4">
                                                      {line}
                                                    </h4>
                                                  );
                                                }
                                                // 处理数字编号的行
                                                if (line.match(/^\d+\./)) {
                                                  return (
                                                    <div key={index} className="flex items-start space-x-2">
                                                      <span className="text-blue-500 font-medium min-w-[20px]">{line.split('.')[0]}.</span>
                                                      <p className="text-sm text-gray-700 flex-1 break-words">{line.split('.').slice(1).join('.').trim()}</p>
                                                    </div>
                                                  );
                                                }
                                                // 处理标题行
                                                if (line.startsWith('- ')) {
                                                  return (
                                                    <div key={index} className="flex items-start space-x-2">
                                                      <span className="text-blue-500 mt-1.5 min-w-[12px]">•</span>
                                                      <p className="text-sm text-gray-700 flex-1 break-words">{line.substring(2)}</p>
                                                    </div>
                                                  );
                                                }
                                                // 处理子项
                                                if (line.startsWith('  - ')) {
                                                  return (
                                                    <div key={index} className="flex items-start space-x-2 ml-4">
                                                      <span className="text-gray-400 mt-1.5 min-w-[12px]">○</span>
                                                      <p className="text-sm text-gray-600 flex-1 break-words">{line.substring(4)}</p>
                                                    </div>
                                                  );
                                                }
                                                // 处理普通文本
                                                if (line.trim()) {
                                                  return (
                                                    <p key={index} className="text-sm text-gray-700 leading-relaxed break-words">
                                                      {line}
                                                    </p>
                                                  );
                                                }
                                                return null;
                                              })}
                                            </div>
                                          )}
                                        </div>
                                      ) : (
                                        <div className="flex items-center justify-center h-full text-gray-500">
                                          暂无岗位描述
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Card>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            // 自定义搜索区域
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="space-y-6">
                  {/* 添加地址和搜索输入区域 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-gray-600">职位关键词</Label>
                      <Input
                        placeholder="请输入职位关键词，如：律师"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="h-11 bg-gray-50 border-0 hover:bg-gray-100 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <Label className="text-sm font-medium text-gray-600 mb-2 block">补充说明（可选）</Label>
                    <textarea
                      placeholder="可以补充更多要求，例如：我想要一份6000以上的工作，我是本科学历..."
                      value={additionalInfo}
                      onChange={(e) => setAdditionalInfo(e.target.value)}
                      className="w-full h-32 px-4 py-3 text-base text-gray-900 resize-none rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
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
                <Alert variant="destructive" className="mt-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>搜索出错</AlertTitle>
                  <AlertDescription>{searchError}</AlertDescription>
                </Alert>
              )}

              {!searchError && searchMessage && searchResults.length === 0 && (
                <Alert className="mt-6 bg-blue-50 border-blue-200">
                  <Info className="h-4 w-4 text-blue-500" />
                  <AlertTitle className="text-blue-700">AI 智能建议</AlertTitle>
                  <AlertDescription className="text-blue-600 mt-2 whitespace-pre-line">
                    {searchMessage}
                  </AlertDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {filters.minSalary && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-blue-600 border-blue-200 hover:bg-blue-50"
                        onClick={() => {
                          setFilters(prev => ({
                            ...prev,
                            minSalary: undefined
                          }));
                          handleSearch();
                        }}
                      >
                        清除薪资筛选
                      </Button>
                    )}
                    {filters.education && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-blue-600 border-blue-200 hover:bg-blue-50"
                        onClick={() => {
                          setFilters(prev => ({
                            ...prev,
                            education: undefined
                          }));
                          handleSearch();
                        }}
                      >
                        清除学历筛选
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-blue-600 border-blue-200 hover:bg-blue-50"
                      onClick={() => {
                        handleResetFilters();
                        handleSearch();
                      }}
                    >
                      重置所有筛选
                    </Button>
                  </div>
                </Alert>
              )}

              {searchResults.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-900">搜索结果</h2>
                  <div className="grid gap-4">
                    {searchResults.map((job, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                        <div className="flex flex-col md:flex-row">
                          {/* 左侧基本信息 */}
                          <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-gray-100">
                            <div className="flex flex-col space-y-4">
                              <div className="flex flex-col space-y-2">
                                <h3 className="text-xl font-semibold text-gray-900 break-words line-clamp-2 hover:line-clamp-none">{job.position}</h3>
                                <div className="flex items-center justify-between">
                                  <span className="text-base text-gray-600 break-words line-clamp-1 hover:line-clamp-none">{job.company}</span>
                                  <span className="text-lg font-bold text-blue-600 whitespace-nowrap ml-2">{job.salary}</span>
                                </div>
                              </div>
                              
                              <div className="space-y-3 pt-2">
                                <div className="flex items-center text-gray-600">
                                  <Building2 className="w-4 h-4 min-w-[16px] mr-2" />
                                  <span className="break-words line-clamp-1 hover:line-clamp-none">{job.company}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                  <MapPin className="w-4 h-4 min-w-[16px] mr-2" />
                                  <span className="break-words line-clamp-1 hover:line-clamp-none">{job.location}</span>
                                </div>
                              </div>

                              <div className="flex items-center justify-end pt-2">
                                <Button
                                  variant="link"
                                  className="text-blue-600 hover:text-blue-700"
                                  onClick={() => window.open(job.url, '_blank', 'noopener,noreferrer')}
                                >
                                  <ExternalLink className="w-4 h-4 mr-1" />
                                  查看原文
                                </Button>
                              </div>
                            </div>
                          </div>

                          {/* 右侧岗位描述 */}
                          <div className="flex-1 p-6">
                            <div className="h-full">
                              <h4 className="font-medium text-gray-900 mb-4">岗位描述</h4>
                              <div className="relative min-h-[200px] max-h-[600px] overflow-y-auto">
                                {loadingDescriptions[job.url] ? (
                                  <div className="flex flex-col items-center justify-center space-y-3 absolute inset-0">
                                    <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                                    <p className="text-sm text-gray-500">正在加载岗位描述...</p>
                                  </div>
                                ) : job.description ? (
                                  <div className="animate-fadeIn pr-4">
                                    {job.description.includes('获取岗位描述失败') ? (
                                      <div className="flex flex-col items-center justify-center space-y-3">
                                        <AlertCircle className="w-8 h-8 text-red-500" />
                                        <p className="text-sm text-red-500">{job.description}</p>
                                        <Button
                                          variant="outline"
                                          size="sm"
                                          onClick={() => handleLoadDescription(job)}
                                          className="mt-2"
                                        >
                                          重试加载
                                        </Button>
                                      </div>
                                    ) : (
                                      <div className="space-y-4">
                                        {job.description.split('\n').map((line, index) => {
                                          // 处理主标题
                                          if (line.match(/^(职位概述|岗位职责|任职要求|岗位要求|工作职责|薪资待遇)：?$/)) {
                                            return (
                                              <h4 key={index} className="text-base font-semibold text-gray-900 mt-4">
                                                {line}
                                              </h4>
                                            );
                                          }
                                          // 处理数字编号的行
                                          if (line.match(/^\d+\./)) {
                                            return (
                                              <div key={index} className="flex items-start space-x-2">
                                                <span className="text-blue-500 font-medium min-w-[20px]">{line.split('.')[0]}.</span>
                                                <p className="text-sm text-gray-700 flex-1 break-words">{line.split('.').slice(1).join('.').trim()}</p>
                                              </div>
                                            );
                                          }
                                          // 处理标题行
                                          if (line.startsWith('- ')) {
                                            return (
                                              <div key={index} className="flex items-start space-x-2">
                                                <span className="text-blue-500 mt-1.5 min-w-[12px]">•</span>
                                                <p className="text-sm text-gray-700 flex-1 break-words">{line.substring(2)}</p>
                                              </div>
                                            );
                                          }
                                          // 处理子项
                                          if (line.startsWith('  - ')) {
                                            return (
                                              <div key={index} className="flex items-start space-x-2 ml-4">
                                                <span className="text-gray-400 mt-1.5 min-w-[12px]">○</span>
                                                <p className="text-sm text-gray-600 flex-1 break-words">{line.substring(4)}</p>
                                              </div>
                                            );
                                          }
                                          // 处理普通文本
                                          if (line.trim()) {
                                            return (
                                              <p key={index} className="text-sm text-gray-700 leading-relaxed break-words">
                                                {line}
                                              </p>
                                            );
                                          }
                                          return null;
                                        })}
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  <div className="flex items-center justify-center h-full text-gray-500">
                                    暂无岗位描述
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* 在搜索框下方添加当前筛选条件提示 */}
              {Object.values(filters).some(value => value !== undefined && value !== "" && value !== null) && (
                <div className="mt-4 flex flex-wrap gap-2">
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
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useResume } from "../context/ResumeContext";
import TemplateSelector from "../TemplateSelector";
import ResumePreview from "../components/ResumePreview";
import { Button } from "@/components/ui/button";
import type { TemplateId } from "../types/template";

export default function ChooseTemplatePage() {
  const router = useRouter();
  const { resumeData } = useResume();
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateId>("azurill");
  const [previewData, setPreviewData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // 如果没有简历数据，重定向到创建页面
  useEffect(() => {
    if (!resumeData) {
      router.push("/resume/create");
    }
  }, [resumeData, router]);

  // 获取预览数据
  const fetchPreview = async () => {
    if (!resumeData) return;

    setLoading(true);
    setErrorMessage("");
    
    try {
      const updatedResumeData = { 
        ...resumeData, 
        meta: { template: selectedTemplate } 
      };

      console.log('Sending preview request with data:', updatedResumeData);

      const res = await fetch("/api/resume/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeData: updatedResumeData })
      });

      console.log('Preview response status:', res.status);
      
      if (!res.ok) throw new Error("预览生成失败");
      
      const data = await res.json();
      console.log('Preview response data:', data);
      
      setPreviewData(data);
    } catch (error) {
      console.error("预览生成失败:", error);
      setErrorMessage("预览生成失败，请稍后重试");
    } finally {
      setLoading(false);
    }
  };

  // 当选择的模板变化时，重新获取预览
  useEffect(() => {
    if (resumeData) {
      fetchPreview();
    }
  }, [selectedTemplate, resumeData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            选择简历模板
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            选择一个适合你的模板，展现你的专业形象
          </p>
        </div>

        {/* 模板选择器 */}
        <div className="mb-12">
          <TemplateSelector 
            selectedTemplate={selectedTemplate}
            onSelectTemplate={setSelectedTemplate}
          />
        </div>

        {/* 预览区域 */}
        <div className="mt-8 rounded-xl bg-white p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            预览效果
          </h2>
          
          {errorMessage && (
            <div className="mt-4 rounded-md bg-red-50 p-4">
              <p className="text-sm text-red-700">{errorMessage}</p>
            </div>
          )}

          {loading && (
            <div className="mt-4 text-center p-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em]" />
              <p className="mt-2 text-sm text-gray-600">正在生成预览...</p>
            </div>
          )}

          {previewData && !loading && (
            <div className="mt-4">
              <ResumePreview data={previewData} />
            </div>
          )}
        </div>

        {/* 操作按钮 */}
        <div className="mt-12 flex flex-wrap gap-4 justify-center max-w-2xl mx-auto">
          <Button
            onClick={fetchPreview}
            disabled={loading}
            className="min-w-[120px] h-12 px-6 text-base font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all"
          >
            刷新预览
          </Button>
          
          <Button
            variant="outline"
            onClick={() => router.push("/resume/edit")}
            className="min-w-[120px] h-12 px-6 text-base font-medium border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg transition-all"
          >
            修改简历
          </Button>
          
          <Button
            onClick={() => router.push("/resume/generate")}
            className="min-w-[120px] h-12 px-6 text-base font-medium bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg transition-all"
          >
            生成简历
          </Button>
        </div>
      </div>
    </div>
  );
} 
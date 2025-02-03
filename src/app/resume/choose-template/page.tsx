"use client";

import React, { useState, useEffect } from "react";
import TemplateSelector from "@/app/resume/TemplateSelector";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useResume } from "@/app/resume/context/ResumeContext";

export default function ChooseTemplatePage() {
  const router = useRouter();
  const { resumeData } = useResume(); // 从上下文中获取已收集的数据

  const [selectedTemplate, setSelectedTemplate] = useState("default");
  const [previewData, setPreviewData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // 如果 resumeData 不存在，则重定向回创建页面
  useEffect(() => {
    if (!resumeData) {
      router.push("/resume/create");
    }
  }, [resumeData, router]);

  // 请求预览数据
  const fetchPreview = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      const updatedResumeData = { ...resumeData, meta: { template: selectedTemplate } };
      const res = await fetch("/api/resume/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeData: updatedResumeData })
      });
      const data = await res.json();
      setPreviewData(data);
    } catch (error) {
      console.error("预览生成失败", error);
      setErrorMessage("预览生成失败，请稍后重试。");
    } finally {
      setLoading(false);
    }
  };

  // 当 selectedTemplate 或 resumeData 变化时，重新请求预览
  useEffect(() => {
    if (resumeData) {
      fetchPreview();
    }
  }, [selectedTemplate, resumeData]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">选择简历模板</h1>
      <TemplateSelector selectedTemplate={selectedTemplate} onSelectTemplate={setSelectedTemplate} />
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">预览简历</h2>
        {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
        {loading && <p>加载中...</p>}
        {previewData && (
          <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm">
            {JSON.stringify(previewData, null, 2)}
          </pre>
        )}
      </div>
      
      <div className="mt-8 flex gap-4">
        <Button onClick={fetchPreview} disabled={loading}>刷新预览</Button>
        <Button variant="outline" onClick={() => router.push("/resume/edit")}>修改简历</Button>
        <Button onClick={() => router.push("/resume/generate")}>生成简历</Button>
      </div>
    </div>
  );
} 
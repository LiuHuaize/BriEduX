"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ResumePreview from "../components/ResumePreview";
import { Button } from "@/components/ui/button";
import { useResume } from "../context/ResumeContext";

export default function EditResumePage() {
  const { resumeData, setResumeData } = useResume();
  const [editorContent, setEditorContent] = useState<string>(
    JSON.stringify(resumeData, null, 2)
  );
  const [previewData, setPreviewData] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // 调用预览 API
  const fetchPreview = async () => {
    if (!editorContent) return;
    setLoading(true);
    setErrorMessage("");
    try {
      const res = await fetch("/api/resume/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeData: JSON.parse(editorContent) }),
      });
      if (!res.ok) throw new Error("预览生成失败");
      const data = await res.json();
      setPreviewData(data);
    } catch (error: any) {
      console.error("预览生成失败:", error);
      setErrorMessage(error.message || "预览生成失败，请稍后重试");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPreview();
  }, []);

  // 保存编辑结果到上下文
  const handleSave = () => {
    try {
      const parsed = JSON.parse(editorContent);
      setResumeData(parsed);
      router.push("/resume/choose-template");
    } catch (error) {
      setErrorMessage("JSON 格式不正确");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* 编辑器区域 */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-xl font-semibold mb-4">编辑简历数据 (JSON)</h2>
        <textarea
          value={editorContent}
          onChange={(e) => setEditorContent(e.target.value)}
          className="w-full h-[80vh] p-4 border rounded-lg font-mono text-sm"
        />
        {errorMessage && <p className="mt-2 text-sm text-red-600">{errorMessage}</p>}
        <div className="flex gap-4 mt-4">
          <Button onClick={fetchPreview} disabled={loading}>
            {loading ? "加载中..." : "刷新预览"}
          </Button>
          <Button onClick={handleSave} variant="outline">
            保存并前往选择模板
          </Button>
        </div>
      </div>

      {/* 预览区域 */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-xl font-semibold mb-4">预览效果</h2>
        {loading && (
          <div className="text-center p-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-r-transparent" />
            <p className="mt-2">正在生成预览...</p>
          </div>
        )}
        {previewData && !loading && <ResumePreview data={previewData} />}
      </div>
    </div>
  );
} 
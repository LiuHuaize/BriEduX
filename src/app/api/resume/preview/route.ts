import { NextResponse, NextRequest } from "next/server";
import transformToReactiveResume, { ResumeData } from "@/app/resume/create/transformToReactiveResume";

// 可选择使用 edge runtime，如果没有特殊需求，也可不设置
export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    // 从请求体中解析 resumeData
    const body = await req.json();
    const resumeData: ResumeData = body.resumeData;
    
    // 调用转换函数，将 ResumeData 转换为 Reactive Resume 格式
    const reactiveResume = transformToReactiveResume(resumeData);
    
    // 返回转换后的 JSON 数据
    return NextResponse.json(reactiveResume, { status: 200 });
  } catch (error) {
    console.error("生成预览时出错：", error);
    return NextResponse.json({ error: "生成预览时出错" }, { status: 500 });
  }
} 
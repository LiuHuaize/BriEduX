"use client";

import React from 'react';
import { TemplateId } from '../types/template';

// 示例：Azurlill 模板组件（可直接搬运 Reactive‑Resume‑main 中的相关代码）
const AzurillTemplate = ({ data }: { data: any }) => {
  const { basics, education, work, projects, skills } = data;

  return (
    <div className="bg-white p-8 shadow-lg rounded-lg max-w-4xl mx-auto border-t-4 border-blue-600">
      {/* 标题部分 */}
      <div className="mb-8 text-center border-b pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {basics.name || "姓名"}
        </h1>
        <div className="flex justify-center gap-4 text-gray-600">
          <span>{basics.phone || "电话"}</span>
          <span>{basics.email || "邮箱"}</span>
        </div>
      </div>

      {/* 教育背景 */}
      {education && education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">教育背景</h2>
          {education.map((edu: any, index: number) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-900">{edu.institution}</h3>
                <span className="text-gray-500">{edu.period}</span>
              </div>
              <p className="text-gray-600">{edu.area} · {edu.studyType}</p>
              {edu.details && <p className="text-gray-600 mt-1">{edu.details}</p>}
            </div>
          ))}
        </div>
      )}

      {/* 工作经历 */}
      {work && work.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">工作经历</h2>
          {work.map((job: any, index: number) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-900">{job.company}</h3>
                <span className="text-gray-500">{job.period}</span>
              </div>
              <p className="text-gray-600">{job.position}</p>
              {job.summary && (
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  {job.summary.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* 项目经验 */}
      {projects && projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">项目经验</h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-gray-900">{project.name}</h3>
                <span className="text-gray-500">{project.period}</span>
              </div>
              {project.description && (
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  {project.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* 技能 */}
      {skills && skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">技能</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// 默认模板样式（备用模板）
const DefaultTemplate = ({ data }: { data: any }) => {
  return (
    <div className="bg-gray-50 p-8 shadow rounded-lg max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900">{data.basics.name || "姓名"}</h1>
      <p className="text-gray-700">{data.basics.email || "邮箱"}</p>
      {/* 简单展示其他数据 */}
    </div>
  );
};

interface ResumePreviewProps {
  data: {
    basics: {
      name: string;
      phone: string;
      email: string;
    };
    work: Array<{
      company?: string;
      position?: string;
      period?: string;
      summary?: string[];
    }>;
    education: Array<{
      institution: string;
      area: string;
      studyType: string;
      period: string;
      details: string;
    }>;
    projects: Array<{
      name?: string;
      period?: string;
      description?: string[];
    }>;
    skills: Array<{ name: string }>;
    certifications: Array<{ title: string }>;
    meta: {
      template: TemplateId;
    };
  };
}

export default function ResumePreview({ data }: ResumePreviewProps) {
  // 根据 meta.template 决定使用哪一种模板预览
  const template = data.meta.template;
  const TemplateComponent = template === "azurill" ? AzurillTemplate : DefaultTemplate;
  return <TemplateComponent data={data} />;
} 
"use client";

import { templates } from "./config/templates";
import type { TemplateId } from "./types/template";

interface TemplateSelectorProps {
  selectedTemplate: TemplateId;
  onSelectTemplate: (templateId: TemplateId) => void;
}

export default function TemplateSelector({ selectedTemplate, onSelectTemplate }: TemplateSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {templates.map((template) => (
        <div
          key={template.id}
          onClick={() => onSelectTemplate(template.id)}
          className={`
            group relative overflow-hidden rounded-lg border-2 transition-all duration-200 bg-white
            ${selectedTemplate === template.id 
              ? 'border-blue-600 shadow-lg' 
              : 'border-gray-200 hover:border-blue-400 hover:shadow-md hover:scale-[1.02]'
            }
          `}
        >
          {/* 缩略图 */}
          <div className="aspect-[1.4/1] overflow-hidden bg-gray-50">
            <img 
              src={template.thumbnail} 
              alt={template.name}
              className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </div>

          {/* 模板信息 */}
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <h3 className="text-lg font-semibold text-white">
              {template.name}
            </h3>
            {template.description && (
              <p className="mt-1 text-sm text-gray-200">
                {template.description}
              </p>
            )}
          </div>

          {/* 选中状态标记 */}
          {selectedTemplate === template.id && (
            <div className="absolute right-2 top-2 rounded-full bg-blue-600 p-1.5 shadow-lg">
              <svg 
                className="h-4 w-4 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 
import React from "react";

interface Template {
  id: string;
  name: string;
  thumbnail: string;
}

const templates: Template[] = [
  { id: "default", name: "简单简约", thumbnail: "https://via.placeholder.com/400x300?text=简单简约" },
  { id: "professional", name: "专业商务", thumbnail: "https://via.placeholder.com/400x300?text=专业商务" },
  { id: "creative", name: "创意个性", thumbnail: "https://via.placeholder.com/400x300?text=创意个性" },
];

interface TemplateSelectorProps {
  selectedTemplate: string;
  onSelectTemplate: (templateId: string) => void;
}

export default function TemplateSelector({ selectedTemplate, onSelectTemplate }: TemplateSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {templates.map((template) => (
        <div
          key={template.id}
          onClick={() => onSelectTemplate(template.id)}
          className={`border rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 ${selectedTemplate === template.id ? "border-blue-500" : "border-gray-200"}`}
        >
          <img src={template.thumbnail} alt={template.name} className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold">{template.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
} 
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';
import type { SectionKey } from '@/types/resume';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SectionItemFieldsProps {
  sectionKey: SectionKey;
  item: any;
  onChange: (key: string, value: unknown) => void;
}

interface ValidationError {
  key: string;
  message: string;
}

export const SectionItemFields = ({ sectionKey, item, onChange }: SectionItemFieldsProps) => {
  const [errors, setErrors] = useState<ValidationError[]>([]);

  const validateField = (key: string, value: unknown): string | null => {
    if (typeof value === 'string' && value.trim() === '') {
      switch (key) {
        case 'company':
          return '请输入公司名称';
        case 'position':
          return '请输入职位名称';
        case 'institution':
          return '请输入学校名称';
        case 'studyType':
          return '请输入学历类型';
        case 'name':
          return '请输入名称';
        case 'network':
          return '请输入社交平台名称';
        case 'username':
          return '请输入用户名';
        default:
          return null;
      }
    }

    if (key === 'email' && typeof value === 'string') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return '请输入有效的邮箱地址';
      }
    }

    if (key === 'url.href' && typeof value === 'string' && value.trim() !== '') {
      try {
        new URL(value);
      } catch {
        return '请输入有效的网址';
      }
    }

    return null;
  };

  const handleChange = (key: string, value: unknown) => {
    const error = validateField(key, value);
    
    setErrors((prev) => {
      const filtered = prev.filter((e) => e.key !== key);
      if (error) {
        return [...filtered, { key, message: error }];
      }
      return filtered;
    });

    onChange(key, value);
  };

  const getError = (key: string) => {
    return errors.find((e) => e.key === key)?.message;
  };

  const handleKeywordsChange = (keywords: string[]) => {
    handleChange('keywords', keywords);
  };

  const addKeyword = () => {
    const keywords = [...(item.keywords || []), ''];
    handleKeywordsChange(keywords);
  };

  const removeKeyword = (index: number) => {
    const keywords = [...(item.keywords || [])];
    keywords.splice(index, 1);
    handleKeywordsChange(keywords);
  };

  const updateKeyword = (index: number, value: string) => {
    const keywords = [...(item.keywords || [])];
    keywords[index] = value;
    handleKeywordsChange(keywords);
  };

  const renderField = (label: string, key: string, type: 'input' | 'textarea' = 'input') => {
    const error = getError(key);
    const commonProps = {
      value: key.includes('.') ? item[key.split('.')[0]][key.split('.')[1]] : item[key],
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        handleChange(key, e.target.value),
      className: cn(error && 'border-red-500'),
    };

    return (
      <div className="space-y-2">
        <Label>{label}</Label>
        {type === 'input' ? (
          <Input {...commonProps} placeholder={`输入${label}`} />
        ) : (
          <Textarea {...commonProps} placeholder={`输入${label}`} rows={4} />
        )}
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  };

  switch (sectionKey) {
    case 'experience':
      return (
        <>
          {renderField('公司', 'company')}
          {renderField('职位', 'position')}
          {renderField('地点', 'location')}
          {renderField('日期', 'date')}
          {renderField('描述', 'summary', 'textarea')}
          {renderField('网站', 'url.href')}
        </>
      );

    case 'education':
      return (
        <>
          {renderField('学校', 'institution')}
          {renderField('学历', 'studyType')}
          {renderField('专业', 'area')}
          {renderField('成绩', 'score')}
          {renderField('日期', 'date')}
          {renderField('描述', 'summary', 'textarea')}
          {renderField('网站', 'url.href')}
        </>
      );

    case 'skills':
      return (
        <>
          {renderField('技能名称', 'name')}
          {renderField('熟练程度', 'description')}

          <div className="space-y-2">
            <Label>技能等级 ({item.level})</Label>
            <Slider
              value={[item.level]}
              onValueChange={([value]) => handleChange('level', value)}
              min={0}
              max={5}
              step={1}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>关键词</Label>
              <Button variant="outline" size="sm" onClick={addKeyword}>
                <Plus className="w-4 h-4 mr-2" />
                添加关键词
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {item.keywords.map((keyword: string, index: number) => (
                <Badge key={index} variant="secondary" className="gap-2">
                  <Input
                    value={keyword}
                    onChange={(e) => updateKeyword(index, e.target.value)}
                    className="h-5 w-24 bg-transparent p-0"
                  />
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => removeKeyword(index)}
                  />
                </Badge>
              ))}
            </div>
          </div>
        </>
      );

    case 'projects':
      return (
        <>
          {renderField('项目名称', 'name')}
          {renderField('角色', 'description')}
          {renderField('日期', 'date')}
          {renderField('描述', 'summary', 'textarea')}

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>关键词</Label>
              <Button variant="outline" size="sm" onClick={addKeyword}>
                <Plus className="w-4 h-4 mr-2" />
                添加关键词
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {item.keywords.map((keyword: string, index: number) => (
                <Badge key={index} variant="secondary" className="gap-2">
                  <Input
                    value={keyword}
                    onChange={(e) => updateKeyword(index, e.target.value)}
                    className="h-5 w-24 bg-transparent p-0"
                  />
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => removeKeyword(index)}
                  />
                </Badge>
              ))}
            </div>
          </div>

          {renderField('网站', 'url.href')}
        </>
      );

    case 'certifications':
      return (
        <>
          {renderField('证书名称', 'name')}
          {renderField('发证机构', 'issuer')}
          {renderField('日期', 'date')}
          {renderField('描述', 'summary', 'textarea')}
          {renderField('网站', 'url.href')}
        </>
      );

    case 'languages':
      return (
        <>
          {renderField('语言名称', 'name')}
          {renderField('熟练程度', 'description')}

          <div className="space-y-2">
            <Label>语言等级 ({item.level})</Label>
            <Slider
              value={[item.level]}
              onValueChange={([value]) => handleChange('level', value)}
              min={0}
              max={5}
              step={1}
            />
          </div>
        </>
      );

    case 'interests':
      return (
        <>
          {renderField('兴趣名称', 'name')}

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>关键词</Label>
              <Button variant="outline" size="sm" onClick={addKeyword}>
                <Plus className="w-4 h-4 mr-2" />
                添加关键词
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {item.keywords.map((keyword: string, index: number) => (
                <Badge key={index} variant="secondary" className="gap-2">
                  <Input
                    value={keyword}
                    onChange={(e) => updateKeyword(index, e.target.value)}
                    className="h-5 w-24 bg-transparent p-0"
                  />
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => removeKeyword(index)}
                  />
                </Badge>
              ))}
            </div>
          </div>
        </>
      );

    case 'profiles':
      return (
        <>
          {renderField('社交平台', 'network')}
          {renderField('用户名', 'username')}
          {renderField('图标', 'icon')}
          {renderField('链接', 'url.href')}
        </>
      );

    default:
      return null;
  }
}; 
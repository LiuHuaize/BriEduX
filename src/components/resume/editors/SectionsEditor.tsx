import { useResumeStore } from '@/lib/stores/resume';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash2, ChevronUp, ChevronDown, Eye, EyeOff } from 'lucide-react';
import type { SectionKey } from '@/types/resume';
import { SectionItemFields } from './SectionItemFields';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useState } from 'react';
import { useErrorStore } from '@/lib/stores/error';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const SECTION_KEYS: SectionKey[] = [
  'summary',
  'experience',
  'education',
  'projects',
  'skills',
  'certifications',
  'awards',
  'volunteer',
  'publications',
  'references',
  'languages',
  'interests',
  'profiles'
];

const SECTION_DESCRIPTIONS = {
  summary: '概述你的职业经历和目标',
  experience: '列出你的工作经历',
  education: '列出你的教育背景',
  projects: '展示你参与过的项目',
  skills: '列出你的技能和专长',
  certifications: '列出你获得的证书',
  awards: '列出你获得的奖项',
  volunteer: '列出你的志愿者经历',
  publications: '列出你的出版物',
  references: '列出推荐人',
  languages: '列出你掌握的语言',
  interests: '列出你的兴趣爱好',
  profiles: '列出你的社交媒体账号'
};

export const SectionsEditor = () => {
  const { resume, setValue, addItem, removeItem } = useResumeStore();
  const { setError } = useErrorStore();
  const [deleteDialog, setDeleteDialog] = useState<{ sectionId: string; itemId: string } | null>(null);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  if (!resume) return null;

  const { sections } = resume.data;

  const handleSectionChange = (sectionId: string, key: string, value: unknown) => {
    setValue(`sections.${sectionId}.${key}`, value);
  };

  const handleItemChange = (sectionId: string, itemId: string, key: string, value: unknown) => {
    setValue(`sections.${sectionId}.items.${itemId}.${key}`, value);
  };

  const handleAddItem = (sectionId: string) => {
    addItem(sectionId);
  };

  const handleRemoveItem = (sectionId: string, itemId: string) => {
    setDeleteDialog({ sectionId, itemId });
  };

  const confirmDelete = () => {
    if (deleteDialog) {
      removeItem(deleteDialog.sectionId, deleteDialog.itemId);
      setDeleteDialog(null);
    }
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const moveItem = (sectionId: string, fromIndex: number, toIndex: number) => {
    try {
      const items = [...sections[sectionId].items];
      const [removed] = items.splice(fromIndex, 1);
      items.splice(toIndex, 0, removed);
      setValue(`sections.${sectionId}.items`, items);
      setError({
        type: 'success',
        message: '项目顺序已更新',
      });
    } catch (error) {
      setError({
        type: 'error',
        message: '更新项目顺序时出错',
      });
    }
  };

  return (
    <TooltipProvider>
      <Accordion
        type="multiple"
        value={expandedSections}
        onValueChange={setExpandedSections}
        className="space-y-4"
      >
        {SECTION_KEYS.map((sectionKey) => {
          const section = sections[sectionKey];
          if (!section) return null;

          return (
            <AccordionItem key={sectionKey} value={sectionKey} className="border rounded-lg">
              <AccordionTrigger className="px-4 hover:no-underline">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <span>{section.name}</span>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="cursor-help">
                          <span className="text-xs text-gray-500">ℹ️</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{SECTION_DESCRIPTIONS[sectionKey]}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={section.visible}
                      onCheckedChange={(checked) => handleSectionChange(sectionKey, 'visible', checked)}
                      onClick={(e) => e.stopPropagation()}
                    />
                    {section.visible ? (
                      <Eye className="h-4 w-4 text-gray-500" />
                    ) : (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    )}
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="p-4 pt-2 space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>名称</Label>
                    <Input
                      value={section.name}
                      onChange={(e) => handleSectionChange(sectionKey, 'name', e.target.value)}
                      placeholder="输入板块名称"
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {sectionKey === 'summary' && (
                    <div className="space-y-2">
                      <Label>内容</Label>
                      <Textarea
                        value={section.content}
                        onChange={(e) => handleSectionChange(sectionKey, 'content', e.target.value)}
                        placeholder="输入概述内容"
                        rows={4}
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  )}

                  {section.items && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label>项目列表</Label>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleAddItem(sectionKey)}
                          className="transition-all duration-200 hover:bg-primary hover:text-white"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          添加项目
                        </Button>
                      </div>

                      {section.items.map((item, index) => (
                        <div
                          key={item.id}
                          className="space-y-4 p-4 border rounded-lg transition-all duration-200 hover:border-primary"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Switch
                                checked={item.visible}
                                onCheckedChange={(checked) =>
                                  handleItemChange(sectionKey, item.id, 'visible', checked)
                                }
                              />
                              {item.visible ? (
                                <Eye className="h-4 w-4 text-gray-500" />
                              ) : (
                                <EyeOff className="h-4 w-4 text-gray-500" />
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => index > 0 && moveItem(sectionKey, index, index - 1)}
                                disabled={index === 0}
                                className="transition-all duration-200 hover:bg-gray-100"
                              >
                                <ChevronUp className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                  index < section.items.length - 1 &&
                                  moveItem(sectionKey, index, index + 1)
                                }
                                disabled={index === section.items.length - 1}
                                className="transition-all duration-200 hover:bg-gray-100"
                              >
                                <ChevronDown className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleRemoveItem(sectionKey, item.id)}
                                className="transition-all duration-200 hover:bg-red-100 hover:text-red-500"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>

                          <SectionItemFields
                            sectionKey={sectionKey}
                            item={item}
                            onChange={(key, value) => handleItemChange(sectionKey, item.id, key, value)}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      <AlertDialog open={!!deleteDialog} onOpenChange={() => setDeleteDialog(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>确认删除</AlertDialogTitle>
            <AlertDialogDescription>
              你确定要删除这个项目吗？此操作无法撤销。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>取消</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-red-500 hover:bg-red-600 focus:ring-red-500"
            >
              删除
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </TooltipProvider>
  );
}; 
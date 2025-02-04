import { useResumeStore } from '@/lib/stores/resume';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const CustomEditor = () => {
  const { resume, setValue, addSection, removeSection } = useResumeStore();

  if (!resume) return null;

  const { sections } = resume.data;
  const customSections = sections.custom;

  const handleAddCustomSection = () => {
    addSection();
  };

  const handleRemoveCustomSection = (sectionId: string) => {
    removeSection(`custom.${sectionId}`);
  };

  const handleSectionChange = (sectionId: string, key: string, value: unknown) => {
    setValue(`sections.custom.${sectionId}.${key}`, value);
  };

  const handleItemChange = (sectionId: string, itemId: string, key: string, value: unknown) => {
    setValue(`sections.custom.${sectionId}.items.${itemId}.${key}`, value);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">自定义板块</h3>
        <Button variant="outline" size="sm" onClick={handleAddCustomSection}>
          <Plus className="w-4 h-4 mr-2" />
          添加板块
        </Button>
      </div>

      <Accordion type="multiple" className="space-y-4">
        {Object.entries(customSections).map(([sectionId, section]) => (
          <AccordionItem key={sectionId} value={sectionId} className="border rounded-lg">
            <AccordionTrigger className="px-4">
              <div className="flex items-center justify-between w-full">
                <span>{section.name}</span>
                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  <Switch
                    checked={section.visible}
                    onCheckedChange={(checked) => handleSectionChange(sectionId, 'visible', checked)}
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveCustomSection(sectionId)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="p-4 pt-2 space-y-4">
              {/* 板块设置 */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>名称</Label>
                  <Input
                    value={section.name}
                    onChange={(e) => handleSectionChange(sectionId, 'name', e.target.value)}
                    placeholder="输入板块名称"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>项目列表</Label>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        // TODO: 实现添加自定义项目功能
                      }}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      添加项目
                    </Button>
                  </div>

                  {section.items.map((item) => (
                    <div key={item.id} className="space-y-4 p-4 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <Switch
                          checked={item.visible}
                          onCheckedChange={(checked) =>
                            handleItemChange(sectionId, item.id, 'visible', checked)
                          }
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            // TODO: 实现删除自定义项目功能
                          }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="space-y-2">
                        <Label>名称</Label>
                        <Input
                          value={item.name}
                          onChange={(e) => handleItemChange(sectionId, item.id, 'name', e.target.value)}
                          placeholder="输入项目名称"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>描述</Label>
                        <Input
                          value={item.description}
                          onChange={(e) =>
                            handleItemChange(sectionId, item.id, 'description', e.target.value)
                          }
                          placeholder="输入项目描述"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>内容</Label>
                        <Textarea
                          value={item.summary}
                          onChange={(e) =>
                            handleItemChange(sectionId, item.id, 'summary', e.target.value)
                          }
                          placeholder="输入项目内容"
                          rows={4}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}; 
import { useResumeStore } from '@/lib/stores/resume';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

// 导入编辑器组件
import { BasicsEditor } from './editors/BasicsEditor';
import { SectionsEditor } from './editors/SectionsEditor';
import { CustomEditor } from './editors/CustomEditor';

interface LeftPanelProps {
  className?: string;
}

export const LeftPanel = ({ className }: LeftPanelProps) => {
  const resume = useResumeStore((state) => state.resume);

  if (!resume) return null;

  return (
    <div className={cn('flex h-full flex-col', className)}>
      <Tabs defaultValue="basics" className="flex-1">
        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            value="basics"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
          >
            基本信息
          </TabsTrigger>
          <TabsTrigger
            value="sections"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
          >
            简历板块
          </TabsTrigger>
          <TabsTrigger
            value="custom"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
          >
            自定义
          </TabsTrigger>
        </TabsList>

        <ScrollArea className="flex-1">
          <TabsContent value="basics" className="m-0 p-4">
            <BasicsEditor />
          </TabsContent>

          <TabsContent value="sections" className="m-0 p-4">
            <SectionsEditor />
          </TabsContent>

          <TabsContent value="custom" className="m-0 p-4">
            <CustomEditor />
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  );
}; 
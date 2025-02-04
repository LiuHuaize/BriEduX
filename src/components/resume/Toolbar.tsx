import { useEditorStore } from '@/lib/stores/editor';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Download, Eye, Share2 } from 'lucide-react';

interface ToolbarProps {
  className?: string;
}

export const Toolbar = ({ className }: ToolbarProps) => {
  const { 
    sheet: { left: leftSheet, right: rightSheet },
    toggle 
  } = useEditorStore();

  return (
    <div className={cn('flex items-center justify-between p-2', className)}>
      {/* 左侧按钮组 */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => toggle('left')}
          className={cn(
            'transition-transform duration-200',
            leftSheet.open && 'rotate-180'
          )}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>

      {/* 中间按钮组 */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Eye className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Share2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Download className="h-4 w-4" />
        </Button>
      </div>

      {/* 右侧按钮组 */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => toggle('right')}
          className={cn(
            'transition-transform duration-200',
            rightSheet.open && '-rotate-180'
          )}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}; 
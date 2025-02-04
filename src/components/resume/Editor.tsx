import { useEffect } from 'react';
import { useEditorStore } from '@/lib/stores/editor';
import { cn } from '@/lib/utils';
import { Preview } from './Preview';
import { Toolbar } from './Toolbar';
import { LeftPanel } from './LeftPanel';

interface EditorProps {
  className?: string;
}

export const Editor = ({ className }: EditorProps) => {
  const { 
    frame,
    panel: { left, right },
    sheet: { left: leftSheet, right: rightSheet }
  } = useEditorStore();

  // 处理拖拽面板大小
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (left.handle.isDragging) {
        const newSize = e.clientX;
        left.setSize(newSize);
      }

      if (right.handle.isDragging) {
        const newSize = window.innerWidth - e.clientX;
        right.setSize(newSize);
      }
    };

    const handleMouseUp = () => {
      left.handle.setDragging(false);
      right.handle.setDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [left, right]);

  return (
    <main className={cn('relative flex h-screen w-screen flex-col overflow-hidden', className)}>
      {/* 工具栏 */}
      <Toolbar className="border-b" />

      <div className="relative flex-1">
        {/* 左侧面板 */}
        <div
          className={cn(
            'absolute left-0 top-0 z-10 h-full bg-background',
            'transition-[width] duration-200 ease-in-out',
            leftSheet.open ? 'w-[320px]' : 'w-0'
          )}
          style={{ width: left.size || (leftSheet.open ? 320 : 0) }}
        >
          <div className="h-full w-full overflow-y-auto">
            <LeftPanel />
          </div>

          {/* 左侧拖拽手柄 */}
          <div
            className={cn(
              'absolute right-0 top-0 h-full w-1 cursor-col-resize',
              'hover:bg-primary/20',
              left.handle.isDragging && 'bg-primary'
            )}
            onMouseDown={() => left.handle.setDragging(true)}
          />
        </div>

        {/* 预览区域 */}
        <div className="flex-1 overflow-hidden">
          <Preview mode="builder" />
        </div>

        {/* 右侧面板 */}
        <div
          className={cn(
            'absolute right-0 top-0 z-10 h-full bg-background',
            'transition-[width] duration-200 ease-in-out',
            rightSheet.open ? 'w-[320px]' : 'w-0'
          )}
          style={{ width: right.size || (rightSheet.open ? 320 : 0) }}
        >
          <div className="h-full w-full overflow-y-auto p-4">
            {/* 右侧面板内容 */}
          </div>

          {/* 右侧拖拽手柄 */}
          <div
            className={cn(
              'absolute left-0 top-0 h-full w-1 cursor-col-resize',
              'hover:bg-primary/20',
              right.handle.isDragging && 'bg-primary'
            )}
            onMouseDown={() => right.handle.setDragging(true)}
          />
        </div>
      </div>
    </main>
  );
}; 
import { cn } from '@/lib/utils';

// 将 A4 纸的尺寸转换为像素 (1mm = 3.78px)
export const MM_TO_PX = 3.78;
export const PAGE_SIZES = {
  a4: {
    width: 210,  // A4 宽度（毫米）
    height: 297, // A4 高度（毫米）
  },
};

interface PageProps {
  mode?: 'preview' | 'builder';
  pageNumber: number;
  children: React.ReactNode;
}

export const Page = ({ mode = 'preview', pageNumber, children }: PageProps) => {
  return (
    <div
      data-page={pageNumber}
      className={cn(
        'relative bg-white text-black',
        mode === 'builder' && 'shadow-2xl'
      )}
      style={{
        width: `${PAGE_SIZES.a4.width * MM_TO_PX}px`,
        minHeight: `${PAGE_SIZES.a4.height * MM_TO_PX}px`,
      }}
    >
      {mode === 'builder' && (
        <div className="absolute -top-7 left-0 font-bold">
          Page {pageNumber}
        </div>
      )}

      {children}

      {mode === 'builder' && (
        <div
          className="absolute inset-x-0 border-b border-dashed border-gray-300"
          style={{
            top: `${PAGE_SIZES.a4.height * MM_TO_PX}px`,
          }}
        />
      )}
    </div>
  );
}; 
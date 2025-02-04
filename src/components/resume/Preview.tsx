import { useEffect, useRef } from 'react';
import { useResumeStore } from '@/lib/stores/resume';
import { useEditorStore } from '@/lib/stores/editor';
import { Page } from './Page';
import { syncResumeToArtboard } from '@/lib/services/resume';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { AnimatePresence, motion } from 'framer-motion';
import { PAGE_SIZES } from './Page';

// Import all templates
import { BasicTemplate } from './templates/Basic';
import { OnyxTemplate } from './templates/Onyx';
import { GlalieTemplate } from './templates/Glalie';
import { LeafishTemplate } from './templates/Leafish';
import { AzurillTemplate } from './templates/Azurill';
import { GengarTemplate } from './templates/Gengar';
import { PikachuTemplate } from './templates/Pikachu';
import { KakunaTemplate } from './templates/Kakuna';

interface PreviewProps {
  mode?: 'preview' | 'builder';
}

const getTemplate = (templateId: string) => {
  switch (templateId) {
    case 'basic':
      return BasicTemplate;
    case 'onyx':
      return OnyxTemplate;
    case 'glalie':
      return GlalieTemplate;
    case 'leafish':
      return LeafishTemplate;
    case 'azurill':
      return AzurillTemplate;
    case 'gengar':
      return GengarTemplate;
    case 'pikachu':
      return PikachuTemplate;
    case 'kakuna':
      return KakunaTemplate;
    default:
      return BasicTemplate;
  }
};

export const Preview = ({ mode = 'preview' }: PreviewProps) => {
  const transformRef = useRef(null);
  const resume = useResumeStore((state) => state.resume);
  const frameRef = useEditorStore((state) => state.frame.ref);

  // 同步数据到预览 iframe
  useEffect(() => {
    if (resume && frameRef) {
      syncResumeToArtboard(frameRef, resume);
    }
  }, [resume, frameRef]);

  if (!resume) return null;

  const { layout, template } = resume.data.metadata;
  const Template = getTemplate(template);

  if (mode === 'preview') {
    return (
      <>
        {layout.map((columns, pageIndex) => (
          <Page key={pageIndex} mode="preview" pageNumber={pageIndex + 1}>
            <Template
              isFirstPage={pageIndex === 0}
              columns={columns}
            />
          </Page>
        ))}
      </>
    );
  }

  return (
    <TransformWrapper
      ref={transformRef}
      centerOnInit
      maxScale={2}
      minScale={0.4}
      initialScale={0.8}
      limitToBounds={false}
    >
      <TransformComponent
        wrapperClass="!w-screen !h-screen"
        contentClass="grid items-start justify-center space-x-12 pointer-events-none"
        contentStyle={{
          width: `${layout.length * (PAGE_SIZES.a4.width * 3.78 + 42)}px`,
          gridTemplateColumns: `repeat(${layout.length}, 1fr)`,
        }}
      >
        <AnimatePresence>
          {layout.map((columns, pageIndex) => (
            <motion.div
              key={pageIndex}
              layout
              initial={{ opacity: 0, x: -200, y: 0 }}
              animate={{ opacity: 1, x: 0, transition: { delay: pageIndex * 0.3 } }}
              exit={{ opacity: 0, x: -200 }}
            >
              <Page mode="builder" pageNumber={pageIndex + 1}>
                <Template
                  isFirstPage={pageIndex === 0}
                  columns={columns}
                />
              </Page>
            </motion.div>
          ))}
        </AnimatePresence>
      </TransformComponent>
    </TransformWrapper>
  );
}; 
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type Sheet = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

type PanelHandle = {
  isDragging: boolean;
  setDragging: (dragging: boolean) => void;
};

type Panel = {
  size: number;
  setSize: (size: number) => void;
  handle: PanelHandle;
};

type EditorState = {
  // iframe 引用
  frame: {
    ref: HTMLIFrameElement | null;
    setRef: (ref: HTMLIFrameElement | null) => void;
  };
  
  // 侧边栏状态
  sheet: {
    left: Sheet;
    right: Sheet;
  };
  
  // 面板状态
  panel: {
    left: Panel;
    right: Panel;
  };
};

type EditorActions = {
  toggle: (side: 'left' | 'right') => void;
};

export const useEditorStore = create<EditorState & EditorActions>()(
  immer((set) => ({
    // iframe 引用
    frame: {
      ref: null,
      setRef: (ref) => {
        set((state) => {
          state.frame.ref = ref;
        });
      },
    },

    // 侧边栏状态
    sheet: {
      left: {
        open: false,
        setOpen: (open) => {
          set((state) => {
            state.sheet.left.open = open;
          });
        },
      },
      right: {
        open: false,
        setOpen: (open) => {
          set((state) => {
            state.sheet.right.open = open;
          });
        },
      },
    },

    // 面板状态
    panel: {
      left: {
        size: 0,
        setSize: (size) => {
          set((state) => {
            state.panel.left.size = size;
          });
        },
        handle: {
          isDragging: false,
          setDragging: (dragging) => {
            set((state) => {
              state.panel.left.handle.isDragging = dragging;
            });
          },
        },
      },
      right: {
        size: 0,
        setSize: (size) => {
          set((state) => {
            state.panel.right.size = size;
          });
        },
        handle: {
          isDragging: false,
          setDragging: (dragging) => {
            set((state) => {
              state.panel.right.handle.isDragging = dragging;
            });
          },
        },
      },
    },

    // 切换侧边栏
    toggle: (side) => {
      set((state) => {
        state.sheet[side].open = !state.sheet[side].open;
      });
    },
  })),
); 
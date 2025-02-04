import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export interface ErrorState {
  message: string | null;
  type: 'error' | 'warning' | 'success' | 'info' | null;
}

interface ErrorStore {
  error: ErrorState;
  setError: (error: ErrorState) => void;
  clearError: () => void;
}

export const useErrorStore = create<ErrorStore>()(
  devtools(
    immer((set) => ({
      error: {
        message: null,
        type: null,
      },

      setError: (error) => {
        set((state) => {
          state.error = error;
        });

        // 3秒后自动清除错误
        setTimeout(() => {
          set((state) => {
            state.error = {
              message: null,
              type: null,
            };
          });
        }, 3000);
      },

      clearError: () => {
        set((state) => {
          state.error = {
            message: null,
            type: null,
          };
        });
      },
    }))
  )
); 
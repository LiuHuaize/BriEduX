import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import _set from 'lodash.set';
import type { ResumeDto } from '@/types/resume';
import { createId } from '@paralleldrive/cuid2';
import { useErrorStore } from './error';

type ResumeStore = {
  resume: ResumeDto | null;
  isDirty: boolean;
  isLoading: boolean;

  // Actions
  setResume: (resume: ResumeDto) => void;
  resetResume: () => void;
  updateResume: (resume: Partial<ResumeDto>) => void;
  setValue: (path: string, value: unknown) => void;
  setLoading: (isLoading: boolean) => void;

  // Item Actions
  addItem: (sectionId: string) => void;
  removeItem: (sectionId: string, itemId: string) => void;
};

const getDefaultItem = (sectionId: string) => {
  const baseItem = {
    id: createId(),
    visible: true,
  };

  switch (sectionId) {
    case 'experience':
      return {
        ...baseItem,
        company: '',
        position: '',
        location: '',
        date: '',
        summary: '',
        url: { href: '' },
      };

    case 'education':
      return {
        ...baseItem,
        institution: '',
        studyType: '',
        area: '',
        score: '',
        date: '',
        summary: '',
        url: { href: '' },
      };

    case 'skills':
      return {
        ...baseItem,
        name: '',
        description: '',
        level: 1,
        keywords: [],
      };

    case 'projects':
      return {
        ...baseItem,
        name: '',
        description: '',
        date: '',
        summary: '',
        keywords: [],
        url: { href: '' },
      };

    case 'certifications':
      return {
        ...baseItem,
        name: '',
        issuer: '',
        date: '',
        summary: '',
        url: { href: '' },
      };

    case 'languages':
      return {
        ...baseItem,
        name: '',
        description: '',
        level: 1,
      };

    case 'interests':
      return {
        ...baseItem,
        name: '',
        keywords: [],
      };

    case 'profiles':
      return {
        ...baseItem,
        network: '',
        username: '',
        icon: '',
        url: { href: '' },
      };

    default:
      return baseItem;
  }
};

export const useResumeStore = create<ResumeStore>()(
  devtools(
    immer((set) => ({
      resume: null,
      isDirty: false,
      isLoading: false,

      setResume: (resume) => {
        try {
          set((state) => {
            state.resume = resume;
            state.isDirty = false;
          });
          useErrorStore.getState().setError({
            type: 'success',
            message: '简历已成功加载',
          });
        } catch (error) {
          useErrorStore.getState().setError({
            type: 'error',
            message: '加载简历时出错',
          });
        }
      },

      resetResume: () => {
        try {
          set((state) => {
            state.resume = null;
            state.isDirty = false;
          });
          useErrorStore.getState().setError({
            type: 'success',
            message: '简历已重置',
          });
        } catch (error) {
          useErrorStore.getState().setError({
            type: 'error',
            message: '重置简历时出错',
          });
        }
      },

      updateResume: (resume) => {
        try {
          set((state) => {
            if (state.resume) {
              state.resume = { ...state.resume, ...resume };
              state.isDirty = true;
            }
          });
          useErrorStore.getState().setError({
            type: 'success',
            message: '简历已更新',
          });
        } catch (error) {
          useErrorStore.getState().setError({
            type: 'error',
            message: '更新简历时出错',
          });
        }
      },

      setValue: (path, value) => {
        try {
          set((state) => {
            if (state.resume) {
              if (path === 'visibility') {
                state.resume.visibility = value as 'public' | 'private';
              } else {
                state.resume.data = _set(state.resume.data, path, value);
              }
              state.isDirty = true;
            }
          });
        } catch (error) {
          useErrorStore.getState().setError({
            type: 'error',
            message: '更新字段时出错',
          });
        }
      },

      setLoading: (isLoading) => {
        set((state) => {
          state.isLoading = isLoading;
        });
      },

      addItem: (sectionId) => {
        try {
          set((state) => {
            if (state.resume) {
              const item = getDefaultItem(sectionId);
              const items = state.resume.data.sections[sectionId].items || [];
              state.resume.data.sections[sectionId].items = [...items, item];
              state.isDirty = true;
            }
          });
          useErrorStore.getState().setError({
            type: 'success',
            message: '已添加新项目',
          });
        } catch (error) {
          useErrorStore.getState().setError({
            type: 'error',
            message: '添加项目时出错',
          });
        }
      },

      removeItem: (sectionId, itemId) => {
        try {
          set((state) => {
            if (state.resume) {
              const items = state.resume.data.sections[sectionId].items || [];
              state.resume.data.sections[sectionId].items = items.filter(
                (item) => item.id !== itemId
              );
              state.isDirty = true;
            }
          });
          useErrorStore.getState().setError({
            type: 'success',
            message: '已删除项目',
          });
        } catch (error) {
          useErrorStore.getState().setError({
            type: 'error',
            message: '删除项目时出错',
          });
        }
      },
    }))
  )
); 
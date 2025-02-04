import type { Resume } from '@/types/resume';
import { useResumeStore } from '@/lib/stores/resume';
import debounce from 'lodash.debounce';

// 保存简历数据到服务器
export const saveResume = async (resume: Resume): Promise<Resume> => {
  try {
    const response = await fetch(`/api/resume/${resume.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resume),
    });

    if (!response.ok) {
      throw new Error('Failed to save resume');
    }

    return await response.json();
  } catch (error) {
    console.error('Error saving resume:', error);
    throw error;
  }
};

// 获取简历数据
export const getResume = async (id: string): Promise<Resume> => {
  try {
    const response = await fetch(`/api/resume/${id}`);

    if (!response.ok) {
      throw new Error('Failed to fetch resume');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching resume:', error);
    throw error;
  }
};

// 创建新简历
export const createResume = async (resume: Partial<Resume>): Promise<Resume> => {
  try {
    const response = await fetch('/api/resume', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resume),
    });

    if (!response.ok) {
      throw new Error('Failed to create resume');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating resume:', error);
    throw error;
  }
};

// 删除简历
export const deleteResume = async (id: string): Promise<void> => {
  try {
    const response = await fetch(`/api/resume/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete resume');
    }
  } catch (error) {
    console.error('Error deleting resume:', error);
    throw error;
  }
};

// 防抖保存函数
export const debouncedSaveResume = debounce(async (resume: Resume) => {
  try {
    await saveResume(resume);
  } catch (error) {
    console.error('Error in debounced save:', error);
  }
}, 1000);

// 同步简历数据到 iframe
export const syncResumeToArtboard = (frameRef: HTMLIFrameElement | null, resume: Resume) => {
  if (!frameRef?.contentWindow) return;

  const message = {
    type: 'SET_RESUME',
    payload: resume.data,
  };

  frameRef.contentWindow.postMessage(message, '*');
};

// 自动保存 Hook
export const useAutoSave = () => {
  const resume = useResumeStore((state) => state.resume);
  const isDirty = useResumeStore((state) => state.isDirty);

  if (resume && isDirty) {
    debouncedSaveResume(resume);
  }
}; 
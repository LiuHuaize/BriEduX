import { z } from 'zod';

// 基础 URL 类型
export const urlSchema = z.object({
  label: z.string().default(''),
  href: z.string().default(''),
});

export type Url = z.infer<typeof urlSchema>;

// 基础项目类型
export const itemSchema = z.object({
  id: z.string(),
  visible: z.boolean().default(true),
});

export type Item = z.infer<typeof itemSchema>;

// 基础部分类型
export const sectionSchema = z.object({
  name: z.string(),
  columns: z.number().min(1).max(5).default(1),
  visible: z.boolean().default(true),
  separateLinks: z.boolean().default(true),
});

export type Section = z.infer<typeof sectionSchema>;

// 基本信息
export const basicsSchema = z.object({
  name: z.string(),
  headline: z.string(),
  email: z.string().email().or(z.literal('')),
  phone: z.string(),
  location: z.string(),
  url: urlSchema,
  picture: z.object({
    url: z.string(),
    size: z.number().default(64),
    aspectRatio: z.number().default(1),
    borderRadius: z.number().default(0),
    effects: z.object({
      hidden: z.boolean().default(false),
      border: z.boolean().default(false),
      grayscale: z.boolean().default(false),
    }),
  }),
});

export type Basics = z.infer<typeof basicsSchema>;

// 各个部分的具体类型定义
export const experienceSchema = itemSchema.extend({
  company: z.string(),
  position: z.string(),
  location: z.string(),
  date: z.string(),
  summary: z.string(),
  url: urlSchema,
});

export const educationSchema = itemSchema.extend({
  institution: z.string(),
  studyType: z.string(),
  area: z.string(),
  score: z.string(),
  date: z.string(),
  summary: z.string(),
  url: urlSchema,
});

export const skillSchema = itemSchema.extend({
  name: z.string(),
  description: z.string(),
  keywords: z.array(z.string()),
  level: z.number().min(0).max(5).default(0),
});

// 简历数据的完整结构
export const resumeDataSchema = z.object({
  basics: basicsSchema,
  sections: z.object({
    summary: sectionSchema.extend({
      id: z.literal('summary'),
      content: z.string().default(''),
    }),
    experience: sectionSchema.extend({
      id: z.literal('experience'),
      items: z.array(experienceSchema),
    }),
    education: sectionSchema.extend({
      id: z.literal('education'),
      items: z.array(educationSchema),
    }),
    skills: sectionSchema.extend({
      id: z.literal('skills'),
      items: z.array(skillSchema),
    }),
  }),
  metadata: z.object({
    template: z.string().default('modern'),
    layout: z.array(z.array(z.array(z.string()))),
    css: z.object({
      value: z.string().default(''),
      visible: z.boolean().default(false),
    }),
    page: z.object({
      margin: z.number().default(18),
      format: z.enum(['a4', 'letter']).default('a4'),
      options: z.object({
        breakLine: z.boolean().default(true),
        pageNumbers: z.boolean().default(true),
      }),
    }),
    theme: z.object({
      background: z.string().default('#ffffff'),
      text: z.string().default('#000000'),
      primary: z.string().default('#dc2626'),
    }),
    typography: z.object({
      font: z.object({
        family: z.string().default('Inter'),
        subset: z.string().default('latin'),
        variants: z.array(z.string()).default(['regular']),
        size: z.number().default(14),
      }),
      lineHeight: z.number().default(1.5),
      hideIcons: z.boolean().default(false),
      underlineLinks: z.boolean().default(true),
    }),
  }),
});

export type ResumeData = z.infer<typeof resumeDataSchema>;

// 简历完整类型
export const resumeSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  data: resumeDataSchema,
  visibility: z.enum(['private', 'public']).default('private'),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Resume = z.infer<typeof resumeSchema>;

// 默认值
export const defaultUrl: Url = {
  label: '',
  href: '',
};

export const defaultBasics: Basics = {
  name: '',
  headline: '',
  email: '',
  phone: '',
  location: '',
  url: defaultUrl,
  picture: {
    url: '',
    size: 64,
    aspectRatio: 1,
    borderRadius: 0,
    effects: {
      hidden: false,
      border: false,
      grayscale: false,
    },
  },
};

export const defaultSection: Section = {
  name: '',
  columns: 1,
  visible: true,
  separateLinks: true,
};

export const defaultResumeData: ResumeData = {
  basics: defaultBasics,
  sections: {
    summary: { ...defaultSection, id: 'summary', name: 'Summary', content: '' },
    experience: { ...defaultSection, id: 'experience', name: 'Experience', items: [] },
    education: { ...defaultSection, id: 'education', name: 'Education', items: [] },
    skills: { ...defaultSection, id: 'skills', name: 'Skills', items: [] },
  },
  metadata: {
    template: 'modern',
    layout: [[['summary'], ['experience'], ['education'], ['skills']]],
    css: {
      value: '',
      visible: false,
    },
    page: {
      margin: 18,
      format: 'a4',
      options: {
        breakLine: true,
        pageNumbers: true,
      },
    },
    theme: {
      background: '#ffffff',
      text: '#000000',
      primary: '#dc2626',
    },
    typography: {
      font: {
        family: 'Inter',
        subset: 'latin',
        variants: ['regular'],
        size: 14,
      },
      lineHeight: 1.5,
      hideIcons: false,
      underlineLinks: true,
    },
  },
}; 
import { createId } from '@paralleldrive/cuid2';
import type { ResumeData, Resume } from '@/types/resume';
import { defaultResumeData } from '@/types/resume';

export interface UserInputData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    picture?: string;
  };
  summary: string;
  experience: Array<{
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  education: Array<{
    school: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  skills: Array<{
    name: string;
    level: string;
    keywords: string[];
  }>;
}

export const transformToReactiveResume = (input: UserInputData): Resume => {
  const resumeData: ResumeData = {
    ...defaultResumeData,
    basics: {
      ...defaultResumeData.basics,
      name: input.personalInfo.name,
      headline: input.personalInfo.title,
      email: input.personalInfo.email,
      phone: input.personalInfo.phone,
      location: input.personalInfo.location,
      picture: {
        ...defaultResumeData.basics.picture,
        url: input.personalInfo.picture || '',
      },
    },
    sections: {
      ...defaultResumeData.sections,
      summary: {
        ...defaultResumeData.sections.summary,
        content: input.summary,
      },
      experience: {
        ...defaultResumeData.sections.experience,
        items: input.experience.map((exp) => ({
          id: createId(),
          visible: true,
          company: exp.company,
          position: exp.position,
          location: exp.location,
          date: `${exp.startDate} - ${exp.endDate}`,
          summary: exp.description,
          url: { label: '', href: '' },
        })),
      },
      education: {
        ...defaultResumeData.sections.education,
        items: input.education.map((edu) => ({
          id: createId(),
          visible: true,
          institution: edu.school,
          studyType: edu.degree,
          area: edu.field,
          date: `${edu.startDate} - ${edu.endDate}`,
          summary: edu.description,
          score: '',
          url: { label: '', href: '' },
        })),
      },
      skills: {
        ...defaultResumeData.sections.skills,
        items: input.skills.map((skill) => ({
          id: createId(),
          visible: true,
          name: skill.name,
          description: skill.level,
          keywords: skill.keywords,
          level: 0,
        })),
      },
    },
  };

  return {
    id: createId(),
    title: input.personalInfo.name + "'s Resume",
    slug: createId(),
    data: resumeData,
    visibility: 'private',
    userId: createId(), // 这里应该使用实际的用户ID
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

export const transformFromReactiveResume = (resume: Resume): UserInputData => {
  const { data } = resume;

  return {
    personalInfo: {
      name: data.basics.name,
      title: data.basics.headline,
      email: data.basics.email,
      phone: data.basics.phone,
      location: data.basics.location,
      picture: data.basics.picture.url,
    },
    summary: data.sections.summary.content,
    experience: data.sections.experience.items.map((exp) => {
      const [startDate, endDate] = exp.date.split(' - ');
      return {
        company: exp.company,
        position: exp.position,
        location: exp.location,
        startDate,
        endDate,
        description: exp.summary,
      };
    }),
    education: data.sections.education.items.map((edu) => {
      const [startDate, endDate] = edu.date.split(' - ');
      return {
        school: edu.institution,
        degree: edu.studyType,
        field: edu.area,
        startDate,
        endDate,
        description: edu.summary,
      };
    }),
    skills: data.sections.skills.items.map((skill) => ({
      name: skill.name,
      level: skill.description,
      keywords: skill.keywords,
    })),
  };
}; 
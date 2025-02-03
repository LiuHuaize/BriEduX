// 定义数据模型（可根据需求调整）
export interface ResumeData {
  basic_info: {
    name: string;
    phone: string;
    email: string;
  };
  target_job?: string;
  education?: Array<{
    school: string;
    major?: string;
    degree: string;
    start_year: string;
    end_year: string;
    extra?: string;
  }>;
  work_experience?: Array<{
    company: string;
    role: string;
    start_year: string;
    end_year: string;
    responsibilities: string[];
  }>;
  projects?: Array<{
    title: string;
    start_year: string;
    end_year: string;
    responsibilities: string[];
  }>;
  // 补充信息字段：技能和证书
  skills?: string[];
  certifications?: string[];
  meta?: {
    template?: string; // 用户选择的模板标识
  };
}

export interface ReactiveResume {
  basics: {
    name: string;
    phone: string;
    email: string;
  };
  work?: any[];
  education?: any[];
  projects?: any[];
  skills: { name: string }[];
  certifications: { title: string }[];
  meta: {
    template: string;
  };
}

function transformToReactiveResume(data: ResumeData): ReactiveResume {
  const reactiveResume: ReactiveResume = {
    basics: {
      name: data.basic_info.name,
      phone: data.basic_info.phone,
      email: data.basic_info.email,
    },
    work: data.work_experience ? data.work_experience.map(exp => ({
      company: exp.company,
      position: exp.role,
      period: `${exp.start_year || '未知'} - ${exp.end_year || '至今'}`,
      summary: exp.responsibilities,
    })) : [],
    education: data.education ? data.education.map(edu => ({
      institution: edu.school,
      area: edu.major || '',
      studyType: edu.degree,
      period: `${edu.start_year || '未知'} - ${edu.end_year || '未知'}`,
      details: edu.extra || '',
    })) : [],
    projects: data.projects ? data.projects.map(proj => ({
      name: proj.title,
      period: `${proj.start_year || '未知'} - ${proj.end_year || '未知'}`,
      description: proj.responsibilities,
    })) : [],
    skills: data.skills && data.skills.length > 0 
      ? data.skills.map(skill => ({ name: skill.trim() })) 
      : [],
    certifications: data.certifications && data.certifications.length > 0
      ? data.certifications.map(cert => ({ title: cert.trim() }))
      : [],
    meta: {
      // 如果用户未选模板，默认值设为 'default'
      template: data.meta && data.meta.template ? data.meta.template : 'default'
    }
  };

  return reactiveResume;
}

export default transformToReactiveResume; 
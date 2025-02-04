// 定义数据模型（可根据需求调整）
export interface ResumeData {
  basics: { name: string; phone: string; email: string };
  education: any[];
  work: any[];
  projects?: any[];
  skills?: any[];
  certifications?: any[];
  meta?: { template: string };
}

const transformToReactiveResume = (data: ResumeData): ResumeData => {
  return {
    basics: data.basics || { name: "", phone: "", email: "" },
    education: data.education || [],
    work: data.work || [],
    projects: data.projects || [],
    skills: data.skills || [],
    certifications: data.certifications || [],
    meta: data.meta || { template: "default" },
  };
};

export default transformToReactiveResume; 
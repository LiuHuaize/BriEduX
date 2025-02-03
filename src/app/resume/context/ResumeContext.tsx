import React, { createContext, useState, ReactNode, useContext } from "react";

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
  skills?: string[];
  certifications?: string[];
  meta?: {
    template?: string;
  };
}

interface ResumeContextValue {
  resumeData: ResumeData | null;
  setResumeData: (data: ResumeData) => void;
}

const ResumeContext = createContext<ResumeContextValue | undefined>(undefined);

export const ResumeProvider = ({ children }: { children: ReactNode }) => {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error("useResume 必须在 ResumeProvider 内使用");
  }
  return context;
};

export default ResumeProvider; 
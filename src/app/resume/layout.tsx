"use client";

import ResumeProvider from "@/app/resume/context/ResumeContext";

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return (
    <ResumeProvider>
      {children}
    </ResumeProvider>
  );
} 
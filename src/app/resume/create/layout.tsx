"use client";

export default function CreateResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen w-screen p-0 m-0 overflow-hidden">
      {children}
    </div>
  );
} 

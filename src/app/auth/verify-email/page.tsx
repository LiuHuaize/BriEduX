"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Mail, ArrowRight, RefreshCw } from "lucide-react";
import { supabase } from "@/lib/supabase/client";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email");
  const [isVerified, setIsVerified] = useState(false);
  const [checking, setChecking] = useState(false);

  const checkVerificationStatus = async () => {
    if (!email) return;
    
    setChecking(true);
    try {
      const { data: { user }, error } = await supabase.auth.getUser();
      
      if (error) throw error;
      
      if (user?.email_confirmed_at) {
        setIsVerified(true);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    } catch (error) {
      console.error("验证状态检查失败:", error);
    } finally {
      setChecking(false);
    }
  };

  useEffect(() => {
    if (!email) {
      router.push("/auth/login");
    }
  }, [email, router]);

  if (!email) return null;

  return (
    <div className="fixed inset-0 min-h-screen w-full bg-gray-50/50 z-50">
      <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[400px] space-y-8 bg-white shadow-xl rounded-2xl p-8 relative">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-blue-500" />
            </div>
            
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight">
                验证您的邮箱
              </h2>
              <p className="text-sm text-gray-500">
                我们已经向 {email} 发送了验证邮件。
                请查收邮件并点击验证链接。
              </p>
            </div>

            {isVerified ? (
              <div className="flex items-center space-x-2 text-green-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>邮箱已验证！正在跳转...</span>
              </div>
            ) : (
              <button
                onClick={checkVerificationStatus}
                disabled={checking}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {checking ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    检查中...
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    检查验证状态
                  </>
                )}
              </button>
            )}

            <div className="pt-4 text-center">
              <p className="text-sm text-gray-500">
                没有收到邮件？
              </p>
              <button
                onClick={() => router.push("/auth/login")}
                className="mt-2 inline-flex items-center text-sm text-blue-600 hover:text-blue-500"
              >
                返回登录
                <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
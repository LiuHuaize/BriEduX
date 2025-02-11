"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Mail, ArrowRight, RefreshCw } from "lucide-react";
import { supabase } from "@/lib/supabase/client";
import Link from "next/link";

function VerifyEmailForm() {
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
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Mail className="h-12 w-12 text-blue-500" />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight">
              验证您的邮箱
            </h2>
            <p className="text-sm text-gray-500">
              我们已经向 {email} 发送了一封验证邮件，请查收并点击邮件中的验证链接。
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={checkVerificationStatus}
              disabled={checking || isVerified}
              className="w-full flex items-center justify-center py-2.5 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {checking ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  检查中...
                </>
              ) : isVerified ? (
                <>
                  <Mail className="h-4 w-4 mr-2" />
                  邮箱已验证，即将跳转...
                </>
              ) : (
                <>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  检查验证状态
                </>
              )}
            </button>

            <div className="text-center">
              <Link
                href="/auth/login"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-500 transition-colors duration-200"
              >
                返回登录
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmailForm />
    </Suspense>
  );
} 
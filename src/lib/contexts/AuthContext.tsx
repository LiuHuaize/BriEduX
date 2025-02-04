"use client";

import React, { createContext, useEffect, useState } from "react";
import { User } from '@supabase/supabase-js';
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { supabase } from "../supabase/client";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signIn: async () => {},
  signUp: async () => {},
  signOut: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // 检查初始会话
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // 设置认证状态监听器
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);

      // 如果在验证邮箱页面，不进行重定向
      if (pathname.startsWith('/auth/verify-email')) {
        return;
      }

      // 如果用户未登录且当前页面需要认证，重定向到登录页
      if (!session?.user && (pathname.startsWith('/resume') || pathname.startsWith('/jobs'))) {
        router.push('/auth/login');
      }

      // 如果用户已登录且在认证页面（除了验证邮箱页面），重定向到首页
      if (session?.user && pathname.startsWith('/auth/') && !pathname.startsWith('/auth/verify-email')) {
        router.push('/');
      }
    });

    return () => subscription.unsubscribe();
  }, [pathname, router]);

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // 如果有 from 参数，登录后重定向到该页面
      const params = new URLSearchParams(window.location.search);
      const from = params.get('from') || '/';
      router.push(from);
    } catch (error: any) {
      console.error("登录失败:", error);
      throw new Error(getErrorMessage(error.message));
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) throw error;

      // 注册成功后重定向到验证邮箱页面
      router.push(`/auth/verify-email?email=${encodeURIComponent(email)}`);
    } catch (error: any) {
      console.error("注册失败:", error);
      throw new Error(getErrorMessage(error.message));
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      router.push('/');
    } catch (error: any) {
      console.error("登出失败:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// Supabase 错误消息本地化
function getErrorMessage(errorMessage: string): string {
  if (errorMessage.includes('Invalid login credentials')) {
    return '邮箱或密码错误';
  }
  if (errorMessage.includes('Email not confirmed')) {
    return '邮箱未验证，请查收验证邮件';
  }
  if (errorMessage.includes('User already registered')) {
    return '该邮箱已被注册';
  }
  if (errorMessage.includes('Password should be at least 6 characters')) {
    return '密码长度至少为6位';
  }
  if (errorMessage.includes('Invalid email')) {
    return '邮箱格式不正确';
  }
  if (errorMessage.includes('For security purposes, you can only request this after')) {
    // 从错误消息中提取等待时间
    const seconds = errorMessage.match(/\d+/)?.[0] || '30';
    return `操作太频繁，请等待 ${seconds} 秒后重试`;
  }
  if (errorMessage.includes('429')) {
    return '请求太频繁，请稍后再试';
  }
  return '发生错误，请稍后再试';
}

export { AuthContext };

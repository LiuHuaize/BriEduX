"use client";

import React, { createContext, useEffect, useState } from "react";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User,
  setPersistence,
  browserLocalPersistence,
  getAuth
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

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
    // 设置持久化
    setPersistence(auth, browserLocalPersistence).then(() => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        setUser(user);
        setLoading(false);

        // 如果用户未登录且当前页面需要认证，重定向到登录页
        if (!user && (pathname.startsWith('/resume') || pathname.startsWith('/jobs'))) {
          router.push('/auth/login');
        }

        // 如果用户已登录且在认证页面，重定向到首页
        if (user && pathname.startsWith('/auth/')) {
          router.push('/');
        }
      });

      return () => unsubscribe();
    });
  }, [pathname, router]);

  const signIn = async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      // 获取 ID token 并设置 cookie
      const idToken = await result.user.getIdToken();
      await fetch('/api/auth/session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idToken }),
      });
    } catch (error: any) {
      console.error("登录失败:", error);
      throw new Error(getErrorMessage(error.code));
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      // 获取 ID token 并设置 cookie
      const idToken = await result.user.getIdToken();
      await fetch('/api/auth/session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idToken }),
      });
    } catch (error: any) {
      console.error("注册失败:", error);
      throw new Error(getErrorMessage(error.code));
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      setUser(null);
      // 清除 session cookie
      await fetch('/api/auth/session', {
        method: 'DELETE',
      });
      router.push('/');
    } catch (error) {
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

// Firebase 错误消息本地化
function getErrorMessage(errorCode: string): string {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return '该邮箱已被注册';
    case 'auth/invalid-email':
      return '邮箱格式不正确';
    case 'auth/operation-not-allowed':
      return '邮箱/密码登录未启用';
    case 'auth/weak-password':
      return '密码强度太弱';
    case 'auth/user-disabled':
      return '该账户已被禁用';
    case 'auth/user-not-found':
      return '用户不存在';
    case 'auth/wrong-password':
      return '密码错误';
    case 'auth/too-many-requests':
      return '登录尝试次数过多，请稍后再试';
    default:
      return '发生错误，请稍后再试';
  }
}

export { AuthContext };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 获取会话 cookie
  const session = request.cookies.get("__session");
  
  // 检查是否是需要保护的路由
  const isProtectedRoute = request.nextUrl.pathname.startsWith("/resume") || 
                          request.nextUrl.pathname.startsWith("/jobs");
  
  // 检查是否是认证相关路由
  const isAuthRoute = request.nextUrl.pathname.startsWith("/auth/");
  
  // 如果是受保护的路由且没有会话，重定向到登录页
  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  
  // 如果已登录用户访问认证页面，重定向到首页
  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  
  return NextResponse.next();
}

// 配置中间件匹配的路径
export const config = {
  matcher: [
    /*
     * 匹配所有需要认证的路由:
     * - /resume
     * - /jobs
     * - /auth
     */
    "/resume/:path*",
    "/jobs/:path*",
    "/auth/:path*",
  ],
}; 
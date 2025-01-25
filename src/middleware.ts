import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 获取会话 cookie
  const session = request.cookies.get("__session");
  
  // 获取当前路径
  const path = request.nextUrl.pathname;
  
  // 允许访问的公开路径
  const publicPaths = ['/', '/auth/login', '/auth/register'];
  
  // 如果是公开路径，直接允许访问
  if (publicPaths.includes(path)) {
    return NextResponse.next();
  }
  
  // 如果没有会话且不是公开路径，重定向到登录页
  if (!session) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
  
  return NextResponse.next();
}

// 配置需要中间件处理的路径
export const config = {
  matcher: [
    /*
     * 匹配除了 _next/static、_next/image、favicon.ico 之外的所有路径
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}; 
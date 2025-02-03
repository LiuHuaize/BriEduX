import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 获取会话 cookie
  const session = request.cookies.get("__session");
  
  // 获取当前路径
  const path = request.nextUrl.pathname;
  
  // 允许访问的公开路径
  const publicPaths = ['/', '/auth/login', '/auth/register','/resume', '/dashboard', '/settings'];
  
  // 需要保护的路径前缀
  const protectedPrefixes: string[] = [];
  
  // 检查当前路径是否需要保护
  const needsProtection = protectedPrefixes.some(prefix => path.startsWith(prefix));
  
  // 如果不需要保护的路径，直接允许访问
  if (!needsProtection || publicPaths.includes(path)) {
    return NextResponse.next();
  }
  
  // 如果是需要保护的路径但没有会话，重定向到登录页
  if (!session?.value) {
    console.log('No session found, redirecting to login. Path:', path);
    // 保存尝试访问的URL，登录后可以重定向回来
    const loginUrl = new URL('/auth/login', request.url);
    loginUrl.searchParams.set('from', request.nextUrl.pathname);
    
    // 创建响应
    const response = NextResponse.redirect(loginUrl);
    
    // 在响应中添加 Cache-Control 头，防止浏览器缓存重定向
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    
    return response;
  }

  console.log('Session found, allowing access to protected route:', path);
  
  // 创建响应
  const response = NextResponse.next();
  
  // 在响应中添加 Cache-Control 头，防止浏览器缓存
  response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  response.headers.set('Pragma', 'no-cache');
  response.headers.set('Expires', '0');
  
  return response;
}

// 配置需要中间件处理的路径
export const config = {
  matcher: [
    /*
     * 匹配所有路径，除了以下情况：
     * - _next/static (静态文件)
     * - _next/image (图片优化)
     * - favicon.ico (网站图标)
     * - public 文件夹下的文件
     * - api 路由
     */
    '/((?!_next/static|_next/image|favicon.ico|api|.*\\.(?:jpg|jpeg|gif|png|svg|ico)$).*)',
  ],
}; 
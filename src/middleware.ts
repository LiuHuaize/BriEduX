import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.next();
}

// 配置需要中间件处理的路径
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}; 
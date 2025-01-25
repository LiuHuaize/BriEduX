import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

// 设置会话
export async function POST(request: NextRequest) {
  try {
    const { idToken } = await request.json();
    
    // 设置会话 cookie
    cookies().set('__session', idToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 5 // 5 days
    });

    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error('设置会话失败:', error);
    return NextResponse.json({ error: '设置会话失败' }, { status: 500 });
  }
}

// 清除会话
export async function DELETE() {
  try {
    cookies().delete('__session');
    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error('清除会话失败:', error);
    return NextResponse.json({ error: '清除会话失败' }, { status: 500 });
  }
} 
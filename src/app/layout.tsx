import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NavBarDemo } from '@/components/nav-bar-demo'
import { BackgroundTiles } from '@/components/ui/background-tiles'
import { UserMenu } from '@/components/ui/user-menu'
import { AuthProvider } from "@/lib/contexts/AuthContext"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JobAI - 你的智能求职助手',
  description: '使用AI技术帮助你找到理想的工作',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <AuthProvider>
          <div className="relative min-h-screen">
            <div className="fixed inset-0 z-0">
              <BackgroundTiles />
            </div>
            <div className="relative z-10">
              <NavBarDemo />
              <UserMenu />
              <main className="w-full">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}

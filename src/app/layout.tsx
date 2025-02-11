import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { BackgroundTiles } from '@/components/ui/background-tiles'
import { AuthProvider } from "@/lib/contexts/AuthContext"
import { NavigationProvider } from '@/components/providers/navigation-provider'

const inter = Inter({ 
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

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
    <html lang="zh" className={inter.variable}>
      <body className={inter.className}>
        <AuthProvider>
          <div className="relative min-h-screen">
            <div className="fixed inset-0 z-0">
              <BackgroundTiles />
            </div>
            <div className="relative z-10">
              <NavigationProvider />
              <main className="w-full">
                {children}
              </main>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}

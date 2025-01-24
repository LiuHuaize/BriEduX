'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navigation = [
  { name: '首页', href: '/' },
  { name: '简历生成', href: '/resume' },
  { name: '职位匹配', href: '/jobs' },
  { name: '个人中心', href: '/profile' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 text-2xl font-bold">
            Get Job With AI
          </Link>
        </div>
        <div className="flex gap-x-12">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'relative text-sm font-semibold leading-6 text-gray-900 transition duration-300 hover:text-blue-600',
                  isActive && 'text-blue-600'
                )}
              >
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full animate-pulse bg-blue-600" />
                )}
              </Link>
            )
          })}
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900">
            登录 <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </div>
  )
} 
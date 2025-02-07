"use client"

import { Home, FileText, Briefcase, LineChart } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: '首页', url: '/', icon: Home },
    { name: '打造简历', url: '/resume', icon: FileText },
    { name: '匹配岗位', url: '/jobs', icon: Briefcase },
    { name: '简历评测', url: '/job_evaluation', icon: LineChart }
  ]

  return <NavBar items={navItems} />
} 
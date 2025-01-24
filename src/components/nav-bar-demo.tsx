"use client"

import { Home, FileText, Briefcase } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: '首页', url: '/', icon: Home },
    { name: '打造简历', url: '/resume', icon: FileText },
    { name: '匹配岗位', url: '/jobs', icon: Briefcase }
  ]

  return <NavBar items={navItems} />
} 
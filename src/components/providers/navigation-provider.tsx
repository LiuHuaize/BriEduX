"use client";

import { usePathname } from 'next/navigation'
import { NavBarDemo } from '@/components/nav-bar-demo'

export function NavigationProvider() {
  const pathname = usePathname()
  const hideNavigation = pathname === '/resume/create'

  if (hideNavigation) {
    return null;
  }

  return <NavBarDemo />;
} 
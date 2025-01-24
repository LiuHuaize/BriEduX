"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-8",
        className,
      )}
    >
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-lg py-2 px-2 rounded-full shadow-lg"
      >
        {items.map((item) => {
          const isActive = pathname === item.url

          return (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.url}
                className={cn(
                  "relative cursor-pointer text-base font-medium px-8 py-3 rounded-full transition-all duration-300",
                  "text-gray-500 hover:text-gray-800",
                  isActive && "bg-white/10 text-gray-800"
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <item.icon size={20} strokeWidth={1.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-white/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-gray-800 rounded-t-full">
                      <div className="absolute w-14 h-8 bg-gray-800/10 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-10 h-8 bg-gray-800/10 rounded-full blur-md -top-1" />
                      <div className="absolute w-6 h-6 bg-gray-800/5 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
} 
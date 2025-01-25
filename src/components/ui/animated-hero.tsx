"use client"

import { useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MoveRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(
    () => ["智慧", "专业", "高效", "精准", "创新"],
    []
  )

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0)
      } else {
        setTitleNumber(titleNumber + 1)
      }
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])

  return (
    <div className="w-full min-h-[calc(100vh-12rem)]">
      <div className="container mx-auto px-4">
        <div className="flex gap-12 py-16 lg:py-20 items-center justify-center flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-3"
          >
            <motion.div 
              className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-full px-4 py-2 shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2 text-sm font-medium text-blue-600">
                <Sparkles className="w-4 h-4" />
                <span>全新升级</span>
              </div>
            </motion.div>
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl tracking-tight text-center font-light mt-8">
              <motion.div
                className="flex items-center justify-center gap-4 flex-wrap leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-gray-800/80">打造</span>
                <div className="relative h-[1.2em] w-[3em] inline-flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={titleNumber}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ 
                        duration: 0.5,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <span className="font-normal bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600">
                        {titles[titleNumber]}型
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <span className="text-gray-800/80">求职体验</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.p 
            className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-600 max-w-3xl text-center mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            使用 AI 技术帮助你打造专业简历，精准匹配理想工作。
            <br className="hidden sm:block" />
            让求职之路不再迷茫，轻松实现职业理想。
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center items-center mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/resume">
              <Button 
                size="lg" 
                className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white w-full sm:w-auto min-w-[160px] shadow-lg shadow-blue-200/50"
              >
                开始使用 <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 w-full sm:w-auto min-w-[160px] border-2 border-blue-200 hover:bg-blue-50 text-blue-600"
              >
                了解更多 <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export { Hero } 
"use client"

import { motion } from "framer-motion"

export function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full py-8"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
      <div className="relative flex justify-center">
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-100 shadow-sm" />
      </div>
    </motion.div>
  )
} 
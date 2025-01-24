"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface BackgroundTilesProps {
  className?: string
}

export function BackgroundTiles({ className }: BackgroundTilesProps) {
  return (
    <div className={cn("fixed inset-0 z-0 bg-white", className)}>
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.05) 1px, transparent 0)`,
          backgroundSize: '16px 16px'
        }}
      />
    </div>
  )
} 
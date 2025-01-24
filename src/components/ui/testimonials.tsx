"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface Testimonial {
  image: string
  name: string
  username: string
  text: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
  className?: string
  title?: string
  description?: string
  maxDisplayed?: number
}

export function Testimonials({
  testimonials,
  className,
  title = "听听他们怎么说",
  description = "来自我们用户的真实反馈",
  maxDisplayed = 6,
}: TestimonialsProps) {
  const [showAll, setShowAll] = useState(false)

  return (
    <div className={cn("w-full py-12 md:py-20", className)}>
      <div className="w-full flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground">
            {description.split("<br />").map((line, i) => (
              <span key={i}>
                {line}
                {i !== description.split("<br />").length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr",
              !showAll &&
                testimonials.length > maxDisplayed &&
                "max-h-[800px] overflow-hidden"
            )}
          >
            {testimonials
              .slice(0, showAll ? undefined : maxDisplayed)
              .map((testimonial, index) => (
                <Card
                  key={index}
                  className="group flex flex-col h-full p-6 bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-[0_2px_4px_rgba(0,0,0,0.02),0_1px_6px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:border-slate-300/60 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 ring-2 ring-slate-100 rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col ml-4">
                      <span className="font-semibold text-base group-hover:text-blue-600 transition-colors">
                        {testimonial.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {testimonial.username}
                      </span>
                    </div>
                  </div>
                  <p className="text-foreground flex-grow leading-relaxed">
                    {testimonial.text}
                  </p>
                </Card>
              ))}
          </div>

          {testimonials.length > maxDisplayed && !showAll && (
            <div className="relative">
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
              <div className="flex justify-center mt-8">
                <Button 
                  variant="secondary" 
                  onClick={() => setShowAll(true)}
                  className="relative z-10 bg-white/80 backdrop-blur-sm border border-slate-200/50 hover:border-slate-300/60 hover:bg-white/90 shadow-sm"
                >
                  加载更多
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 
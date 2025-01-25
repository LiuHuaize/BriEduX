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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600">
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
                  className="group flex flex-col h-full p-6 bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 ring-2 ring-blue-100 rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col ml-4">
                      <span className="font-semibold text-base text-gray-900 group-hover:text-blue-600 transition-colors">
                        {testimonial.name}
                      </span>
                      <span className="text-sm text-gray-600">
                        {testimonial.username}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 flex-grow leading-relaxed">
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
                  className="relative z-10 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-lg text-gray-700 hover:text-gray-900"
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
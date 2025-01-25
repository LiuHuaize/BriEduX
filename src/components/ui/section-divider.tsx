"use client"

export function SectionDivider() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-200" />
      </div>
      <div className="relative flex justify-center">
        <div className="bg-white px-3">
          <div className="h-4 w-4 rounded-full bg-gray-200" />
        </div>
      </div>
    </div>
  )
} 
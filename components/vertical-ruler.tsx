'use client'

import { useEffect, useState } from 'react'

export default function VerticalRuler() {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const updateHeight = () => {
      setHeight(Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      ))
    }

    updateHeight()
    window.addEventListener('resize', updateHeight)
    window.addEventListener('load', updateHeight)

    return () => {
      window.removeEventListener('resize', updateHeight)
      window.removeEventListener('load', updateHeight)
    }
  }, [])

  return (
    <div className="fixed left-0 top-0 h-full w-12 pointer-events-none select-none z-50">
      <div 
        className="relative w-full"
        style={{ height: `${height}px` }}
      >
        {[...Array(Math.ceil(height / 50))].map((_, i) => (
          <div 
            key={i} 
            className="absolute left-[350px] flex items-center"
            style={{ top: `${i * 50}px` }}
          >
            <span className="text-subheading-2xs text-stroke-soft-200 w-8 text-right pr-1">
              {i * 50}
            </span>
            <div className="w-3 border-t border-stroke-soft-200" />
          </div>
        ))}
      </div>
    </div>
  )
}

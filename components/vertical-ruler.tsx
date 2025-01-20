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
    <div className="fixed top-0 max-h-[100vh] w-12 pointer-events-none select-none z-50">
      <div 
        className="relative w-full"
        style={{ height: `${height}px` }}
      >
        {[...Array(Math.ceil(height / 50))].map((_, i) => (
          <div 
            key={i} 
            className="absolute left-0 flex items-center"
            style={{ top: `${i * 50}px` }}
          >
            <span className="text-subheading-2xs text-text-soft-400 w-8 text-right pr-1">
              {i * 50}
            </span>
            <div className="w-3 border-t border-gray-300" />
          </div>
        ))}
      </div>
    </div>
  )
}


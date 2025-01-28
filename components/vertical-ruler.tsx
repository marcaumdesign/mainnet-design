'use client'

import { useEffect, useState } from 'react'

export default function VerticalRuler() {
  const [height, setHeight] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  useEffect(() => {
    const updateHeight = () => {
      setHeight(Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      ))
    }

    const handleMouseMove = (event: MouseEvent) => {
      setMouseY(event.clientY)
    }

    updateHeight()
    window.addEventListener('resize', updateHeight)
    window.addEventListener('load', updateHeight)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', updateHeight)
      window.removeEventListener('load', updateHeight)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="fixed top-0 max-h-[100vh] w-12 pointer-events-none select-none z-30">
      <div 
        className="relative w-full"
        style={{ height: `${height}px` }}
      >
        {[...Array(Math.ceil(height / 50))].map((_, i) => {
          const isCurrent = mouseY >= i * 50 && mouseY < (i + 1) * 50
          const isPrevious = mouseY >= (i - 1) * 50 && mouseY < i * 50
          const isNext = mouseY >= (i + 1) * 50 && mouseY < (i + 2) * 50

          return (
            <div 
              key={i} 
              className="absolute left-0 flex items-center"
              style={{ top: `${i * 50}px` }}
            >
              <span 
                className={`text-subheading-2xs w-8 text-right pr-1 ${
                  isCurrent ? 'text-text-strong-950' : 
                  isPrevious || isNext ? 'text-text-sub-600' : 
                  'transition-all text-text-disabled-300'
                }`}
              >
                {i * 50}
              </span>
              <div className="w-3 border-t border-gray-300" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

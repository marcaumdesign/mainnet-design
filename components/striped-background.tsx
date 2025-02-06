import { useEffect, useState } from "react"

interface StripedBackgroundProps {
    className?: string
    variant?: "light" | "dark"
    stripeColor?: string
    backgroundColor?: string
    stripeWidth?: number
    stripeAngle?: number
  }
  
  export function StripedBackground({
    className = "",
    stripeColor, // Tailwind gray-100
    backgroundColor,
    stripeWidth = 3,
    stripeAngle = 45,
    variant = "light",
  }: StripedBackgroundProps) {
    // Calculate the stripe size to ensure proper repeating

      const [isDarkMode, setDarkMode] = useState<null | boolean>(null)
        
      
        useEffect(() => {
          
          if(typeof window === 'undefined') {
            return
          }
      
      
          const mode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      
          setDarkMode(mode)
          
        }, [])

    const size = stripeWidth * 2

    { isDarkMode ? (stripeColor  = "#EBEBEB", backgroundColor  = "white") : (stripeColor = "#333", backgroundColor = "#181818")}
    
  
    return (
      <div
        className={`w-full h-full ${className}`}
        style={{
          background: `linear-gradient(${stripeAngle}deg, 
            ${stripeColor} 25%, 
            ${backgroundColor} 25%, 
            ${backgroundColor} 50%, 
            ${stripeColor} 50%, 
            ${stripeColor} 75%, 
            ${backgroundColor} 75%, 
            ${backgroundColor} 100%)`,
          backgroundSize: `${size}px ${size}px`,
        }}
      />
    )
  }
  
  
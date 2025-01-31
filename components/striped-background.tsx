interface StripedBackgroundProps {
    className?: string
    stripeColor?: string
    backgroundColor?: string
    stripeWidth?: number
    stripeAngle?: number
  }
  
  export function StripedBackground({
    className = "",
    stripeColor = "rgb(243 244 246)", // Tailwind gray-100
    backgroundColor = "white",
    stripeWidth = 3,
    stripeAngle = 45,
  }: StripedBackgroundProps) {
    // Calculate the stripe size to ensure proper repeating
    const size = stripeWidth * 2
  
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
  
  
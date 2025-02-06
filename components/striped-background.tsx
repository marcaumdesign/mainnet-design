'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | undefined;

type ColorTheme = {
  stripeColor: string;
  backgroundColor: string;
};

interface StripedBackgroundProps {
  className?: string;
  stripeWidth?: number;
  stripeAngle?: number;
}

export function StripedBackground({
  className = '',
  stripeWidth = 3,
  stripeAngle = 45,
}: StripedBackgroundProps) {
  const { systemTheme } = useTheme();
  const [resolvedTheme, setResolvedTheme] = useState(systemTheme);

  useEffect(() => {
    setResolvedTheme(systemTheme);
  }, [systemTheme]);

  const size = stripeWidth * 2;
  const isLightTheme = resolvedTheme === 'light';

  const colors: Record<NonNullable<Theme>, ColorTheme> = {
    light: {
      stripeColor: '#EBEBEB',
      backgroundColor: '#FFFFFF',
    },
    dark: {
      stripeColor: '#333333',
      backgroundColor: '#181818',
    },
  };

  return (
    <div
      key={resolvedTheme}
      className={`h-full w-full ${className}`}
      style={{
        background: `linear-gradient(${stripeAngle}deg, 
          ${colors[resolvedTheme!]?.stripeColor} 25%, 
          ${colors[resolvedTheme!]?.backgroundColor} 25%, 
          ${colors[resolvedTheme!]?.backgroundColor} 50%, 
          ${colors[resolvedTheme!]?.stripeColor} 50%, 
          ${colors[resolvedTheme!]?.stripeColor} 75%, 
          ${colors[resolvedTheme!]?.backgroundColor} 75%, 
          ${colors[resolvedTheme!]?.backgroundColor} 100%)`,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';

export default function VerticalRuler(props: { className?: string }) {
  const [height, setHeight] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const constainerRef = useRef<HTMLDivElement | null>(null);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!constainerRef.current) return;

    constainerRef.current.style.transform = `translateY(${-parseInt(scrollY.toString())*0.25}px)`;
  }, [scrollY]);

  const handleScroll = () => {
    setScrollY(window.scrollY)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      setHeight(
        Math.max(
          document.documentElement.scrollHeight,
          document.body.scrollHeight,
        ),
      );
    };

    const handleMouseMove = (event: MouseEvent) => {
      setMouseY(event.clientY);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    window.addEventListener('load', updateHeight);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('load', updateHeight);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={constainerRef}
      className={`pointer-events-none z-30 max-h-[100vh] w-12 select-none transition-transform ease-linear ${props.className || ''}`}
    >
      <div className='relative w-full' style={{ height: `${height}px` }}>
        {[...Array(Math.ceil(height / 50))].map((_, i) => {
          const isCurrent = mouseY >= i * 50 && mouseY < (i + 1) * 50;
          const isPrevious = mouseY >= (i - 1) * 50 && mouseY < i * 50;
          const isNext = mouseY >= (i + 1) * 50 && mouseY < (i + 2) * 50;

          return (
            <div
              key={i}
              className='absolute left-0 flex items-center'
              style={{ top: `${i * 50}px` }}
            >
              <span
                className={`w-8 pr-1 text-right text-subheading-2xs ${
                  isCurrent
                    ? 'text-text-strong-950'
                    : isPrevious || isNext
                      ? 'text-text-sub-600'
                      : 'text-text-disabled-300 transition-all'
                }`}
              >
                {i * 50}
              </span>
              <div className='w-3 border-t border-gray-300' />
            </div>
          );
        })}
      </div>
    </div>
  );
}

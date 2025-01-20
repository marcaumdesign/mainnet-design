'use client'

import React, { useEffect, useState } from 'react';

const VerticalRuler = ({ parentRef }: { parentRef: React.RefObject<HTMLElement> }) => {
  const [height, setHeight] = useState(0);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const updateHeight = () => {
      setHeight(Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      ));
    };

    const updatePosition = () => {
      if (parentRef.current) {
        const parentRect = parentRef.current.getBoundingClientRect();
        setPosition({
          top: parentRect.top + window.scrollY,
          left: parentRect.left + window.scrollX,
        });
      }
    };

    updateHeight();
    updatePosition();
    window.addEventListener('resize', updateHeight);
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition);
    window.addEventListener('load', updateHeight);
    window.addEventListener('load', updatePosition);

    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('load', updateHeight);
      window.removeEventListener('load', updatePosition);
    };
  }, [parentRef]);

  return (
    <div
      className="fixed pointer-events-none select-none z-50"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        height: `${height}px`,
      }}
    >
      <div className="relative w-full h-full">
        {/* Conteúdo do VerticalRuler */}
      </div>
    </div>
  );
};

export default VerticalRuler;
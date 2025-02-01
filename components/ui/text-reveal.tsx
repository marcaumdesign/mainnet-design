'use client';

import { FC, ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TextRevealByLetterProps {
  text: string;
  prefix?: string; // Add a prefix prop
  className?: string;
}

export const TextRevealByLetter: FC<TextRevealByLetterProps> = ({
  text,
  prefix = '', // Default prefix is empty
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'], // Adjust the offset to control when the animation starts and ends
  });

  // Trim leading spaces from the text
  const trimmedText = text.trimStart();
  const letters = trimmedText.split(''); // Split text into letters

  return (
    <div ref={targetRef} className={cn('relative z-0', className)}>
      <p className='flex flex-wrap text-title-h3 text-text-soft-400'>
        {/* Render the prefix (already revealed) */}
        {prefix && <span className='opacity-100'>{prefix}</span>}
        {/* Render the letters with scroll-based reveal */}
        {letters.map((letter, i) => {
          const start = i / letters.length;
          const end = start + 1 / letters.length;
          return (
            <Letter key={i} progress={scrollYProgress} range={[start, end]}>
              {letter === ' ' ? '\u00A0' : letter}{' '}
              {/* Replace spaces with non-breaking spaces */}
            </Letter>
          );
        })}
      </p>
    </div>
  );
};

interface LetterProps {
  children: ReactNode;
  progress: any; // MotionValue<number> is not directly accessible in the type definition
  range: [number, number];
}

const Letter: FC<LetterProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]); // Map scroll progress to opacity
  return (
    <span className='relative'>
      <span className='absolute opacity-30'>{children}</span>
      <motion.span style={{ opacity }} className='dark:text-white'>
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByLetter;

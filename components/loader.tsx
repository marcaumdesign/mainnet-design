'use client';

import { ShoppingBag } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import type React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedVerticalRuler from './animated-vertical-ruler';
import { log } from 'console';

const SegmentedLoader: React.FC = () => {
  const [isDarkMode, setDarkMode] = useState<null | boolean>(null);
  const [currentSegment, setCurrentSegment] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const totalSegments = 6;

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mode =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    setDarkMode(mode);
  }, []);

  useEffect(() => {
    const segmentDuration = 500;
    const totalDuration = segmentDuration * totalSegments;

    const segmentInterval = setInterval(() => {
      setCurrentSegment((prev) => {
        if (prev >= totalSegments - 1) {
          clearInterval(segmentInterval);
          return prev;
        }
        return prev + 1;
      });
    }, segmentDuration);

    // Set a single timeout for the entire animation duration
    const completionTimeout = setTimeout(() => {
      clearInterval(segmentInterval);
      setIsLoading(false);
    }, totalDuration);

    return () => {
      clearInterval(segmentInterval);
      clearTimeout(completionTimeout);
    };
  }, []);

  if (isDarkMode === null) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className='fixed inset-0 z-[100] flex items-center justify-center bg-bg-white-0'
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <AnimatedVerticalRuler variant='left' />
          <AnimatedVerticalRuler variant='right' />
          <div className='w-[100%] items-center gap-2 md:w-1/2'>
            <span className='mr-2 text-gray-500'>
              <DotLottieReact
                src={
                  isDarkMode
                    ? '/lotties/logo-darkmode.lottie'
                    : '/lotties/logo-lightmode.lottie'
                }
                loop
                autoplay
              />
              {/* <DotLottieReact
                src='/lotties/logo-darkmode.lottie'
                loop
                autoplay
              />
              <DotLottieReact
                src='/lotties/logo-lightmode.lottie'
                loop
                autoplay
              /> */}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SegmentedLoader;

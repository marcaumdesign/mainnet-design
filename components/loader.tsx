'use client';

import { ShoppingBag } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import type React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedVerticalRuler from './animated-vertical-ruler';

const SegmentedLoader: React.FC = () => {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [currentSegment, setCurrentSegment] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const totalSegments = 6;

  useEffect(() => {
    // Avançar para o próximo segmento a cada 500ms
    const interval = setInterval(() => {
      setCurrentSegment((prev) => {
        if (prev >= totalSegments - 1) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return prev;
        }
        return prev + 1;
      });
    }, 500);

    // // Prevenir scroll durante o loading
    // const preventDefault = (e: Event) => e.preventDefault()
    // document.body.style.overflow = "hidden"
    // window.addEventListener("wheel", preventDefault, { passive: false })
    // window.addEventListener("touchmove", preventDefault, { passive: false })

    // return () => {
    //   clearInterval(interval)
    //   // Restaurar scroll
    //   document.body.style.overflow = "visible"
    //   window.removeEventListener("wheel", preventDefault)
    //   window.removeEventListener("touchmove", preventDefault)
    // }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className='z-[100] fixed inset-0 flex items-center justify-center bg-bg-white-0'
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
             <AnimatedVerticalRuler variant="left" />
      <AnimatedVerticalRuler variant="right" />
          <div className='items-center gap-2 w-[100%] md:w-1/2'>
            <span className='mr-2 text-gray-500'>
              <DotLottieReact
                src={isDarkMode ? './lotties/logo-darkmode.lottie' : './lotties/logo-lightmode.lottie'}
                loop
                autoplay
              />
            </span>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SegmentedLoader;

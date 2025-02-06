'use client';

import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useState } from 'react';

export const useLocoScroll = (start: boolean) => {
  const [locoScroll, setLocoScroll] = useState<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!start) return;

    import('locomotive-scroll').then((locomotiveModule) => {
      const scroll = new locomotiveModule.default({
        el: document.querySelector('[data-scroll-container]') as HTMLElement,
        smooth: true,
      });

      setLocoScroll(scroll);
    });

    return () => {
      locoScroll?.destroy();
    };
  }, [start]);

  return locoScroll;
};

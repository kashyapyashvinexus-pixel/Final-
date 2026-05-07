'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function PerformanceFix() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.config({
      ignoreMobileResize: true,
      autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
    });

    const refreshScroll = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', refreshScroll);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      window.removeEventListener('load', refreshScroll);
      clearTimeout(timer);
    };
  }, []);

  return null;
}

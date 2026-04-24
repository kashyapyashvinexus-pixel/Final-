'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function MouseGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      gsap.to(glowRef.current, {
        x: e.clientX - 160,
        y: e.clientY - 160,
        duration: 0.8,
        ease: 'power3.out'
      });
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return <div ref={glowRef} className="mouse-glow" aria-hidden="true" />;
}

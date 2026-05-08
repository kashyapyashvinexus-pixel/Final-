'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const heroRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-card', {
        scale: 1.08,
        opacity: 0,
        duration: 1.4,
        ease: 'power3.out',
      });
    }, heroRef);

    const move = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 35;
      const y = (window.innerHeight / 2 - e.clientY) / 35;

      if (cardRef.current) {
        gsap.to(cardRef.current, {
          x: -x,
          y: -y,
          duration: 0.8,
          ease: 'power3.out',
        });
      }
    };

    window.addEventListener('mousemove', move);

    return () => {
      window.removeEventListener('mousemove', move);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={heroRef} className="hero-section full-bleed">
      <div className="hero-overlay" />

      <div className="hero-layout hero-layout-pushed hero-layout-right-only">
        <motion.div
          ref={cardRef}
          className="hero-visual hover-panel"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
        >
          <div className="hero-card glass-card">
            <span>Infinity Projects Presents</span>

            <strong>The Future of Residential Excellence</strong>

            <p>
              Stellavia offers 140 luminous residences blending elegance,
              spacious living, serenity, and comfort seamlessly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

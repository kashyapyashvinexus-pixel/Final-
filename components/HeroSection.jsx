'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const heroRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-copy > *', {
        y: 48,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });

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

      <div className="hero-layout hero-layout-pushed">
        <div className="hero-copy">
          <p className="eyebrow">Premium Residential Construction</p>

          <h1 className="hero-title">
            We shape flats and apartments into landmark living experiences.
          </h1>

          <p className="lead body-large">
            Stellavia creates high-value residential spaces with sharp architecture,
            trusted construction, and presentation-worthy design details.
          </p>

          <div className="hero-actions">
            <Link href="/" className="primary-btn">
              Explore Projects
            </Link>

            <Link href="/" className="ghost-btn">
              View Floor Plans
            </Link>
          </div>
        </div>

        <motion.div
          ref={cardRef}
          className="hero-visual hover-panel"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
        >
          <div className="hero-card glass-card">
            <span>Signature Launch</span>
            <strong>Aurelia Heights</strong>
            <p>
              Luxury apartment towers with skyline amenities and elegant urban
              planning.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

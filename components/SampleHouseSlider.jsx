'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const slides = [
  {
    desktop: '/img/ST_CAM_07_FFF-r.jpg.jpeg',
    mobile: '/img/ST_CAM_07_FFF-r.jpg.jpeg',
  },
  {
    desktop: '/img/JB_CAM_16_FFF.webp',
    mobile: '/img/JB_CAM_16_FFF.webp',
  },
  {
    desktop: '/img/ST_CAM_02_FFF.webp',
    mobile: '/img/ST_CAM_02_FFF.webp',
  },
  {
    desktop: '/img/ST_CAM_01_FFF.webp',
    mobile: '/img/ST_CAM_01_FFF.webp',
  },
];

export default function SampleHouseSlider() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    slides.forEach((slide) => {
      const desktopImg = new Image();
      desktopImg.src = slide.desktop;

      const mobileImg = new Image();
      mobileImg.src = slide.mobile;
    });

    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth;
        const viewportWidth = window.innerWidth;
        return Math.max(0, trackWidth - viewportWidth);
      };

      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.fromTo(
        '.sample-img',
        {
          scale: 1.12,
        },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${getScrollAmount()}`,
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        }
      );

      ScrollTrigger.refresh();
    }, section);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="sample-slider" ref={sectionRef}>
      <div className="sample-pin-viewport">
        <div className="sample-track" ref={trackRef}>
          {slides.map((slide, index) => (
            <div className="sample-slide" key={index}>
              <picture>
                <source media="(max-width: 768px)" srcSet={slide.mobile} />
                <img
                  src={slide.desktop}
                  alt={`Stellavia sample house ${index + 1}`}
                  className="sample-img"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  draggable="false"
                />
              </picture>

              <div className="sample-overlay" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

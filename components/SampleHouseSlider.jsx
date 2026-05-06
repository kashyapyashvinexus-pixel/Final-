'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

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
  const slideRefs = useRef([]);
  const imageRefs = useRef([]);
  const activeRef = useRef(0);
  const intervalRef = useRef(null);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    slides.forEach((slide) => {
      const desktopImg = new Image();
      desktopImg.src = slide.desktop;

      const mobileImg = new Image();
      mobileImg.src = slide.mobile;
    });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      slideRefs.current.forEach((slide, index) => {
        if (!slide) return;

        gsap.set(slide, {
          xPercent: index === 0 ? 0 : 100,
          autoAlpha: index === 0 ? 1 : 0,
          zIndex: index === 0 ? 3 : 1,
        });
      });

      imageRefs.current.forEach((img, index) => {
        if (!img) return;

        gsap.set(img, {
          scale: index === 0 ? 1 : 1.08,
        });
      });

      const goToNextSlide = () => {
        if (isAnimatingRef.current) return;

        const currentIndex = activeRef.current;
        const nextIndex = (currentIndex + 1) % slides.length;

        const currentSlide = slideRefs.current[currentIndex];
        const nextSlide = slideRefs.current[nextIndex];
        const nextImg = imageRefs.current[nextIndex];

        if (!currentSlide || !nextSlide || !nextImg) return;

        isAnimatingRef.current = true;

        gsap.killTweensOf([currentSlide, nextSlide, nextImg]);

        gsap.set(currentSlide, {
          xPercent: 0,
          autoAlpha: 1,
          zIndex: 3,
        });

        gsap.set(nextSlide, {
          xPercent: -100,
          autoAlpha: 1,
          zIndex: 4,
        });

        gsap.set(nextImg, {
          scale: 1.08,
        });

        const tl = gsap.timeline({
          defaults: {
            ease: 'power4.inOut',
          },
          onComplete: () => {
            gsap.set(currentSlide, {
              xPercent: 100,
              autoAlpha: 0,
              zIndex: 1,
            });

            gsap.set(nextSlide, {
              xPercent: 0,
              autoAlpha: 1,
              zIndex: 3,
            });

            activeRef.current = nextIndex;
            isAnimatingRef.current = false;
          },
        });

        tl.to(
          currentSlide,
          {
            xPercent: 100,
            duration: 1.45,
          },
          0
        );

        tl.to(
          nextSlide,
          {
            xPercent: 0,
            duration: 1.45,
          },
          0
        );

        tl.to(
          nextImg,
          {
            scale: 1,
            duration: 1.8,
            ease: 'power3.out',
          },
          0
        );
      };

      intervalRef.current = setInterval(goToNextSlide, 5000);
    }, section);

    return () => {
      clearInterval(intervalRef.current);
      ctx.revert();
    };
  }, []);

  return (
    <section className="sample-slider" ref={sectionRef}>
      <div className="sample-pin-viewport">
        <div className="sample-track">
          {slides.map((slide, index) => (
            <div
              className="sample-slide"
              key={index}
              ref={(el) => {
                slideRefs.current[index] = el;
              }}
            >
              <picture>
                <source media="(max-width: 768px)" srcSet={slide.mobile} />
                <img
                  ref={(el) => {
                    imageRefs.current[index] = el;
                  }}
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

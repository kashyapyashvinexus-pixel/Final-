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
  const timerRef = useRef(null);
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
          zIndex: index === 0 ? 3 : 1,
          autoAlpha: index === 0 ? 1 : 0,
          clipPath:
            index === 0
              ? 'inset(0% 0% 0% 0%)'
              : 'inset(0% 100% 0% 0%)',
        });
      });

      imageRefs.current.forEach((img, index) => {
        if (!img) return;

        gsap.set(img, {
          scale: index === 0 ? 1 : 1.05,
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
          zIndex: 2,
          autoAlpha: 1,
          clipPath: 'inset(0% 0% 0% 0%)',
        });

        gsap.set(nextSlide, {
          zIndex: 4,
          autoAlpha: 1,
          clipPath: 'inset(0% 100% 0% 0%)',
        });

        gsap.set(nextImg, {
          scale: 1.05,
        });

        const tl = gsap.timeline({
          onComplete: () => {
            gsap.set(currentSlide, {
              zIndex: 1,
              autoAlpha: 0,
              clipPath: 'inset(0% 100% 0% 0%)',
            });

            gsap.set(nextSlide, {
              zIndex: 3,
              autoAlpha: 1,
              clipPath: 'inset(0% 0% 0% 0%)',
            });

            activeRef.current = nextIndex;
            isAnimatingRef.current = false;
          },
        });

        tl.to(
          nextSlide,
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            /*duration: 2.2,*/
            duration: 3.2,
            ease: 'power4.inOut',
          },
          0
        );

        tl.to(
          nextImg,
          {
            scale: 1,
            /*duration: 2.6,*/
            duration: 3.8,
            ease: 'power2.out',
          },
          0
        );
      };

      /*timerRef.current = setInterval(goToNextSlide, 6500);*/
      timerRef.current = setInterval(goToNextSlide, 8000);
    }, section);

    return () => {
      clearInterval(timerRef.current);
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

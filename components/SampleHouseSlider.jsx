'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const slides = [
  {
    desktop: '/img/ST_CAM_07_FFF-r.jpg.jpeg',
    mobile: '/mobile img/10.jpg',
  },
  {
    desktop: '/img/JB_CAM_16_FFF.webp',
    mobile: '/mobile img/5.jpg',
  },
  {
    desktop: '/img/ST_CAM_02_FFF.webp',
    mobile: '/mobile img/8.jpg',
  },
  {
    desktop: '/img/ST_CAM_01_FFF.webp',
    mobile: '/mobile img/7.jpg',
  },
];

export default function SampleHouseSlider() {
  const sectionRef = useRef(null);
  const slideRefs = useRef([]);
  const revealRefs = useRef([]);
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
        });
      });

      revealRefs.current.forEach((reveal, index) => {
        if (!reveal) return;

        gsap.set(reveal, {
          width: index === 0 ? '100%' : '0%',
        });
      });

      imageRefs.current.forEach((img) => {
        if (!img) return;

        gsap.set(img, {
          scale: 1,
        });
      });

      const goToNextSlide = () => {
        if (isAnimatingRef.current) return;

        const currentIndex = activeRef.current;
        const nextIndex = (currentIndex + 1) % slides.length;

        const currentSlide = slideRefs.current[currentIndex];
        const nextSlide = slideRefs.current[nextIndex];
        const nextReveal = revealRefs.current[nextIndex];

        if (!currentSlide || !nextSlide || !nextReveal) return;

        isAnimatingRef.current = true;

        gsap.killTweensOf([currentSlide, nextSlide, nextReveal]);

        gsap.set(currentSlide, {
          zIndex: 2,
          autoAlpha: 1,
        });

        gsap.set(nextSlide, {
          zIndex: 4,
          autoAlpha: 1,
        });

        gsap.set(nextReveal, {
          width: '0%',
        });

        const tl = gsap.timeline({
          onComplete: () => {
            gsap.set(currentSlide, {
              zIndex: 1,
              autoAlpha: 0,
            });

            gsap.set(nextSlide, {
              zIndex: 3,
              autoAlpha: 1,
            });

            gsap.set(nextReveal, {
              width: '100%',
            });

            activeRef.current = nextIndex;
            isAnimatingRef.current = false;
          },
        });

        tl.to(nextReveal, {
          width: '100%',
          duration: 5,
          ease: 'none',
        });
      };

      {/*timerRef.current = setInterval(goToNextSlide, 10000);*/}
      timerRef.current = setInterval(goToNextSlide, 8500);
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
              <div
                className="sample-reveal"
                ref={(el) => {
                  revealRefs.current[index] = el;
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

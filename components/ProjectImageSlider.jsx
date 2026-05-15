'use client';

import { useEffect, useRef } from 'react';

const projectSliderImages = [
  '/sample house image/01.webp',
  '/sample house image/31.webp',
  '/sample house image/06.webp',
  '/sample house image/29.webp',
  '/sample house image/07.webp',
  '/sample house image/26.webp',
  '/sample house image/16.webp',
  '/sample house image/24.webp',
];

export default function ProjectImageSlider() {
  const sliderRef = useRef(null);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const getSlideStep = () => {
      const card = slider.querySelector('.project-slider-card');
      if (!card) return 300;

      const sliderStyle = window.getComputedStyle(slider);
      const gap = parseFloat(sliderStyle.columnGap || sliderStyle.gap || '0');

      return card.getBoundingClientRect().width + gap;
    };

    const autoSlide = () => {
      if (isHoveringRef.current) return;

      const step = getSlideStep();
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      if (slider.scrollLeft + step >= maxScroll - 20) {
        slider.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
      } else {
        slider.scrollBy({
          left: step,
          behavior: 'smooth',
        });
      }
    };

    const interval = setInterval(autoSlide, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="project-slider-section">
      <p className="eyebrow">Projects</p>

      <h2>Stellavia Dream Home</h2>

      <p className="project-slider-subtitle">
        Exterior And Interior Design.
      </p>

      <div
        ref={sliderRef}
        className="project-slider"
        onMouseEnter={() => {
          isHoveringRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveringRef.current = false;
        }}
      >
        {projectSliderImages.map((image, index) => (
          <div className="project-slider-card" key={`${image}-${index}`}>
            <img
              src={image}
              alt={`Stellavia Project ${index + 1}`}
              loading={index < 3 ? 'eager' : 'lazy'}
              decoding="async"
              draggable="false"
            />
          </div>
        ))}
      </div>

      <a href="/projects" className="see-projects-link">
        See All Projects →
      </a>
    </section>
  );
}

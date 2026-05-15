'use client';

import { useEffect, useRef, useState } from 'react';

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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateButtons = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

    setCanScrollLeft(slider.scrollLeft > 10);
    setCanScrollRight(slider.scrollLeft < maxScrollLeft - 10);
  };

  const getScrollAmount = () => {
    const slider = sliderRef.current;
    if (!slider) return 320;

    const card = slider.querySelector('.project-slider-card');
    if (!card) return 320;

    const styles = window.getComputedStyle(slider);
    const gap = parseFloat(styles.gap || '0');

    return card.offsetWidth + gap;
  };

  const scrollSlider = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollBy({
      left: direction === 'left' ? -getScrollAmount() : getScrollAmount(),
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    updateButtons();

    slider.addEventListener('scroll', updateButtons);
    window.addEventListener('resize', updateButtons);

    return () => {
      slider.removeEventListener('scroll', updateButtons);
      window.removeEventListener('resize', updateButtons);
    };
  }, []);

  return (
    <section className="project-slider-section">
      <div className="project-slider-header">
        <div>
          <p className="eyebrow">Projects</p>

          <h2>Stellavia Dream Home</h2>

          <p className="project-slider-subtitle">
            Exterior And Interior Design.
          </p>
        </div>

        <div className="project-slider-arrows">
          <button
            type="button"
            className="project-arrow-btn"
            onClick={() => scrollSlider('left')}
            disabled={!canScrollLeft}
            aria-label="Previous project"
          >
            ←
          </button>

          <button
            type="button"
            className="project-arrow-btn"
            onClick={() => scrollSlider('right')}
            disabled={!canScrollRight}
            aria-label="Next project"
          >
            →
          </button>
        </div>
      </div>

      <div ref={sliderRef} className="project-slider">
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

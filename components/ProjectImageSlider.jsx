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
  const [activeIndex, setActiveIndex] = useState(0);

  const getCardStep = () => {
    const slider = sliderRef.current;
    if (!slider) return 320;

    const card = slider.querySelector('.project-slider-card');
    if (!card) return 320;

    const styles = window.getComputedStyle(slider);
    const gap = parseFloat(styles.gap || '0');

    return card.offsetWidth + gap;
  };

  const scrollToIndex = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const total = projectSliderImages.length;
    let newIndex = index;

    if (newIndex < 0) newIndex = total - 1;
    if (newIndex >= total) newIndex = 0;

    const step = getCardStep();

    slider.scrollTo({
      left: step * newIndex,
      behavior: 'smooth',
    });

    setActiveIndex(newIndex);
  };

  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      scrollToIndex(activeIndex - 1);
    } else {
      scrollToIndex(activeIndex + 1);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const step = getCardStep();
      const index = Math.round(slider.scrollLeft / step);
      setActiveIndex(Math.min(index, projectSliderImages.length - 1));
    };

    slider.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      slider.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section className="project-slider-section">
      <p className="eyebrow">Projects</p>

      <h2>Stellavia Dream Home</h2>

      <p className="project-slider-subtitle">
        Interior Design.
      </p>

      <div className="project-slider-area">
        <button
          type="button"
          className="project-image-arrow project-image-arrow-left"
          onClick={() => handleArrowClick('left')}
          aria-label="Previous image"
        >
          ←
        </button>

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

        <button
          type="button"
          className="project-image-arrow project-image-arrow-right"
          onClick={() => handleArrowClick('right')}
          aria-label="Next image"
        >
          →
        </button>
      </div>

      <div className="project-slider-dots">
        {projectSliderImages.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`project-slider-dot ${
              activeIndex === index ? 'active' : ''
            }`}
            onClick={() => scrollToIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      <a href="/projects/stellavia" className="see-projects-link">
        See All Projects →
      </a>
    </section>
  );
}

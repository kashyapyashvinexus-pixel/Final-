'use client';

import { useEffect, useState } from 'react';

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
  const [active, setActive] = useState(0);

  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.desktop;

      const mobileImg = new Image();
      mobileImg.src = slide.mobile;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="sample-slider">
      {slides.map((slide, index) => (
        <div
          className={`sample-slide ${active === index ? 'active' : ''}`}
          key={index}
        >
          <picture>
            <source media="(max-width: 768px)" srcSet={slide.mobile} />
            <img
              src={slide.desktop}
              alt={`Sample House ${index + 1}`}
              className="sample-img"
              loading={index === 0 ? 'eager' : 'lazy'}
              draggable="false"
            />
          </picture>
        </div>
      ))}

      <div className="sample-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={active === index ? 'active' : ''}
            onClick={() => setActive(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

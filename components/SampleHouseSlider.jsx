'use client';

import { useEffect, useState } from 'react';

const slides = [
  {
    desktop: '/img/JB_CAM_04_FFF.webp',
    mobile: '/img/JB_CAM_04_MOBILE.webp',
  },
  {
    desktop: '/img/JB_CAM_16_FFF.webp',
    mobile: '/img/JB_CAM_16_MOBILE.webp',
  },
  {
    desktop: '/img/ST_CAM_02_FFF.webp',
    mobile: '/img/ST_CAM_02_MOBILE.webp',
  },
  {
    desktop: '/img/ST_CAM_01_FFF.webp',
    mobile: '/img/ST_CAM_01_MOBILE.webp',
  },
];

export default function SampleHouseSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="sample-slider">
      <div
        className="sample-track"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="sample-slide" key={index}>
            <picture>
              <source media="(max-width: 768px)" srcSet={slide.mobile} />
              <img
                src={slide.desktop}
                alt={`Sample House ${index + 1}`}
                className="sample-img"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </picture>
          </div>
        ))}
      </div>
    </section>
  );
}

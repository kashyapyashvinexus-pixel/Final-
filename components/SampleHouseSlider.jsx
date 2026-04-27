'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const slides = [
  '/img/JB_CAM_04_FFF.webp',
  '/img/JB_CAM_16_FFF.webp',
  '/img/ST_CAM_02_FFF.webp',
  '/img/ST_CAM_01_FFF.webp',
];

export default function SampleHouseSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4200); // 2.5s hold + ~1.7s smooth slide

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="sample-slider">
      <div
        className="sample-track"
        style={{
          transform: `translateX(-${active * 100}%)`,
        }}
      >
        {slides.map((src, i) => (
          <div className="sample-slide" key={i}>
            <Image
              src={src}
              alt={`Slide ${i}`}
              fill
              priority={i === 0}
              sizes="100vw"
              className={`sample-img ${active === i ? 'active' : ''}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

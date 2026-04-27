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
  const [prev, setPrev] = useState(slides.length - 1);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(active);
      setActive((active + 1) % slides.length);
    }, 4200);

    return () => clearInterval(timer);
  }, [active]);

  return (
    <section className="sample-house-slider">
      {slides.map((src, index) => (
        <div
          key={src}
          className={[
            'sample-house-slide',
            index === active ? 'is-active' : '',
            index === prev ? 'is-prev' : '',
          ].join(' ')}
        >
          <Image
            src={src}
            alt={`Sample house ${index + 1}`}
            fill
            priority={index === 0}
            sizes="100vw"
            className="sample-house-img"
          />
        </div>
      ))}
    </section>
  );
}

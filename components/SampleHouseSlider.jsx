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
    const interval = setInterval(() => {
      setActive((current) => {
        setPrev(current);
        return (current + 1) % slides.length;
      });
    }, 6000); // ✔ hold + smooth timing

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="sample-slider">
      {slides.map((src, i) => (
        <div
          key={i}
          className={`slide 
            ${i === active ? 'active' : ''} 
            ${i === prev ? 'prev' : ''}`}
        >
          <Image
            src={src}
            alt={`slide-${i}`}
            fill
            priority={i === 0}
            sizes="100vw"
            className="slide-img"
          />
        </div>
      ))}
    </section>
  );
}

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
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="sample-slider">
      {slides.map((src, index) => (
        <div
          key={index}
          className={`slide ${index === active ? 'active' : ''} ${
            index === prev ? 'prev' : ''
          }`}
        >
          <Image
            src={src}
            alt={`Sample House ${index + 1}`}
            fill
            priority={index === 0}
            sizes="100vw"
            className="slide-img"
          />
        </div>
      ))}
    </section>
  );
}

'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const slides = [
  '/img/JB_CAM_04_FFF.webp',
  '/img/JB_CAM_16_FFF.webp',
  '/img/ST_CAM_02_FFF.webp',
  '/img/ST_CAM_01_FFF.webp',
];

export default function SampleHouseSlider() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(slides.length - 1);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prevActive) => {
        setPrev(prevActive);
        return (prevActive + 1) % slides.length;
      });
    }, 6500);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="sample-house-slider">
      {slides.map((src, index) => (
        <div
          key={index}
          className={`sample-house-slide 
            ${index === active ? 'is-active' : ''} 
            ${index === prev ? 'is-prev' : ''}`}
        >
          <Image
            src={src}
            alt="sample"
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

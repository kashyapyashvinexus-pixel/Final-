'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const slides = [
  '/img/JB_CAM_04_FFF.webp',
  '/img/JB_CAM_16_FFF.webp',
  '/img/ST_CAM_02_FFF.webp',
  '/img/ST_CAM_01_FFF.webp',
];

export default function SampleHouseSlider() {
  const [active, setActive] = useState(0);
  const sliderRef = useRef([]);
  const imgRef = useRef([]);

  useEffect(() => {
    let current = 0;

    const runSlider = () => {
      const next = (current + 1) % slides.length;

      const currentSlide = sliderRef.current[current];
      const nextSlide = sliderRef.current[next];

      const currentImg = imgRef.current[current];
      const nextImg = imgRef.current[next];

      // Bring next slide above
      gsap.set(nextSlide, { x: '100%', zIndex: 3 });
      gsap.set(currentSlide, { zIndex: 2 });

      // Timeline for smooth transition
      const tl = gsap.timeline();

      tl.to(currentSlide, {
        x: '-12%',
        duration: 2.6,
        ease: 'power4.inOut',
      });

      tl.to(
        nextSlide,
        {
          x: '0%',
          duration: 2.6,
          ease: 'power4.inOut',
        },
        0
      );

      // Zoom animation
      gsap.fromTo(
        nextImg,
        { scale: 1.08 },
        {
          scale: 1,
          duration: 6,
          ease: 'power2.out',
        }
      );

      current = next;
      setActive(next);
    };

    const interval = setInterval(runSlider, 6500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="sample-house-slider">
      {slides.map((src, index) => (
        <div
          key={index}
          ref={(el) => (sliderRef.current[index] = el)}
          className="sample-house-slide"
        >
          <Image
            ref={(el) => (imgRef.current[index] = el)}
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

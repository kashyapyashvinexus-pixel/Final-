'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const slides = [
  '/images/sample-house-1.jpg',
  '/images/sample-house-2.jpg',
  '/images/sample-house-3.jpg',
  '/images/sample-house-4.jpg',
];

export default function SampleHouseSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="sample-house-slider full-bleed">
      <div
        className="sample-house-track"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {slides.map((src, index) => (
          <div className="sample-house-slide" key={index}>
            <Image
              src={src}
              alt={`Sample house ${index + 1}`}
              fill
              priority={index === 0}
              className="sample-house-img"
            />
            <div className="sample-house-overlay">
              <p>Sample House</p>
              <h2>Experience Premium Living Before You Step In</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="sample-house-dots">
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

'use client';

import Image from 'next/image';

const slides = [
  '/img/JB_CAM_04_FFF.webp',
  '/img/JB_CAM_16_FFF.webp',
  '/img/ST_CAM_02_FFF.webp',
  '/img/ST_CAM_01_FFF.webp',
];

export default function SampleHouseSlider() {
  return (
    <section className="sample-slider">
      <div className="sample-track">
        {[...slides, ...slides].map((src, i) => (
          <div className="sample-slide" key={i}>
            <Image
              src={src}
              alt="Sample House"
              fill
              priority={i < 2}
              sizes="100vw"
              className="sample-img"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

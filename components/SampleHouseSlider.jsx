'use client';

import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

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
  useEffect(() => {
    slides.forEach((slide) => {
      const desktopImg = new Image();
      desktopImg.src = slide.desktop;

      const mobileImg = new Image();
      mobileImg.src = slide.mobile;
    });
  }, []);

  return (
    <section className="sample-slider">
      <Swiper
        modules={[Autoplay, Pagination]}
        className="sample-swiper"
        slidesPerView={1}
        loop={true}
        speed={1350}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="sample-slide">
            <picture>
              <source media="(max-width: 768px)" srcSet={slide.mobile} />
              <img
                src={slide.desktop}
                alt={`Stellavia sample house ${index + 1}`}
                className="sample-img"
                loading={index === 0 ? 'eager' : 'lazy'}
                draggable="false"
              />
            </picture>

            <div className="sample-overlay" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

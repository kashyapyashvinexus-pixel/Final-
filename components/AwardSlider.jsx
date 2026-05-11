'use client';

import { useEffect, useState } from 'react';

const awardSlides = [
  {
    image: '/logo/Jbp with CM.jpeg',
    label: 'Award-Winning Excellence',
    title: 'Times Realty Awards',
    subtitle: 'Gujarat 2026',
    desc: 'Stellavia is proud to be honored as the "Best Affordable Residential Project" by the Honorable Chief Minister of Gujarat, Shri Bhupendra Bhai Patel.',
  },
  {
    image: '/logo/Jbp with CM.jpeg',
    label: 'Trusted Residential Project',
    title: 'Premium Living',
    subtitle: 'Recognition 2026',
    desc: 'A proud milestone for Stellavia, celebrating thoughtful planning, quality construction, and a lifestyle designed for modern families.',
  },
];

export default function AwardSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % awardSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? awardSlides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const award = awardSlides[activeSlide];

  return (
    <section className="award-slider-section">
      <div className="award-slider-card">
        <span className="award-diamond award-top">◆</span>
        <span className="award-diamond award-bottom">◆</span>

        <button
          className="award-nav award-prev"
          onClick={prevSlide}
          aria-label="Previous award"
        >
          ‹
        </button>

        <button
          className="award-nav award-next"
          onClick={nextSlide}
          aria-label="Next award"
        >
          ›
        </button>

        <div className="award-slide" key={activeSlide}>
          <div className="award-image-area">
            <img
              src={award.image}
              alt={award.title}
              className="award-main-image"
            />
          </div>

          <div className="award-content-area">
            <p className="award-label">{award.label}</p>

            <h2>
              {award.title}
              <br />
              {award.subtitle}
            </h2>

            <div className="award-line">
              <span></span>
              <i>◆</i>
              <span></span>
            </div>

            <p className="award-desc">{award.desc}</p>
          </div>
        </div>

        <div className="award-dots">
          {awardSlides.map((_, index) => (
            <button
              key={index}
              className={`award-dot ${
                activeSlide === index ? 'active' : ''
              }`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to award ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

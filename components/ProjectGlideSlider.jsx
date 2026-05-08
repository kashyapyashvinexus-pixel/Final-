'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const projectSliderImages = [
  '/sample house image/01.webp',
  '/sample house image/31.webp',
  '/sample house image/06.webp',
  '/sample house image/29.webp',
  '/sample house image/07.webp',
  '/sample house image/26.webp',
  '/sample house image/16.webp',
  '/sample house image/24.webp',
];

export default function ProjectGlideSlider() {
  const glideRef = useRef(null);

  useEffect(() => {
    let glideInstance;
    let isMounted = true;

    async function initGlide() {
      const Glide = (await import('@glidejs/glide')).default;

      if (!isMounted || !glideRef.current) return;

      glideInstance = new Glide(glideRef.current, {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        gap: 28,
        autoplay: 2600,
        hoverpause: true,
        animationDuration: 1800,
        animationTimingFunc: 'cubic-bezier(0.45, 0, 0.2, 1)',
        peek: {
          before: 0,
          after: 110,
        },
        breakpoints: {
          1024: {
            perView: 2,
            gap: 22,
            peek: {
              before: 0,
              after: 70,
            },
          },
          768: {
            perView: 1,
            gap: 18,
            peek: {
              before: 0,
              after: 90,
            },
          },
          480: {
            perView: 1,
            gap: 14,
            peek: {
              before: 0,
              after: 55,
            },
          },
        },
      });

      glideInstance.mount();
    }

    initGlide();

    return () => {
      isMounted = false;

      if (glideInstance) {
        glideInstance.destroy();
      }
    };
  }, []);

  return (
    <section className="project-glide-section">
      <p className="eyebrow">Projects</p>

      <h2>Stellavia Dream Home</h2>

      <p className="project-glide-subtitle">
        Exterior And Interior Design.
      </p>

      <div className="project-glide glide" ref={glideRef}>
        <div className="glide__track project-glide-track" data-glide-el="track">
          <ul className="glide__slides project-glide-slides">
            {projectSliderImages.map((image, index) => (
              <li className="glide__slide project-glide-slide" key={image}>
                <div className="project-glide-card">
                  <img
                    src={image}
                    alt={`Stellavia Project ${index + 1}`}
                    loading={index < 3 ? 'eager' : 'lazy'}
                    decoding="async"
                    draggable="false"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link href="/projects" className="see-projects-link">
        See All Projects →
      </Link>
    </section>
  );
}

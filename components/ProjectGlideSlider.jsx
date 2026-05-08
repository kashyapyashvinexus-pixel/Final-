'use client';

import Link from 'next/link';

const projectGalleryImages = [
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
  return (
    <section className="project-gallery-section">
      <p className="eyebrow">Projects</p>

      <h2>Stellavia Dream Home</h2>

      <p className="project-gallery-subtitle">
        Exterior And Interior Design.
      </p>

      <div className="project-bento-gallery">
        {projectGalleryImages.map((image, index) => (
          <div className={`project-bento-card card-${index + 1}`} key={image}>
            <img
              src={image}
              alt={`Stellavia Project ${index + 1}`}
              loading={index < 4 ? 'eager' : 'lazy'}
              decoding="async"
              draggable="false"
            />
          </div>
        ))}
      </div>

      <Link href="/projects" className="see-projects-link">
        See All Projects →
      </Link>
    </section>
  );
}

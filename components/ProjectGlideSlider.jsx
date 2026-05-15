'use client';

import Link from 'next/link';

const projectGalleryImages = [
  '/img/JB_CAM_02_FFF-r.webp',
  '/img/JB_CAM_02_NIGHT_FFF-r.webp',
  '/img/JB_CAM_04_FFF-r.webp',
  '/img/JB_CAM_05_FFF-r.webp',
  '/img/JB_CAM_16_FFF-r.webp',
  '/img/JB_CAM_17_FFF-r.webp',
  '/img/ST_CAM_01_FFF-r.webp',
  '/img/ST_CAM_02_FFF-r.webp',
];

export default function ProjectGlideSlider() {
  return (
    <section className="project-gallery-section">
      <p className="eyebrow">Projects</p>

      <h2>Stellavia Dream Home</h2>

      <p className="project-gallery-subtitle">
        Exterior Design.
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

      <Link href="/projects/stellavia" className="see-projects-link">
        See Project →
      </Link>
    </section>
  );
}

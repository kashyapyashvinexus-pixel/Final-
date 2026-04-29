'use client';

const projectSliderImages = [
  '/img/project-1.webp',
  '/img/project-2.webp',
  '/img/project-3.webp',
  '/img/project-4.webp',
  '/img/project-5.webp',
  '/img/project-6.webp',
  '/img/project-7.webp',
  '/img/project-8.webp',
  '/img/project-9.webp',
  '/img/project-10.webp',
  '/img/project-11.webp',
  '/img/project-12.webp',
  '/img/project-13.webp',
  '/img/project-14.webp',
  '/img/project-15.webp',
  '/img/project-16.webp',
  '/img/project-17.webp',
  '/img/project-18.webp',
  '/img/project-19.webp',
  '/img/project-20.webp',
  '/img/project-21.webp',
  '/img/project-22.webp',
  '/img/project-23.webp',
];

export default function ProjectImageSlider() {
  return (
    <section className="project-slider-section">
      <p className="eyebrow">Projects</p>
      <h2>Stellavia Sample House</h2>
      <p className="project-slider-subtitle">Exterior And Interior Design.</p>

      <div className="project-slider">
        <div className="project-slider-track">
          {[...projectSliderImages, ...projectSliderImages].map((image, index) => (
            <div className="project-slider-card" key={index}>
              <img src={image} alt={`Stellavia Project ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <a href="/projects" className="see-projects-link">
        See All Projects →
      </a>
    </section>
  );
}

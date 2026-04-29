'use client';

const projectSliderImages = [
  '/sample house/01.webp',
  '/sample house/02.webp',
  '/sample house/03.webp',
  '/sample house/04.webp',
  '/sample house/05.webp',
  '/sample house/06.webp',
  '/sample house/07.webp',
  '/sample house/08.webp',
  '/sample house/09.webp',
  '/sample house/10.webp',
  '/sample house/11.webp',
  '/sample house/12.webp',
  '/sample house/13.webp',
  '/sample house/14.webp',
  '/sample house/15.webp',
  '/sample house/16.webp',
  '/sample house/17.webp',
  '/sample house/18.webp',
  '/sample house/19.webp',
  '/sample house/20.webp',
  '/sample house/21.webp',
  '/sample house/22.webp',
  '/sample house/23.webp',
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

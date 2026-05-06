'use client';

const projectSliderImages = [
  '/sample house image/01.webp',
  '/sample house image/31.webp',
  '/sample house image/06.webp',
  '/sample house image/29.webp',
  '/sample house image/07.webp',
  '/sample house image/26.webp',
  '/sample house image/16.webp',
  '/sample house image/24.webp',
  '/sample house image/08.webp',
  {/*'/sample house image/35.webp',
  '/sample house image/19.webp',
  '/sample house image/38.webp',
  '/sample house image/12.webp',
  '/sample house image/39.webp',
  '/sample house image/15.webp',
  '/sample house image/33.webp',*/}
  
];

export default function ProjectImageSlider() {
  return (
    <section className="project-slider-section">
      <p className="eyebrow">Projects</p>
      <h2>Stellavia Dream Home</h2>
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

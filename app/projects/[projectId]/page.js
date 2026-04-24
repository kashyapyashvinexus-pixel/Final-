import Link from 'next/link';
import { notFound } from 'next/navigation';
import SectionHeading from '@/components/SectionHeading';
import StructuredData from '@/components/StructuredData';
import { projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((project) => ({ projectId: project.id }));
}

export function generateMetadata({ params }) {
  const project = projects.find((item) => item.id === params.projectId);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.name} in ${project.location}`,
    description: `${project.name} by Stellavia Construction offers ${project.summary.toLowerCase()} Explore floor plans, amenities, brochure details, and project highlights.`
  };
}

export default function ProjectDetailPage({ params }) {
  const project = projects.find((item) => item.id === params.projectId);
  if (!project) notFound();

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Residence',
    name: project.name,
    description: project.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: project.location,
      addressCountry: 'IN'
    }
  };

  return (
    <>
      <StructuredData data={data} />
      <section className="project-detail-hero full-bleed" style={{ backgroundImage: `linear-gradient(120deg, rgba(9,9,9,0.82), rgba(9,9,9,0.28)), url(${project.heroImage})` }}>
        <div className="section-block project-hero-inner">
          <div>
            <p className="eyebrow light">Single Project Page</p>
            <h1>{project.name}</h1>
            <p className="lead project-lead">{project.description}</p>
          </div>
          <div className="project-stats-card glass-card">
            <div className="metric-grid">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <small>{metric.label}</small>
                  <strong>{metric.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <SectionHeading eyebrow="Project Overview" title={project.summary} text="This page now works as a full single-project landing page with amenities, image sections, brochure access, and floor plan storytelling." />
        <div className="highlights-grid">
          {project.highlights.map((item, index) => (
            <article key={item} className="highlight-card hover-panel">
              <span>0{index + 1}</span>
              <h3>{item}</h3>
              <p>Premium planning detail curated for modern apartment buyers.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block alt-surface">
        <SectionHeading eyebrow="Gallery" title="A more visual single-project experience" text="Use this section for tower renders, interiors, amenities, and construction progress visuals." />
        <div className="gallery-mosaic">
          {project.gallery.map((image, index) => (
            <article key={image} className={`gallery-card gallery-card-${index + 1}`}>
              <img src={image} alt={`${project.name} gallery ${index + 1}`} />
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeading eyebrow="Floor Plans" title="3D-style plan blocks connected directly to the project" text="Each plan can be shown like a premium brochure section with size, beds, baths, and facing information." />
        <div className="project-plan-stack">
          {project.floorPlans.map((plan) => (
            <article key={plan.code} className="plan-feature-card hover-panel">
              <div className="plan-feature-visual">
                <img src={plan.image} alt={plan.title} />
                <div className="floating-plan-chip">3D Floor Visual</div>
              </div>
              <div className="plan-feature-info">
                <span>{plan.code}</span>
                <h3>{plan.title}</h3>
                <div className="plan-meta plan-meta-strong">
                  <p>{plan.size}</p>
                  <p>{plan.bedrooms}</p>
                  <p>{plan.baths}</p>
                  <p>{plan.facing}</p>
                </div>
                <div className="modern-plan-drawing">
                  <div className="plan-box large">Living + Dining</div>
                  <div className="plan-box">Foyer</div>
                  <div className="plan-box">Kitchen</div>
                  <div className="plan-box">Master Bed</div>
                  <div className="plan-box">Bedroom</div>
                  <div className="plan-box">Balcony</div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="project-cta-row">
          <Link href={`/brochure/${project.id}`} className="primary-btn">Open Brochure Page</Link>
        </div>
      </section>
    </>
  );
}

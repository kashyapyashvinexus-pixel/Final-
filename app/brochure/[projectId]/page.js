import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import { projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((project) => ({ projectId: project.id }));
}

export function generateMetadata({ params }) {
  const project = projects.find((item) => item.id === params.projectId);
  if (!project) return { title: 'Brochure Not Found' };
  return {
    title: `${project.name} Brochure`,
    description: `View the brochure-style presentation for ${project.name}, including lifestyle visuals, amenities, and floor plan blocks.`
  };
}

export default function BrochurePage({ params }) {
  const project = projects.find((item) => item.id === params.projectId);
  if (!project) notFound();

  return (
    <>
      <StructuredData data={{ '@context': 'https://schema.org', '@type': 'CreativeWork', name: `${project.name} Brochure`, about: project.name }} />
      <section className="brochure-page">
        <div className="brochure-panel brochure-hero full-bleed" style={{ backgroundImage: `linear-gradient(120deg, rgba(9,9,9,0.82), rgba(9,9,9,0.36)), url(${project.heroImage})` }}>
          <div className="section-block brochure-hero-inner">
            <div>
              <p className="eyebrow light">Project Brochure</p>
              <h1>{project.name}</h1>
              <p className="lead project-lead">{project.brochureSummary}</p>
            </div>
            <Link href={`/projects/${project.id}`} className="ghost-btn ghost-dark">Back To Project <ArrowRight size={16} /></Link>
          </div>
        </div>

        <div className="brochure-panel section-block brochure-content-grid">
          <div>
            <p className="eyebrow">Project Story</p>
            <h2>Luxury residential identity with smooth scroll transitions.</h2>
          </div>
          <div className="brochure-copy-card hover-panel">
            <p>The brochure page is designed like a premium scrolling presentation with image sections, amenity focus, and floor plan comparison blocks.</p>
          </div>
        </div>

        <div className="brochure-panel brochure-dual section-block alt-surface">
          <div className="parallax-media brochure-media-large hover-panel">
            <img src={project.gallery[0]} alt={project.name} />
          </div>
          <div className="brochure-side-stack">
            <div className="brochure-copy-card hover-panel">
              <span className="eyebrow">Amenities</span>
              <h3>Elevated common spaces and premium resident experience.</h3>
              <p>{project.highlights.join(' • ')}</p>
            </div>
            <div className="brochure-copy-card hover-panel">
              <span className="eyebrow">Configurations</span>
              <div className="metric-grid dark-copy">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <small>{metric.label}</small>
                    <strong>{metric.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="brochure-panel section-block brochure-plan-columns">
          {project.floorPlans.map((plan) => (
            <article key={plan.code} className="brochure-plan-card hover-panel">
              <img src={plan.image} alt={plan.title} />
              <div className="brochure-plan-content">
                <span>{plan.code}</span>
                <h3>{plan.title}</h3>
                <p>{plan.size} • {plan.bedrooms} • {plan.baths}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

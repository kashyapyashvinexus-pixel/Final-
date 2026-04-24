import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'Floor Plans',
  description: 'Explore 3D-style apartment floor plan presentations by Stellavia Construction with direct links to each single project page.'
};

function PlanMiniDraw() {
  return (
    <div className="diagram-grid">
      <div className="diagram-room big">Living + Dining</div>
      <div className="diagram-room">Kitchen</div>
      <div className="diagram-room">Master</div>
      <div className="diagram-room">Bedroom</div>
      <div className="diagram-room">Bath</div>
      <div className="diagram-room">Balcony</div>
    </div>
  );
}

export default function FloorPlansPage() {
  const floorPlans = projects.flatMap((project) =>
    project.floorPlans.map((plan) => ({ ...plan, projectId: project.id, projectName: project.name }))
  );

  return (
    <section className="page-hero plans-surface">
      <div className="section-block narrow-top">
        <SectionHeading
          eyebrow="Floor Plans"
          title="A single page with 3D plan images and layout presentation."
          text="Designed as a premium floor plan page with large visuals, plan styling, and direct access to the related single project page."
        />
        <div className="project-plan-stack">
          {floorPlans.map((plan) => (
            <article className="plan-feature-card hover-panel" key={`${plan.projectId}-${plan.code}`}>
              <div className="plan-feature-visual">
                <img src={plan.image} alt={plan.title} />
                <div className="floating-plan-chip">3D Floor Visual</div>
              </div>
              <div className="plan-feature-info">
                <span>{plan.projectName}</span>
                <h3>{plan.title}</h3>
                <div className="plan-meta plan-meta-strong">
                  <p>{plan.code}</p>
                  <p>{plan.size}</p>
                  <p>{plan.bedrooms}</p>
                  <p>{plan.baths}</p>
                </div>
                <PlanMiniDraw />
                <Link href={`/projects/${plan.projectId}`} className="inline-link">View Single Project Page</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

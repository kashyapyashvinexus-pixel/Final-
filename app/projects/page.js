import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import BuiltForLifeSection from '@/components/BuiltForLifeSection';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'Projects',
  description:
    'Explore completed and ongoing residential projects by Stellavia Construction, including premium apartments, amenities, brochures, and project details.',
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero projects-surface">
        <div className="section-block narrow-top">
          <SectionHeading
            eyebrow="Projects"
            title="All completed and in-progress developments in one premium project grid."
            text="Each project card opens into a dedicated SEO-ready project page with key metrics, highlights, gallery, floor plans, and brochure access."
          />

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <BuiltForLifeSection />
    </>
  );
}

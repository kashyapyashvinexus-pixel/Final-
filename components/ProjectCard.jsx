import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card hover-panel">
      <Link href={`/projects/${project.id}`} className="project-image-wrap">
        <img src={project.image} alt={`${project.name} residential project`} className="project-image" />
        <span className={`project-badge ${project.status === 'In Progress' ? 'progress' : ''}`}>{project.status}</span>
      </Link>
      <div className="project-content">
        <div className="meta-row">
          <span>{project.location}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="project-title">{project.name}</h3>
        <p className="project-type">{project.type}</p>
        <p className="body-text">{project.summary}</p>
        <div className="project-bottom-row">
          <Link href={`/projects/${project.id}`} className="project-link">View Project <ArrowRight size={16} /></Link>
          <Link href={`/brochure/${project.id}`} className="project-link">Brochure <ArrowRight size={16} /></Link>
        </div>
      </div>
    </article>
  );
}

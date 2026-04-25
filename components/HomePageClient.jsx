'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import HeroSection from './HeroSection';
import StatsStrip from './StatsStrip';
import SampleHouseSlider from './SampleHouseSlider';
import AmenitiesFlip from './AmenitiesFlip';
import ScrollOverlapGallery from './ScrollOverlapGallery';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

import { featuredProjects, homeGallery } from '@/data/projects';

export default function HomePageClient() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <SampleHouseSlider />
      <AmenitiesFlip />

      <ScrollOverlapGallery images={homeGallery.slice(0, 5)} />

      <section className="section-block">
        <SectionHeading
          eyebrow="Projects"
          title="Completed and under-construction projects presented with brochure-ready detail."
          text="Every project card opens into a dedicated single project page with highlights, metrics, floor plans, and brochure access."
        />

        <div className="projects-slider">
          <div className="projects-track">
            {featuredProjects.concat(featuredProjects).map((project, index) => (
              <div className="projects-slide" key={`${project.id}-${index}`}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        <div className="project-cta-row">
          <Link href="/projects" className="inline-link">
            See All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="section-block alt-surface">
        <SectionHeading
          eyebrow="Home Gallery"
          title="Extra premium imagery added to the home page for a richer launch feel."
          text="This section gives the home page more luxury visual depth with full-width, edge-to-edge imagery."
        />

        <div className="home-gallery-grid">
          {homeGallery.map((image, index) => (
            <motion.article
              key={image}
              className={`home-gallery-card home-gallery-card-${index + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
            >
              <img src={image} alt={`Luxury apartment visual ${index + 1}`} />
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="split-showcase">
          <div className="split-showcase-card hover-panel">
            <div className="mini-plan">
              <span>3D Floor Plan View</span>
              <strong>Single page floor plan presentation</strong>
              <p>Clean, premium plan storytelling for buyers and brochure sections.</p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Floor Plans"
              title="A separate floor plan page with 3D image-style layouts and apartment plan previews."
              text="Your floor plan section is structured to look premium, mobile-friendly, and suitable for launch campaigns."
            />
            <Link href="/floor-plans" className="primary-btn">
              Open Floor Plans
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

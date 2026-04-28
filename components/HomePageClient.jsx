'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import HeroSection from './HeroSection';
import StatsStrip from './StatsStrip';
import SampleHouseSlider from './SampleHouseSlider';
import AmenitiesFlip from './AmenitiesFlip';
import ScrollOverlapGallery from './ScrollOverlapGallery';
import SectionHeading from './SectionHeading';
import ContactBookingSection from './ContactBookingSection';

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
          title="Stellavia Sample House"
          text="Exterior And Interior Design."
        />

        <div className="projects-marquee">
          <div className="projects-marquee-track">
            {[...featuredProjects, ...featuredProjects].map((project, index) => (
              <div className="projects-marquee-item" key={`${project.id}-${index}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-marquee-image"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="project-cta-row">
          <Link href="/" className="inline-link">
            See All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <ContactBookingSection />
    </>
  );
}

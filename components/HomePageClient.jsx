'use client';

import dynamic from 'next/dynamic';

import HeroSection from './HeroSection';
import AwardShowcaseSection from './AwardShowcaseSection';
import AwardLuxurySection from './AwardLuxurySection';
import SampleHouseSlider from './SampleHouseSlider';
import AmenitiesFlip from './AmenitiesFlip';
import ScrollOverlapGallery from './ScrollOverlapGallery';
import HeroVideoSection from './HeroVideoSection';
import StrategicallyConnectedSection from './StrategicallyConnectedSection';
import ContactBookingSection from './ContactBookingSection';

import { homeGallery } from '@/data/projects';

const ProjectImageSlider = dynamic(() => import('./ProjectImageSlider'), {
  ssr: false,
  loading: () => <div className="slider-loading-space" />,
});

const ProjectGlideSlider = dynamic(() => import('./ProjectGlideSlider'), {
  ssr: false,
  loading: () => <div className="slider-loading-space" />,
});

export default function HomePageClient() {
  return (
    <main className="home-page-smooth">
      <HeroSection />

      <AwardShowcaseSection />
      <AwardLuxurySection />

      <SampleHouseSlider />
      <AmenitiesFlip />

      <ScrollOverlapGallery images={homeGallery.slice(0, 5)} />

      <HeroVideoSection />

      <ProjectImageSlider />
      <ProjectGlideSlider />

      <StrategicallyConnectedSection />
      <ContactBookingSection />
    </main>
  );
}

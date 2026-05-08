'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import HeroSection from './HeroSection';
import StatsStrip from './StatsStrip';
import SampleHouseSlider from './SampleHouseSlider';
import AmenitiesFlip from './AmenitiesFlip';
import ScrollOverlapGallery from './ScrollOverlapGallery';
import HeroVideoSection from './HeroVideoSection';
import ProjectImageSlider from './ProjectImageSlider';
import ProjectGlideSlider from './ProjectGlideSlider';
import StrategicallyConnectedSection from './StrategicallyConnectedSection';
import ContactBookingSection from './ContactBookingSection';

import { homeGallery } from '@/data/projects';

export default function HomePageClient() {
  return (
    <>
      <HeroSection />

      <StatsStrip />

      <SampleHouseSlider />

      <AmenitiesFlip />

      <ScrollOverlapGallery images={homeGallery.slice(0, 5)} />

      <HeroVideoSection />

      <ProjectImageSlider />

      <ProjectGlideSlider />
    
      
      <StrategicallyConnectedSection />

      <ContactBookingSection />
    </>
  );
}

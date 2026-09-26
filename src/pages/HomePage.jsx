import React from 'react';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import FeaturedProduct from '../sections/FeaturedProduct';
import OtherProjects from '../sections/OtherProjects';
import TechStackSection from '../sections/TechStackSection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <FeaturedProduct />
      <OtherProjects />
      <TechStackSection />
    </div>
  );
}
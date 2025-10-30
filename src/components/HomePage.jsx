import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import HowItWorks from './HowItWorks';
import ShowcaseSlider from './ShowcaseSlider';
import CustomStudio from './CustomStudio';
import Testimonials from './Testimonials';
import FinalCTA from './FinalCTA';

const HomePage = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <HowItWorks />
      <ShowcaseSlider />
      <CustomStudio />
      <Testimonials />
      <FinalCTA />
    </main>
  );
};

export default HomePage;

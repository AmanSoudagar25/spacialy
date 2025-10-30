import React, { useState } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import HowItWorks from './HowItWorks';
import ShowcaseSlider from './ShowcaseSlider';
import CustomStudio from './CustomStudio';
import Testimonials from './Testimonials';
import FinalCTA from './FinalCTA';
import UploadModal from './UploadModal';

const HomePage = () => {
  const [uploadOpen, setUploadOpen] = useState(false);

  const onUploadClick = () => setUploadOpen(true);

  return (
    <main>
      <Header onUploadClick={onUploadClick} />
      <HeroSection onUploadClick={onUploadClick} />
      <HowItWorks />
      <ShowcaseSlider />
      <CustomStudio />
      <Testimonials />
      <FinalCTA onUploadClick={onUploadClick} />
      <UploadModal open={uploadOpen} onClose={() => setUploadOpen(false)} onFileSelected={(f) => { /* placeholder for future */ }} />
    </main>
  );
};

export default HomePage;

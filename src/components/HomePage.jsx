import React, { useState } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import HowItWorks from './HowItWorks';
import ShowcaseSlider from './ShowcaseSlider';
import CustomStudio from './CustomStudio';
import Testimonials from './Testimonials';
import FinalCTA from './FinalCTA';
import UploadModal from './UploadModal';
import AnalysisPanel from './AnalysisPanel';

const HomePage = () => {
  const [uploadOpen, setUploadOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState('');
  const [showAnalysis, setShowAnalysis] = useState(false);

  const onUploadClick = () => setUploadOpen(true);

  return (
    <main>
      <Header onUploadClick={onUploadClick} />
      <HeroSection onUploadClick={onUploadClick} />
      <HowItWorks />
      <ShowcaseSlider />
      <CustomStudio />
      {showAnalysis && <AnalysisPanel uploadedUrl={uploadedUrl} />}
      <Testimonials />
      <FinalCTA onUploadClick={onUploadClick} />
      <UploadModal
        open={uploadOpen}
        onClose={() => setUploadOpen(false)}
        onFileSelected={(file, url) => { setUploadedFile(file); setUploadedUrl(url); }}
        onContinue={() => setShowAnalysis(true)}
      />
    </main>
  );
};

export default HomePage;

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
import { sendToN8n } from '../services/api';

const HomePage = () => {
  const [uploadOpen, setUploadOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState('');
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [analysisData, setAnalysisData] = useState(null);

  const onUploadClick = () => setUploadOpen(true);

  const handleContinue = async () => {
    setShowAnalysis(true);
    if (uploadedFile && import.meta.env.VITE_N8N_WEBHOOK_URL) {
      try {
        const result = await sendToN8n(uploadedFile);
        if (!result._skipped) setAnalysisData(result);
      } catch (e) {
        // Fallback to mock handled inside AnalysisPanel if no data
        console.error('n8n error', e);
        setAnalysisData(null);
      }
    } else {
      setAnalysisData(null);
    }
  };

  return (
    <main>
      <Header onUploadClick={onUploadClick} />
      <HeroSection onUploadClick={onUploadClick} />
      <HowItWorks />
      <ShowcaseSlider />
      <CustomStudio />
      {showAnalysis && <AnalysisPanel uploadedUrl={uploadedUrl} analysisData={analysisData} />}
      <Testimonials />
      <FinalCTA onUploadClick={onUploadClick} />
      <UploadModal
        open={uploadOpen}
        onClose={() => setUploadOpen(false)}
        onFileSelected={(file, url) => { setUploadedFile(file); setUploadedUrl(url); }}
        onContinue={handleContinue}
      />
    </main>
  );
};

export default HomePage;

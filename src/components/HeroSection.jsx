import React, { useEffect, useState } from 'react';

const ROOM_IMAGE = 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2c5a?q=80&w=1600&auto=format&fit=crop';
const SOFA_IMAGE = 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=1200&auto=format&fit=crop';

const HeroSection = () => {
  const [sofaVisible, setSofaVisible] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setSofaVisible(true);
      setTimeout(() => setSofaVisible(false), 2000);
    }, 3600);
    setTimeout(() => setSofaVisible(true), 400); // initial fade-in
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section" style={{ paddingTop: 88 }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 32, alignItems: 'center' }}>
        <div>
          <h1 className="h1">Your Room, Reimagined.</h1>
          <p className="p subtle" style={{ marginBottom: 24 }}>
            See furniture from top stores in your actual space before you buy. Upload a photo to start the magic.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button className="button-primary">
              Upload Your Room Photo
            </button>
          </div>
          <div className="subtle" style={{ fontSize: 14, marginTop: 10 }}>
            No sign-up required to try for free.
          </div>
        </div>

        <div className="card" style={{ position: 'relative', overflow: 'hidden', height: 380 }}>
          <img
            src={ROOM_IMAGE}
            alt="Empty room"
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.95) brightness(1.02)' }}
          />
          <img
            src={SOFA_IMAGE}
            alt="Modern sofa"
            style={{
              position: 'absolute',
              left: '8%',
              right: '8%',
              bottom: 24,
              width: '84%',
              height: 'auto',
              objectFit: 'contain',
              boxShadow: '0 20px 40px rgba(0,0,0,0.18)',
              borderRadius: 10,
              opacity: sofaVisible ? 1 : 0,
              transform: sofaVisible ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 700ms ease, transform 700ms ease',
            }}
          />
          <div style={{ position: 'absolute', left: 18, top: 18, background: 'rgba(255,255,255,0.9)', padding: '8px 12px', borderRadius: 10, fontWeight: 600 }}>
            Your Room...
          </div>
          <div style={{ position: 'absolute', right: 18, bottom: 18, background: 'rgba(14,124,134,0.92)', color: '#fff', padding: '8px 12px', borderRadius: 10, fontWeight: 600 }}>
            ...Reimagined
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

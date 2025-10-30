import React, { useRef, useState } from 'react';

const BEFORE = 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2c5a?q=80&w=1600&auto=format&fit=crop';
const AFTER = 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop';

const ShowcaseSlider = () => {
  const [value, setValue] = useState(50);
  const clamp = (v) => Math.max(0, Math.min(100, v));

  return (
    <section className="section">
      <div className="container">
        <h2 className="h2" style={{ textAlign: 'center', marginBottom: 24 }}>Drag to See the Transformation.</h2>

        <div className="card" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative', width: '100%', height: 420 }}>
            <img src={BEFORE} alt="Before" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, width: `${value}%`, overflow: 'hidden' }}>
              <img src={AFTER} alt="After" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: `calc(${value}% - 1px)`, width: 2, background: 'rgba(255,255,255,0.9)', boxShadow: '0 0 0 1px rgba(0,0,0,0.06)' }} />

            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={(e) => setValue(clamp(parseInt(e.target.value, 10)))}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0, cursor: 'ew-resize' }}
              aria-label="Before after slider"
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', alignItems: 'center', marginTop: 18, flexWrap: 'wrap' }}>
          <div className="subtle">Featuring Products From Your Favorite Stores:</div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" style={{ height: 22 }} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Flipkart_logo.png" alt="Flipkart" style={{ height: 22 }} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Wayfair_logo.svg" alt="Wayfair" style={{ height: 22 }} />
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSlider;

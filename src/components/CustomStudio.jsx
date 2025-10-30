import React, { useEffect, useState } from 'react';

const WHITE_BG_TABLE = 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop';
const STAGED_TABLE = 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1600&auto=format&fit=crop';

const CustomStudio = () => {
  const fullText = 'A round, oak coffee table with thin, brass legs.';
  const [typed, setTyped] = useState('');
  const [showStaged, setShowStaged] = useState(false);

  useEffect(() => {
    let i = 0;
    let afterTypeTimeout = null;
    const interval = setInterval(() => {
      setTyped(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
        afterTypeTimeout = setTimeout(() => setShowStaged(true), 600);
      }
    }, 35);
    return () => {
      clearInterval(interval);
      if (afterTypeTimeout) clearTimeout(afterTypeTimeout);
    };
  }, []);

  return (
    <section id="custom" className="section section-muted">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, alignItems: 'center' }}>
        <div>
          <h2 className="h2">Can't Find The Perfect Piece? Invent It.</h2>
          <p className="p subtle" style={{ marginBottom: 18 }}>
            Our AI Design Studio lets you create the exact furniture you're dreaming of. Describe it, visualize it in your room, and then connect with skilled local craftspeople to bring your unique vision to life.
          </p>
          <button className="button-primary">Learn More About Custom Designs</button>
        </div>
        <div className="card" style={{ overflow: 'hidden' }}>
          <div style={{ padding: 16 }}>
            <div className="card" style={{ padding: '12px 14px', borderRadius: 10, background: '#f1f5f9', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}>
              {typed}<span style={{ opacity: 0.6 }}>|</span>
            </div>
          </div>
          <div style={{ position: 'relative', height: 280 }}>
            <img src={WHITE_BG_TABLE} alt="Custom table on white" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: showStaged ? 0 : 1, transition: 'opacity 700ms ease' }} />
            <img src={STAGED_TABLE} alt="Custom table staged" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: showStaged ? 1 : 0, transition: 'opacity 700ms ease' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomStudio;

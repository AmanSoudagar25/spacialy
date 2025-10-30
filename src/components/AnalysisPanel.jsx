import React, { useEffect, useMemo, useState } from 'react';
import { analyzeRoom } from '../services/api';

const SOFA_OVERLAY = 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=1200&auto=format&fit=crop';

const ColorSwatch = ({ color }) => (
  <div title={color} style={{ width: 28, height: 28, borderRadius: 6, background: color, border: '1px solid rgba(0,0,0,0.06)' }} />
);

const AnalysisPanel = ({ uploadedUrl }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    analyzeRoom()
      .then((d) => { if (mounted) { setData(d); setLoading(false); } })
      .catch((e) => { if (mounted) { setError(e.message || 'Error'); setLoading(false); } });
    return () => { mounted = false; };
  }, [uploadedUrl]);

  if (!uploadedUrl) return null;

  return (
    <section className="section" style={{ paddingTop: 24 }}>
      <div className="container">
        <h2 className="h2" style={{ marginBottom: 8 }}>Your Space — Instant Design Brief</h2>
        {loading && (
          <div className="card center" style={{ height: 180 }}>
            <div className="subtle">Analyzing your room…</div>
          </div>
        )}
        {error && (
          <div className="card" style={{ padding: 16, color: '#b91c1c', background: '#fee2e2' }}>Error: {error}</div>
        )}
        {!loading && data && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div className="card" style={{ padding: 16 }}>
              <div style={{ fontWeight: 700, marginBottom: 8 }}>AI Summary</div>
              <div className="subtle" style={{ marginBottom: 10 }}>Style: <strong>{data.analysis.style}</strong></div>
              <div className="subtle" style={{ marginBottom: 10 }}>Lighting: <strong>{data.analysis.lighting}</strong></div>
              <div className="subtle" style={{ marginBottom: 12 }}>{data.analysis.notes}</div>
              <div style={{ display: 'flex', gap: 8 }}>
                {data.analysis.colorPalette.map((c) => <ColorSwatch key={c} color={c} />)}
              </div>
            </div>

            <div className="card" style={{ padding: 16 }}>
              <div style={{ fontWeight: 700, marginBottom: 8 }}>Staged Preview</div>
              <div style={{ position: 'relative', height: 260, overflow: 'hidden', borderRadius: 12 }}>
                <img src={uploadedUrl} alt="Uploaded room" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <img src={SOFA_OVERLAY} alt="Staged sofa" style={{ position: 'absolute', left: '8%', right: '8%', bottom: 16, width: '84%', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))' }} />
              </div>
            </div>
          </div>
        )}

        {!loading && data && (
          <div style={{ marginTop: 20 }}>
            <div style={{ fontWeight: 700, marginBottom: 10 }}>Perfect Matches</div>
            <div className="grid-3">
              {data.recommendations.map((p) => (
                <a key={p.id} href={p.affiliateUrl} target="_blank" rel="noreferrer" className="card" style={{ textDecoration: 'none', color: 'inherit', overflow: 'hidden' }}>
                  <div style={{ height: 160, position: 'relative' }}>
                    <img src={p.image} alt={p.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: 12 }}>
                    <div style={{ fontWeight: 700 }}>{p.name}</div>
                    <div className="subtle" style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>{p.store}</span>
                      <span>{p.price}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AnalysisPanel;

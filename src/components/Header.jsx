import React from 'react';

const Header = ({ onUploadClick }) => {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.9)', backdropFilter: 'saturate(180%) blur(8px)', borderBottom: '1px solid rgba(15,23,42,0.06)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--accent)' }} />
          <div style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>Spacialy</div>
        </div>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <a href="#how" className="subtle" style={{ textDecoration: 'none' }}>How it works</a>
          <a href="#custom" className="subtle" style={{ textDecoration: 'none' }}>Custom Studio</a>
          <a href="#examples" className="subtle" style={{ textDecoration: 'none' }}>Examples</a>
          <button className="button-primary" onClick={onUploadClick}>Upload Photo</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

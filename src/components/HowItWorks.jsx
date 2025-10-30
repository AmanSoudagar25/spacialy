import React from 'react';

const Item = ({ icon, title, text }) => (
  <div className="card" style={{ padding: 20, textAlign: 'left' }}>
    <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
    <div style={{ fontWeight: 700, marginBottom: 6 }}>{title}</div>
    <div className="subtle" style={{ lineHeight: 1.6 }}>{text}</div>
  </div>
);

const HowItWorks = () => {
  return (
    <section id="how" className="section section-muted">
      <div className="container">
        <h2 className="h2" style={{ textAlign: 'center', marginBottom: 24 }}>So Simple, It Feels Like Magic.</h2>
        <div className="grid-3">
          <Item icon="📸" title="UPLOAD" text="Snap a photo of your space. Our AI analyzes its style, layout, and lighting." />
          <Item icon="🪄" title="VISUALIZE" text="See perfectly matched furniture from top stores staged realistically in your photo." />
          <Item icon="🛒🔨" title="SHOP (OR CREATE)" text="Love what you see? Buy it with one click. Or design a custom piece and connect with artisans to build it." />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

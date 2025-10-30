import React from 'react';

const FinalCTA = ({ onUploadClick }) => {
  return (
    <section className="section section-muted">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="h2">Ready to See Your Future Room?</h2>
        <p className="p subtle" style={{ margin: '8px 0 18px' }}>Stop guessing. Start visualizing. Your dream space is just one photo away.</p>
        <button className="button-primary" onClick={onUploadClick}>Upload Your Room Photo</button>
      </div>
    </section>
  );
};

export default FinalCTA;

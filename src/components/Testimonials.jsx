import React from 'react';

const testimonials = [
  { name: 'Priya S.', location: 'Mumbai', quote: 'I was too scared to buy a big sofa online until I used Spacialy. Seeing it in my living room first was a total game-changer!', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop' },
  { name: 'Arjun M.', location: 'Bengaluru', quote: 'The recommendations matched my style perfectly. Bought with confidence.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
  { name: 'Sara K.', location: 'Delhi', quote: 'Designed a custom coffee table and had it built by a local artisan. Incredible!', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop' },
];

const Testimonials = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2" style={{ textAlign: 'center', marginBottom: 24 }}>Loved by Home Decorators Everywhere</h2>
        <div style={{ display: 'grid', gap: 16, gridAutoFlow: 'column', gridAutoColumns: 'minmax(280px, 1fr)', overflowX: 'auto', paddingBottom: 8 }}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="card" style={{ padding: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                <img src={t.avatar} alt={t.name} style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <div style={{ fontWeight: 700 }}>{t.name}</div>
                  <div className="subtle" style={{ fontSize: 13 }}>{t.location}</div>
                </div>
              </div>
              <div className="subtle" style={{ lineHeight: 1.6 }}>
                “{t.quote}”
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

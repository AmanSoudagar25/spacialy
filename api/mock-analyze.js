export default async function handler(req, res) {
  // In production, you'd parse the multipart/form-data and run AI analysis.
  // For now, return deterministic placeholder data.
  const recommendations = [
    {
      id: 'sofa-1',
      name: 'Modern Blue Sofa',
      price: '₹39,999',
      store: 'Amazon',
      affiliateUrl: 'https://www.amazon.in/',
      image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'lamp-1',
      name: 'Minimal Floor Lamp',
      price: '₹4,499',
      store: 'Flipkart',
      affiliateUrl: 'https://www.flipkart.com/',
      image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'rug-1',
      name: 'Neutral Textured Rug',
      price: '₹7,299',
      store: 'Wayfair',
      affiliateUrl: 'https://www.wayfair.com/',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop',
    }
  ];

  res.status(200).json({
    analysis: {
      style: 'Modern Minimalist',
      colorPalette: ['#cdd7df', '#0e7c86', '#f5f5f5', '#1c1f24'],
      lighting: 'Soft, natural daylight from the left',
      notes: 'Open layout with light wood floors and neutral walls; prefers cool accent tones.'
    },
    recommendations,
  });
}

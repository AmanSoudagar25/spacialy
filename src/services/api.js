export async function analyzeRoom() {
  // For now we do not upload the file; the endpoint returns mock data.
  const res = await fetch('/api/mock-analyze', { method: 'GET' });
  if (!res.ok) throw new Error('Failed to analyze');
  return await res.json();
}

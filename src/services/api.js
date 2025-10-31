export async function analyzeRoom() {
  // Fallback mock analysis (local serverless func)
  const res = await fetch('/api/mock-analyze', { method: 'GET' });
  if (!res.ok) throw new Error('Failed to analyze');
  return await res.json();
}

export async function sendToN8n(file) {
  const webhook = import.meta.env.VITE_N8N_WEBHOOK_URL || 'https://amansworkspace.app.n8n.cloud/webhook-test/spacialy/analyze';
  const base64 = await fileToBase64(file);
  const payload = {
    filename: file.name,
    mimeType: file.type || 'application/octet-stream',
    base64,
    metadata: { source: 'web', ts: Date.now() },
  };
  const res = await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`n8n webhook error: ${res.status} ${text}`);
  }
  return await res.json();
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(',').pop());
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

# Spacialy

Visual-first AI interior design homepage built with Vite + React.

## Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:5173

## Production Build

```bash
npm run build
npm run preview
```

Output is generated in `dist/`.

## Deploy to Vercel (via GitHub)

1) Initialize and push repository
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

2) Create deployment on Vercel
- Go to https://vercel.com → New Project → Import your GitHub repo
- Framework Preset: Vite (auto)
- Build Command: `npm run build`
- Output Directory: `dist`
- Deploy → obtain your live URL

Subsequent changes: push to GitHub; Vercel auto-builds previews and production.

## n8n + Gemini Integration (optional)
If you have an n8n webhook that triggers a workflow to analyze the uploaded image (e.g., via Google Gemini), set this env var in Vite:

- Create `/.env.local` in the project root with:
```
VITE_N8N_WEBHOOK_URL=https://<your-n8n-host>/webhook/<id>
```

Client sends JSON like:
```json
{
  "filename": "room.jpg",
  "mimeType": "image/jpeg",
  "base64": "<base64-string>",
  "metadata": { "source": "web", "ts": 1710000000000 }
}
```

Expected n8n response (example):
```json
{
  "analysis": {
    "style": "Modern Minimalist",
    "colorPalette": ["#cdd7df", "#0e7c86", "#f5f5f5", "#1c1f24"],
    "lighting": "Soft daylight from left",
    "notes": "..."
  },
  "recommendations": [
    { "id": "sofa-1", "name": "..", "price": "..", "store": "Amazon", "affiliateUrl": "..", "image": ".." }
  ]
}
```

If `VITE_N8N_WEBHOOK_URL` is not set, the app falls back to a local mock analysis.

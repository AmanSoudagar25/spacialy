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

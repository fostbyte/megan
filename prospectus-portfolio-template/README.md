# Prospectus: a free portfolio template

A fund prospectus: key facts box, contents with dot leaders, a track-record table, fee schedule and footnoted references.

Designed by Fuccura Studio. Free to use for yourself or your clients under the MIT licence (see LICENSE).

Want it without touching code? Open it in the Fuccura editor, click any text to change it, and publish on your own domain:
https://fuccura.com/editor/prospectus

## Run it

You need Node.js 20 or newer (nodejs.org).

```bash
npm install
npm run dev        # opens http://localhost:5173
```

## Make it yours

1. **Your words:** edit `src/content.json` (name, title, introduction, projects, services, contact…). Leave a section empty and it disappears.
2. **Your images:** put them in `public/` and use their path, e.g. `"/me.jpg"`, or any https:// image link.
3. **Colours and fonts:** in `src/content.json` set `design.palette` to one of the ids in `src/template.json` (`navy`, `banknote`, `charcoal`) and `design.font` to one of (`newsreader`, `caslon`). `design.accent` takes any hex colour, e.g. `"#d4380d"`.
4. **Hide a section:** add its name to `design.hidden`, e.g. `["testimonials"]`.
5. **The layout itself** lives in `src/template/Prospectus.tsx` (React + Tailwind CSS).

## Put it online (free)

```bash
npm run build      # creates the dist/ folder
```

Upload `dist/` to any static host: Netlify Drop (drag the folder onto app.netlify.com/drop), Cloudflare Pages, GitHub Pages or Vercel. Then connect your domain in that host's settings.

Prefer us to host it, keep it updated and handle the domain? https://fuccura.com/pricing

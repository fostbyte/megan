# Megan Foster — Supply Chain Portfolio (Prospectus Edition)

A high-performance, editorial portfolio website for **Megan Foster**, Junior studying **Supply Chain Management** at the **University of South Florida (USF)**. Designed in the style of an institutional fund prospectus: key facts box, contents with dot leaders, track-record investment table, 6-cell operational competencies grid, and footnoted references.

Live preview ready, optimized for recruiters, and zero-config deployment to **Netlify**.

---

## 🚀 Features

- **Prospectus Aesthetic**: Editorial typography pairing Google Fonts `Newsreader` (serif headers & quotes), `IBM Plex Sans` (body), and `IBM Plex Mono` (dates, tabular metrics, and dot leaders).
- **Interactive Palette Switcher**: Instant switching between:
  - **Navy & Cream** (Default warm paper with deep navy and heritage USF green)
  - **Banknote** (Financial paper with olive and bronze accents)
  - **Charcoal & Gold** (Luxury dark mode)
- **Key Facts Summary Box**: Quick-scan definition list detailing location, USF enrollment, 100% on-time fulfillment, 200+ managed SKUs, and immediate/summer internship availability.
- **Track Record Table**: Tabular presentation of founder-level and operational engagements with quantifiable outcomes.
- **One-Click Resume Access**: Direct links to download or view Megan's official resume ([`docs/Megan_Foster_Resume.pdf`](docs/Megan_Foster_Resume.pdf)).
- **Fast Contact & Copy**: One-click copying for phone and email with toast feedback, plus a direct inquiry contact form.
- **Print Optimization**: Clean `@media print` rules for generating a physical 2–3 page printed executive prospectus.
- **Netlify Ready**: Zero-configuration static hosting configured with `netlify.toml` (publishing root `.`).

---

## 🛠️ Local Preview & Development

### Static Website (Root)
Open `index.html` directly in any web browser, or run a local server:

```bash
# Python
python3 -m http.server 8080

# Or npx serve
npx serve .
```
Visit `http://localhost:8080`.

### React Template (`prospectus-portfolio-template/`)
If you wish to run the template in React/Vite mode:

```bash
cd prospectus-portfolio-template
npm install
npm run dev
```

---

## 🌐 Deploy to Netlify

### Option 1: Netlify CLI
```bash
npx netlify deploy --prod --dir=.
```

### Option 2: Connect via GitHub
1. Push this repository to GitHub.
2. In [Netlify Dashboard](https://app.netlify.com), import this repository.
3. Publish directory is preset to `.` in `netlify.toml`.
4. Click **Deploy Site**.

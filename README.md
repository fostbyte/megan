# Megan Foster - Supply Chain Portfolio

A clean, high-performance, single-page portfolio website for **Megan Foster**, Junior studying **Supply Chain Management** at the **University of South Florida (USF)**.

Live preview ready, optimized for Fortune 500 recruiters, and zero-config deployment to **Netlify**.

---

## 🚀 Features

- **Supply Chain Focus**: Highlights procurement, inventory control (FIFO & par levels), high-volume logistics, and small business leadership.
- **Rich Aesthetic Design**: Deep slate & obsidian theme with USF green/gold accents, frosted glass cards, and micro-interactions.
- **One-Click Resume Access**: Direct links to download or view Megan's official resume (`docs/Megan_Foster_Resume.pdf`).
- **Interactive Contact & Fast Copy**: One-click email & phone copying with toast feedback, plus a pre-formatted inquiry form.
- **100% Responsive**: Tailored layout for mobile, tablet, and desktop screens with smooth navigation.
- **Netlify Ready**: Zero-configuration static hosting configured with `netlify.toml`.

---

## 🖼️ Swapping Placeholder Photos

All images are neatly organized inside the [`pictures/`](pictures/) folder with modern SVG placeholders. You can easily swap them out anytime:

| Section | Placeholder File | Recommended File to Swap In |
|---|---|---|
| **Headshot** | `pictures/profile-placeholder.svg` | `pictures/profile.jpg` (or `.png`) |
| **Boutique Sourcing** | `pictures/teeny-theenys-boutique.svg` | `pictures/teeny-theenys-boutique.jpg` |
| **Inventory & FIFO** | `pictures/inventory-logistics.svg` | `pictures/inventory-logistics.jpg` |
| **Event Logistics** | `pictures/event-logistics.svg` | `pictures/event-logistics.jpg` |
| **USF / Education** | `pictures/usf-campus.svg` | `pictures/usf-campus.jpg` |

> See [`pictures/README.md`](pictures/README.md) for detailed image dimension recommendations and instructions.

---

## 🛠️ Local Development

Open `index.html` directly in your browser, or start a local static server:

```bash
# Using python
python3 -m http.server 8080

# Or using npx serve
npx serve .
```

Then visit `http://localhost:8080`.

---

## 🌐 Deploy to Netlify

### Option 1: Netlify CLI
```bash
npx netlify deploy --prod --dir=.
```

### Option 2: Connect via GitHub
1. Push this repository to GitHub.
2. In [Netlify Dashboard](https://app.netlify.com), click **Add new site** > **Import an existing project**.
3. Select this GitHub repository.
4. Set publish directory to `.` (already pre-configured in `netlify.toml`).
5. Click **Deploy Site**.

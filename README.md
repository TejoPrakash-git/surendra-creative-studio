# Surendra Creative Studio — Portfolio Website

A dark, cinematic portfolio built with React + Vite for a freelance graphic designer /
video editor. Signature motif: a filmstrip / clapperboard theme (sprocket-hole dividers,
"SCENE 01" service numbering) tying the design to the subject's work in poster and film editing.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel, "Add New Project" → import the repo.
3. Framework preset: **Vite** (auto-detected). Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

A `vercel.json` rewrite is already included so refreshing any route still loads the app.

## Before you go live — replace these placeholders

- `src/components/Contact.jsx` — email, phone number and social links are placeholders.
- `src/components/WhatsAppButton.jsx` and `Contact.jsx` — WhatsApp number `919000000000` is a placeholder (format: country code + number, no `+` or spaces, in the `wa.me/` link).
- `src/components/Testimonials.jsx` — sample client reviews; swap in real ones once you have them, or remove the section until you do.
- `src/components/Portfolio.jsx` — the gallery uses labeled placeholder frames instead of real images. To add real project images, drop them in `public/` and replace the `<div className="portfolio__frame-media">` content with an `<img src="/your-image.jpg" />`.
- `index.html` — update the favicon and Open Graph tags if you add a real logo/preview image.

## Tech

- React 18 + Vite
- Plain CSS (no framework) — design tokens live in `src/index.css`
- Fonts: Bebas Neue (display), Inter (body), JetBrains Mono (labels/mono)
# surendra-creative-studio

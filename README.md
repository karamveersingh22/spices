# Giani Enterprises — Demo Website

A single-page brochure website for **Giani Enterprises** (GIANI), a wholesale spice
supplier in Chaura Bazar, Ludhiana, Punjab. Built as a fast, self-contained static
site — no build step, no framework.

## Preview locally

**Option A — just open it:** double-click `index.html`.

**Option B — local server** (recommended, so relative paths & the map behave exactly
like production):

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Files

```
index.html        All page content & sections
css/styles.css    Design system, layout, responsive rules, animations
js/main.js        Nav toggle, scroll reveal, and the Call/WhatsApp wiring
images/           Stock spice photos (royalty-free)
```

## ⭐ Before going live — client to provide

Edit the single `CONTACT` block at the top of **`js/main.js`**:

```js
const CONTACT = {
  PHONE: '+91 XXXXX XXXXX',   // real phone (tap-to-call)
  WHATSAPP: '91XXXXXXXXXX',   // wa.me format: 91 + 10-digit number, no +, no spaces
  WA_MESSAGE: '...'           // optional pre-filled WhatsApp message
};
```

Change once here and **every** Call / WhatsApp button on the page updates.

Also confirm with the client before publishing:
- ✅ Real phone / WhatsApp number
- ✅ Current wholesale prices (the shown ₹/kg figures are indicative)
- ✅ Business email (if an email link/form is wanted later)
- ✅ Exact business hours
- ✅ Logo (optional — currently a clean text wordmark)
- ✅ Real product photos (optional — currently royalty-free stock)

## Deploy for free

The site is fully static, so hosting costs nothing. The client's only real recurring
cost is the **domain name (~₹700–1,200/yr)**.

1. **Netlify** — go to app.netlify.com → "Add new site" → "Deploy manually" → drag this
   whole folder in. Live in seconds. Then add the custom domain under Domain settings.
2. **Cloudflare Pages** or **GitHub Pages** work the same way (upload folder / connect repo).

Point the domain's DNS at the host (each provider gives step-by-step instructions), and
the site is live at `www.gianienterprises.com` (or whichever domain is bought).

## Notes
- Images are royalty-free stock (Unsplash) — free for commercial use.
- Google Fonts: Playfair Display (headings) + Poppins (body).
- The map uses a public Google Maps embed for the Kesar Ganj Chowk address.

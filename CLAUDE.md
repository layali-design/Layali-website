# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NOVA CAFE is a static single-page website for a premium halal cafe in South C, Nairobi. No build step, no framework, no dependencies — open `index.html` directly in a browser to preview.

**Live site:** `https://novacafe-design.github.io/Novacafe-website/`
**GitHub repo:** `https://github.com/novacafe-design/Novacafe-website`
**Contact:** `novacafe.ke@gmail.com`

## Previewing & Deploying

**Local preview:** Open `index.html` directly in any browser. No server needed.

**Deploy:** Push to `main` — GitHub Pages auto-deploys within ~1 minute.

```bash
git add <files>
git commit -m "your message"
git push origin main
```

Hard-refresh with Ctrl+F5 after deploying to clear browser cache.

## Architecture

Four files, each with a clear responsibility:

| File | Role | Edit frequency |
|---|---|---|
| `menu.js` | Menu data (`MENU` array) + renderer | Most often |
| `index.html` | Page structure and all copy | Often |
| `styles.css` | All styling via CSS variables | Occasionally |
| `script.js` | Nav scroll/mobile toggle, form handler, scroll reveal | Rarely |

**No build pipeline.** `styles.css` is a single flat file (~1100 lines), not split into modules. `script.js` uses vanilla JS with no imports.

### How the menu works

`menu.js` defines a `MENU` array of category objects. Each category has `id`, `label`, `title`, `description`, and `items[]`. The renderer (bottom half of `menu.js`, after the `DO NOT EDIT BELOW` comment) reads this array on `DOMContentLoaded` and builds the tabs + item cards into `#menuTabs` and `#menuContent` in `index.html`. The tabs in `index.html` are empty `<div>`s — always populated by JS.

Item shape:
```js
{ name: "Item Name", desc: "Short description.", price: "450", tag: "new|veg|spicy|", img: "URL" }
```

### How images work

All images use CSS `background-image`, not `<img>` tags (except menu item thumbnails in the JS renderer). Key slots in `styles.css`:

| CSS selector | Section | Current source |
|---|---|---|
| `.hero-image` | Full-bleed hero | `images/nova-exterior.jpeg` (actual cafe photo) |
| `.story-img` | Story section portrait | Unsplash URL |
| `.g1`–`.g6 .g-img` | Gallery grid | `.g6` uses `images/nova-exterior.jpeg`; others are Unsplash URLs |

Local photos live in `images/`. Menu item thumbnails use external URLs (Unsplash) with an `onerror` fallback that shows the item's first letter.

### CSS design tokens

All colours and spacing are CSS variables at the top of `styles.css` under `:root`. Changing a variable updates the whole site:

```css
--bronze: #a87a3d;      /* primary accent — buttons, prices, highlights */
--brown-deep: #3d2613;  /* darkest tone — headings, dark sections */
--bg: #f6efe4;          /* warm cream page background */
--font-display: 'Cormorant Garamond', ...;
--font-body: 'Inter', ...;
--max: 1320px;          /* max content width */
--pad: clamp(1.25rem, 4vw, 3rem); /* responsive horizontal padding */
```

### Reservation form

`handleReservation()` in `script.js` is a placeholder — it simulates a delay and resets the form. To make it functional, replace the `<form>` with a Formspree action URL (see `README.md` for instructions).

## Common Edits

**Change a price or description** → edit the relevant object in the `MENU` array in `menu.js`.

**Add/remove a menu item** → add/remove an object in the appropriate `items[]` array. Every item except the last in its array needs a trailing comma.

**Change contact details (phone, email, address, hours)** → `index.html`, `<!-- VISIT / CONTACT -->` section.

**Change hero headline or story copy** → `index.html`, `<!-- HERO -->` or `<!-- STORY -->` sections.

**Add a real photo** → put it in `images/`, then update the relevant `background-image` URL in `styles.css`.

**Change social links** → `index.html`, search for `Instagram`.

## Git Setup Note

This folder was initialized as a git repo locally (not cloned). The remote is:
```bash
git remote add origin https://github.com/novacafe-design/Layali-website.git
```
If git isn't initialized, run the above two commands before pushing.

## Pending Items

- **Reservation form:** wired to Formspree (mykodwqg) — live, posting to novacafe.ke@gmail.com.
- **Reservation form:** not wired to a real email endpoint yet.
- **Story section image** (`.story-img`): still uses an Unsplash placeholder — replace with a real cafe interior photo.
- **Gallery slots g1–g5**: still use Unsplash stock photos.

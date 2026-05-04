# NOVA CAFE — Website

A premium halal cafe website in Nairobi.

## File Structure

```
nova-cafe/
├── index.html      ← Main site structure (rarely edit)
├── styles.css      ← All styling: colours, fonts, layout
├── menu.js         ← THE MENU — edit this often
├── script.js       ← Site interactions (rarely edit)
└── README.md
```

## Editing the Menu

Open **`menu.js`**. The menu is structured as 5 categories — Coffee, Tea & Specialty, Breakfast, Lunch & Mains, Pastry & Bakery.

### Change a price
```js
{ name: "Cappuccino", desc: "...", price: "450", tag: "" }
                                          ↑ edit this
```

### Add a new item
Copy any existing line and edit:
```js
{ name: "New Drink", desc: "Short description.", price: "500", tag: "new" },
```
**Note the comma at the end** — every item except the last in a category needs one.

### Remove an item
Delete the entire line, including the trailing comma.

### Tags
Set `tag` to one of:
- `"new"` — bronze "New" badge
- `"veg"` — green "Veg" badge
- `"spicy"` — orange "Spicy" badge
- `""` — no tag (most items)

### Add a whole new category
Copy an entire `{ id: ..., label: ..., title: ..., description: ..., items: [...] }` block.
The `id` must be unique and lowercase, no spaces.

## Editing Other Things

| What you want to change       | File         | What to look for                  |
|-------------------------------|--------------|-----------------------------------|
| Phone, email, address, hours  | `index.html` | The `<!-- VISIT / CONTACT -->` section |
| Hero headline & tagline       | `index.html` | The `<!-- HERO -->` section       |
| About / Story copy            | `index.html` | The `<!-- STORY -->` section      |
| Brand colours                 | `styles.css` | Top of file — `:root { --bronze: ... }` |
| Fonts                         | `styles.css` | `--font-display` and `--font-body`|
| Social links                  | `index.html` | Search for `Instagram`            |

### Changing colours

In `styles.css`, the top section has all the colours:
```css
--bronze: #a87a3d;     /* main accent — buttons, prices */
--brown-deep: #3d2613; /* darkest — headings, dark sections */
--cream: #faf5ec;      /* light text on dark */
--bg: #f6efe4;         /* page background */
```
Change the hex codes and the whole site updates.

## Deploying to GitHub Pages

1. Create a new GitHub repository (public).
2. Upload all four files (`index.html`, `styles.css`, `menu.js`, `script.js`) — and this README — to the root of the repo.
3. In the repo go to **Settings → Pages**.
4. Under **Source**, select branch `main` and folder `/ (root)`. Click **Save**.
5. Wait ~1 minute. Your site will be live at:
   `https://<your-username>.github.io/<repo-name>/`

### Connecting your custom domain

Once you buy a domain (e.g. `novacafe.com`):

1. In **Settings → Pages**, enter your domain in the **Custom domain** field and save.
2. At your domain registrar, add these DNS records pointing to GitHub Pages:
   - **A** records to: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **CNAME** record (for `www`) pointing to: `<your-username>.github.io`
3. Back on GitHub, tick **Enforce HTTPS** once it's available (usually within an hour).

## Connecting the Reservation Form

Right now the form shows a "Thank you" message but doesn't email anyone. To make it work:

**Option 1 — Formspree (easiest, free for ~50 submissions/month)**
1. Sign up at formspree.io and create a form.
2. In `index.html`, find `<form class="visit-form" onsubmit="handleReservation(event)">` and change to:
   ```html
   <form class="visit-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. Remove the `onsubmit` handler.
4. Submissions will be emailed to you automatically.

**Option 2 — Netlify Forms** (if you switch hosting to Netlify, also free).

## Photos

The current site uses styled gradient placeholders for images. To replace with real photos:

1. Add your photos to a `images/` folder in the repo.
2. In `styles.css`, find the gallery and story image sections and replace the gradient backgrounds with `background-image: url('images/your-photo.jpg');`.

Recommended photo sizes:
- Story image: 1200×1500px (portrait)
- Gallery: 1400×1000px (landscape) or 1000×1000px (square)
- Use JPG, compressed to ~150-300KB per image.

---

**Need to make a change and not sure how?** The structure is designed so that 95% of edits happen in `menu.js` and `index.html`. Take a copy before editing — and you can always revert via GitHub history.

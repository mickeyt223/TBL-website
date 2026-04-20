# TBL Website

A premium marketing site for an outdoor lighting business. Built with Astro + Tailwind, deployed as a static site on Render.

- **Framework:** Astro (static output)
- **Styling:** Tailwind CSS
- **Content:** one file — `src/content/site.ts`
- **Host:** Render (free tier, static site)

---

## One-time setup

You need [Node.js 20+](https://nodejs.org/) installed.

```bash
# from the project root
npm install
npm run dev
```

The site runs at http://localhost:4321. Saving any file auto-reloads the page.

### Common commands

| Command | What it does |
|---|---|
| `npm run dev` | Starts the local dev server |
| `npm run build` | Builds the production site into `dist/` |
| `npm run preview` | Serves the production build locally |

---

## How to update your site

Almost everything you'll want to change lives in **one file**: [`src/content/site.ts`](src/content/site.ts).

### Change any text

1. Open `src/content/site.ts`
2. Edit the text you want to change (inside the quotes)
3. Save, commit, push:
   ```bash
   git add .
   git commit -m "Update hero copy"
   git push
   ```
4. Render redeploys in ~60 seconds.

### Swap a photo

1. Save the new photo into `public/images/` **using the same filename** as the existing one (e.g., replace `public/images/hero.jpg` with your own `hero.jpg`).
2. Commit and push — Render redeploys in ~60 seconds.
3. See [`PLACEHOLDER_IMAGES.md`](PLACEHOLDER_IMAGES.md) for a map of which file shows up where.

### Add a testimonial

In `src/content/site.ts`, find the `testimonials` array and add another block:

```ts
{
  quote: "Great crew, lovely result.",
  author: "Sarah",
},
```

### Change the phone number or email

Edit `business.phone` or `business.email` in `src/content/site.ts`. These are used across the whole site automatically (header, footer, contact section, tel/mailto links).

### Undo a change you regret

```bash
git revert HEAD
git push
```

That rolls back the last commit and redeploys the previous version.

---

## Filling in the placeholders

When the site is first built, a bunch of values in `src/content/site.ts` look like `[BUSINESS NAME]` or `[XXX-XXX-XXXX]`. Replace each one with your real info, then commit and push.

The placeholders to replace on day one:

- `business.name`
- `business.tagline`
- `business.phone`
- `business.email`
- `business.serviceArea`
- `business.socials.instagram` / `.facebook` / `.google`
- `contact.formEndpoint` (currently `mailto:[EMAIL]` — update the `[EMAIL]` or swap for a real endpoint; see "Wiring up the contact form" below)
- `footer.tagline`

---

## Wiring up the contact form

The form currently uses `mailto:` — when someone submits, it opens **their** email client with the data pre-filled. That works but isn't ideal for most leads.

To switch to [Formspree](https://formspree.io/) (free tier, no backend required):

1. Sign up for Formspree, create a new form, copy the endpoint URL (looks like `https://formspree.io/f/abcdwxyz`).
2. In `src/content/site.ts`, set:
   ```ts
   contact: {
     ...
     formEndpoint: "https://formspree.io/f/abcdwxyz",
   }
   ```
3. In `src/components/Contact.astro`, remove the `enctype="text/plain"` attribute from the `<form>` tag. Keep `method="POST"`.
4. Commit, push, done.

---

## Deploying to Render

The project has a `render.yaml` at the root, so Render can detect everything automatically.

### First-time setup

1. Create a new GitHub repo and push this project to it:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
2. Log in to [Render](https://render.com/).
3. Click **New +** → **Static Site** → connect the GitHub repo.
4. Render auto-detects `render.yaml`. Accept the defaults and click **Create Static Site**.
5. After the first build (~2 minutes), your site is live at `https://YOUR-PROJECT.onrender.com`.

### Every deploy after that

Just push to `main`. Render rebuilds and redeploys automatically.

### Custom domain

In the Render dashboard → your site → **Settings** → **Custom Domains** → add your domain and follow the DNS instructions.

---

## Project structure

```
.
├── public/
│   ├── favicon.svg
│   └── images/                 ← all site imagery (swap files here)
├── scripts/
│   └── download-placeholders.sh ← re-run to refresh stock placeholders
├── src/
│   ├── components/             ← one component per section
│   ├── content/
│   │   └── site.ts             ← THIS FILE controls all copy + image paths
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro         ← single home page; composes components
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── render.yaml                 ← Render deployment blueprint
├── PLACEHOLDER_IMAGES.md       ← where each image appears
└── README.md
```

---

## Future enhancements (out of scope for v1)

Any of these can be added later — just ask Claude Code "Add [thing] to the site":

- Blog / CMS
- Multi-page site (separate `/services`, `/gallery`, `/about`, `/contact` pages)
- Real form backend (Formspree instructions above; alternatives: Netlify Forms, Basin, getform.io)
- Analytics (Plausible, Fathom, GA4)
- Newsletter signup (Mailchimp, ConvertKit, Buttondown)
- Before/after slider on benefits (replacing hover crossfade)
- Booking / calendar integration (Calendly embed)
- Separate regional gallery pages
- PDF lead magnet
- Google Business reviews pull-in

---

## Troubleshooting

**`npm install` fails on Windows**
You may need the build tools for `sharp` (the image optimizer Astro uses). Run `npm install --global windows-build-tools` once, or use Node 20.

**`npm run dev` runs but shows no images**
Check that `public/images/` is populated. If files are missing, run `bash scripts/download-placeholders.sh` to refresh placeholders.

**Render build fails with "Command not found: astro"**
The build command in `render.yaml` is `npm install && npm run build`. If you removed `npm install`, add it back.

**Contact form `mailto:` action isn't opening an email client**
Some browsers block `mailto:` from forms. Switch to Formspree (see above) — it's free and takes 2 minutes.

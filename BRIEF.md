# Outdoor Lighting Website — Build Brief

Hand this file to Claude Code in an empty project folder and say: **"Read BRIEF.md and build the site."** Claude Code will scaffold the project, initialize git, and produce a working site ready to deploy to Render.

---

## 0. Fill-in-the-blank checklist

Before building, replace every `[BRACKETED]` placeholder below with real info. If you don't have something yet, leave it as-is — Claude Code will use the placeholder and you can swap later.

- [ ] Business name: `[BUSINESS NAME]`
- [ ] Tagline: `[TAGLINE — e.g., "Light up your nights"]`
- [ ] Business category: `[landscape lighting / permanent holiday lighting / both]`
- [ ] Service area: `[e.g., "North Georgia — Atlanta metro, North Fulton, Forsyth, Dawson"]`
- [ ] Primary phone: `[XXX-XXX-XXXX]`
- [ ] Primary email: `[hello@yourbusiness.com]`
- [ ] Physical address (if any): `[optional]`
- [ ] Social handles: Instagram `[@handle]`, Facebook `[URL]`, Google Business `[URL]`
- [ ] Photos status: **placeholders for now** (spec below)

---

## 1. Project goal

Build a premium, cinematic marketing website for an outdoor lighting business based on the design language of **utahlights.com**. The site should feel editorial and high-end — lifestyle-driven, not contractor-generic. Single dominant CTA throughout: **Request a Consultation**.

Owner already uses Render for hosting, so the site must deploy as a **static site** to Render's free tier, with a git repo that auto-deploys on push to the main branch.

Owner is comfortable editing a config file and pushing to GitHub but is not a daily developer — the site must be maintainable by editing a single content file, with no HTML/CSS/component edits needed for routine updates.

---

## 2. Tech stack (non-negotiable)

- **Framework:** Astro (latest stable)
- **Styling:** Tailwind CSS
- **Language:** TypeScript for config files, `.astro` for components/pages
- **Image handling:** Astro's `<Image>` component with built-in optimization
- **Build output:** Static (`output: 'static'`)
- **Host target:** Render Static Site (free tier)
- **Version control:** Git, initialized at project root, with a sensible `.gitignore`
- **Package manager:** npm

Do NOT use: Next.js, React (beyond Astro's needs), a headless CMS, a database, authentication, or any paid service.

---

## 3. Design system

### Colors (Tailwind config)
- `background` / base black: `#0A0A0A`
- `teal` (primary accent, CTAs): `#20566E`
- `teal-hover`: `#2B7090`
- `brass` (secondary accent, fine details): `#A6841C`
- `brass-dark`: `#7C6316`
- `ivory` (body text on dark): `#F5F1E8`
- `muted` (secondary text): `#B8B0A0`

### Typography
- **Display / headlines:** Quattrocento, weight 700 (Google Fonts)
- **Body / UI:** Montserrat, weights 400, 500, 700 (Google Fonts)
- **Button / eyebrow labels:** Montserrat, uppercase, `letter-spacing: 0.1em`
- **Max hero H1 size:** 75px desktop / 42px mobile
- **Line-height on large headlines:** 1.1

### Visual patterns
- Full-bleed dark photography as hero/section backgrounds
- Thin hairline dividers (`1px #A6841C40`) under uppercase eyebrow labels
- Generous vertical spacing — sections get `py-24` or `py-32` on desktop
- Buttons: teal fill, ivory text, uppercase, tracked, slight rounding (`rounded-sm`), no shadow
- Hover states: teal lightens, image sections fade between states at ~400ms
- Zero drop shadows, zero gradients on buttons, zero rounded-full pills. Keep it editorial.

---

## 4. Page structure

Build a **single-page site** for v1 — all sections on the home page, with anchor-link navigation. Separate pages come later.

Section order (top to bottom):

1. **Sticky header** — transparent over hero, solid dark on scroll. Left: business logo/name. Right: nav links (Services, Gallery, About, Contact) + prominent `Request a Consultation` button.
2. **Hero** — full-bleed dark night photo, H1 tagline, subhead, single CTA, downward chevron scroll cue.
3. **Brand intro** — short centered copy block ("Just add light." style), 2-3 sentences about what you do and who you do it for.
4. **Gallery carousel** — 6-8 full-bleed night-scene photos, swipeable on mobile, auto-advancing every 6 seconds on desktop.
5. **"The difference is night and day"** — 3-benefit grid with before/after hover reveal. On hover (desktop) or tap (mobile), the "before" (dark/unlit) image crossfades to the "after" (lit). Benefits: (a) Spend more evenings outside, (b) Showcase your home's best features, (c) Protect your investment.
6. **Testimonials carousel** — 4 rotating written reviews, dot navigation, italic Montserrat, attributed by first name.
7. **Services** — 3-card row: **Design**, **Installation**, **Maintenance**. Each card: small image, uppercase eyebrow, headline, 2-sentence blurb, thin underline link "Learn more" (links to anchor for now).
8. **Brand philosophy** — two-column section with two large images on one side and a short personal/brand story on the other. Ends with a "Meet us" CTA (just scrolls to contact for now).
9. **Final CTA band** — full-bleed night photo, overlay, single H2 ("Light the way"), subhead, big `Request a Consultation` button.
10. **Contact / quote form** — simple form with fields: Name, Email, Phone, Address, Project type (dropdown: Landscape Lighting / Permanent Holiday / Both / Other), Message. Form posts to a `mailto:` link for v1 (no backend). Add a note for the owner explaining how to wire up Formspree or a real endpoint later.
11. **Footer** — dark background, brass accents. Columns: (a) logo + short tagline + socials, (b) quick links (Services, Gallery, About, Contact), (c) contact block (phone clickable, email, service area). Bottom bar: copyright + Privacy Policy placeholder link.

---

## 5. Content configuration

**Critical:** all site copy and image paths must live in a single file at `src/content/site.ts`. Every component imports from this file. The owner will edit this file — not the components — to update the site.

Structure `site.ts` like this (TypeScript, exported as `siteContent`):

```ts
export const siteContent = {
  business: {
    name: "[BUSINESS NAME]",
    tagline: "[TAGLINE]",
    phone: "[PHONE]",
    email: "[EMAIL]",
    serviceArea: "[SERVICE AREA]",
    socials: {
      instagram: "[URL]",
      facebook: "[URL]",
      google: "[URL]",
    },
  },
  hero: {
    eyebrow: "OUTDOOR LIGHTING",
    headline: "Light up your nights",
    subhead: "Make your best days last longer with an artfully illuminated outdoor space.",
    ctaText: "Request a Consultation",
    ctaHref: "#contact",
    backgroundImage: "/images/hero.jpg",
  },
  brandIntro: {
    headline: "Just add light.",
    body: "[2-3 sentence description of who you are and what you do]",
  },
  gallery: [
    { src: "/images/gallery-1.jpg", alt: "[description]" },
    // ... 6-8 total
  ],
  benefits: {
    sectionHeadline: "The difference is night and day.",
    items: [
      {
        eyebrow: "ENJOY YOUR EVENINGS",
        headline: "Spend more evenings outside",
        body: "[copy]",
        beforeImage: "/images/benefit-1-before.jpg",
        afterImage: "/images/benefit-1-after.jpg",
      },
      // 2 more
    ],
  },
  testimonials: [
    { quote: "[review text]", author: "Chris", image: "/images/testimonial-1.jpg" },
    // 3 more
  ],
  services: [
    {
      eyebrow: "OUTDOOR LIGHTING DESIGN",
      title: "Design",
      blurb: "Experience new ways to unwind in your outdoor spaces, day and night.",
      image: "/images/service-design.jpg",
    },
    {
      eyebrow: "GOLD STANDARD INSTALLATION",
      title: "Installation",
      blurb: "Friendly, professional crews get the job done quickly (and done right).",
      image: "/images/service-install.jpg",
    },
    {
      eyebrow: "OUTDOOR LIGHTING SERVICE",
      title: "Maintenance",
      blurb: "Annual maintenance keeps your system in peak condition year-round.",
      image: "/images/service-maintenance.jpg",
    },
  ],
  philosophy: {
    eyebrow: "OUR APPROACH",
    headline: "Light is our business — and our art.",
    body: "[2-3 paragraphs about the brand's philosophy]",
    images: ["/images/philosophy-1.jpg", "/images/philosophy-2.jpg"],
    ctaText: "Meet us",
    ctaHref: "#contact",
  },
  finalCTA: {
    headline: "Light the way.",
    subhead: "From path to pool to pergola — and beyond.",
    ctaText: "Request a Consultation",
    ctaHref: "#contact",
    backgroundImage: "/images/final-cta.jpg",
  },
  contact: {
    headline: "Tell us about your project",
    subhead: "We'll be in touch within one business day.",
    formEndpoint: "mailto:[EMAIL]", // swap for Formspree/etc later
  },
};
```

Every component/page reads from `siteContent`. No hardcoded copy anywhere.

---

## 6. Placeholder images

Owner does not yet have a photo library. Use **high-quality Unsplash placeholders** so the site looks complete from day one. Download these into `public/images/` with the filenames referenced in `site.ts` above. Pick images that match the night / architectural lighting aesthetic.

Good search terms on unsplash.com: `landscape lighting`, `pool at night`, `illuminated pathway`, `backyard lighting`, `pergola lights`, `house exterior night`, `outdoor dining night`.

Add a `PLACEHOLDER_IMAGES.md` file at the project root documenting which image is in which slot, so swapping real photos later is obvious.

---

## 7. Copy voice

Poetic, sensory, literary — NOT contractor-speak. Sells lifestyle and feeling, not fixtures or specs.

Example language to emulate:
- "Light up your nights."
- "The difference is night and day."
- "Enjoy your outdoor space from happy hour to golden hour — to the witching hour."
- "Light is our business — and our art."
- "From path to pool to pergola (and beyond)."

Avoid: "Call us today!", "Best prices!", exclamation points generally, feature lists, technical specs, bullet points in hero copy.

If the category is **permanent holiday lighting** (vs. landscape lighting), adjust tone slightly — still premium, but lean into year-round versatility: "Holidays in December. Game nights in October. Birthdays in July. One system, every season."

---

## 8. Git + Render deployment

### Git setup
- Run `git init` at project root
- Create `.gitignore` with `node_modules`, `dist`, `.env`, `.DS_Store`, `.astro`
- Make an initial commit with message: `Initial site build`
- Include a `README.md` with:
  - What the project is
  - How to run locally (`npm install`, `npm run dev`)
  - How to edit content (point to `src/content/site.ts`)
  - How to swap images (point to `public/images/` + `PLACEHOLDER_IMAGES.md`)
  - How to deploy (push to GitHub, connect Render)

### Render deployment
- Create a `render.yaml` blueprint at project root so the site deploys with one click:

```yaml
services:
  - type: web
    name: [business-name-slug]
    runtime: static
    buildCommand: npm install && npm run build
    staticPublishPath: ./dist
    pullRequestPreviewsEnabled: true
```

- In the README, document the full Render setup flow: create GitHub repo → push → connect Render via "New Static Site" → point at repo → Render auto-detects `render.yaml`.

---

## 9. Accessibility & performance baselines

- All images need `alt` text (use the alt strings from `site.ts`)
- All interactive elements keyboard-focusable with visible focus rings (ivory ring on teal bg)
- Lighthouse performance target: 95+ on desktop, 90+ on mobile
- No blocking third-party scripts
- Fonts loaded via `<link rel="preconnect">` to Google Fonts, with `font-display: swap`

---

## 10. Post-launch editing guide

In the README, include a section titled **"How to update your site"** explaining in plain language:

- Change any text → edit `src/content/site.ts`, commit, push → Render redeploys in ~60 seconds
- Swap a photo → drop new file in `public/images/` (same filename to avoid config edits), commit, push
- Add a testimonial → add an entry to the `testimonials` array in `site.ts`
- Change the phone number → edit `business.phone` in `site.ts` (updates everywhere on the site automatically)
- Break something → `git revert HEAD` undoes the last change, push to redeploy

Assume the owner knows the absolute basics of git (`git add .`, `git commit -m "message"`, `git push`) but is not a daily coder. Be explicit.

---

## 11. Out of scope for v1 (do NOT build)

- Blog / CMS
- Multi-page site (separate /services, /gallery, /about, /contact pages)
- Real form backend (Formspree, Netlify Forms, etc.) — leave `mailto:` placeholder with a clear TODO comment
- Analytics / tracking
- Newsletter signup / Mailchimp
- Booking/calendar integration
- Before/after slider (the hover crossfade is enough for v1)
- Separate regional gallery pages
- PDF lead magnet

Each of these can be added later by asking Claude Code: "Add [thing] to the site." Flag each one in the README as a "Future enhancements" list so the owner knows what's possible.

---

## 12. Deliverable checklist

When Claude Code finishes, the project folder should contain:

- [ ] `package.json` with all dependencies
- [ ] `astro.config.mjs`, `tailwind.config.mjs`, `tsconfig.json`
- [ ] `src/content/site.ts` — all content, with placeholders filled in from section 0
- [ ] `src/pages/index.astro` — single home page
- [ ] `src/components/` — one component per major section (Header, Hero, Gallery, Benefits, Testimonials, Services, Philosophy, FinalCTA, Contact, Footer)
- [ ] `public/images/` — Unsplash placeholder images named to match `site.ts`
- [ ] `PLACEHOLDER_IMAGES.md` — image slot documentation
- [ ] `render.yaml` — Render deployment blueprint
- [ ] `README.md` — full setup + editing guide
- [ ] `.gitignore`
- [ ] Git repo initialized, initial commit made
- [ ] `npm run dev` runs the site locally without errors
- [ ] `npm run build` produces a `dist/` folder that can be served statically

Once built, run `npm run dev` once to verify the site loads and looks correct, then leave it for the owner to review.

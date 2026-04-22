# Placeholder images

Every image on the site is stored in `public/images/`. The filenames below are referenced by `src/content/site.ts` — **keep the filenames the same** when you swap in real photos, and nothing else has to change.

If you ever want to rename a file, also update the matching path in `src/content/site.ts`.

## Where each image appears

| File | Where it appears | Recommended subject |
|---|---|---|
| `hero.jpg` | Top of page, full-bleed background | Dramatic night exterior of a lit home or yard — wide crop |
| `gallery-1.jpg` — `gallery-8.jpg` | Gallery carousel | 8 varied night shots: pool, pathway, pergola, dining, uplighting, etc. |
| `benefit-1.jpg` | "Spend more evenings outside" card | Lit outdoor space at night |
| `benefit-2.jpg` | "Showcase your home's best features" card | Lit home façade at night |
| `benefit-3.jpg` | "Protect your investment" card | Softly lit pathway / entry at night |
| `service-design.jpg` | Design service card | Design-focused — drawings, site visit, planning |
| `service-install.jpg` | Installation service card | Crew working / installing fixtures |
| `service-maintenance.jpg` | Maintenance service card | Fixtures being cleaned / tuned at dusk |
| `philosophy-1.jpg` | Philosophy section, top image | Close-up detail shot |
| `philosophy-2.jpg` | Philosophy section, bottom image | Portrait / crew / owner |
| `final-cta.jpg` | "Light the way" band | Cinematic wide shot, room for overlaid copy |
| `holiday-1.jpg` — `holiday-4.jpg` | Holiday Lighting section background — 4-image crossfading slideshow | 4 different homes with permanent or seasonal holiday lighting at night, wide cinematic crops. Each image displays for 5 seconds then fades to the next. **Currently duplicated from gallery images — swap each with real holiday-lit photos as they become available.** |

## Image specs

- **Format:** `.jpg` (Astro will optimize further at build)
- **Size:** minimum ~1600px wide for gallery/hero/final-cta; ~1200px for card images
- **Orientation:** landscape for hero/gallery/final-cta; portrait or square works for benefit + service + philosophy
- **Mood:** dark / blue hour / after dark. Warm light sources. Avoid harsh shadows and daytime shots.

## Swapping placeholders for real photos

1. Drop the new image into `public/images/` using the same filename (e.g., replace `hero.jpg` with your own `hero.jpg`).
2. Commit and push. Render redeploys in ~60 seconds.

If you prefer different filenames, edit the matching path in `src/content/site.ts`.

## Current placeholders

Current images are free-license stock from [Unsplash](https://unsplash.com). They are fine to ship with but should be replaced with real project photography as soon as possible.

To re-download a fresh round of placeholders, run:

```
bash scripts/download-placeholders.sh
```

#!/usr/bin/env bash
# Downloads Unsplash placeholder images for every slot in site.ts.
# Re-run any time you want to refresh placeholders. Real photos → drop them in public/images/ with the same filenames.
set -e

OUT="public/images"
mkdir -p "$OUT"

# Associative array: filename -> Unsplash photo ID
declare -a IMAGES=(
  # HERO — wide cinematic night exterior
  "hero.jpg|1600596542815-ffad4c1539a9|w=2400"

  # GALLERY — 8 varied night / outdoor lighting scenes
  "gallery-1.jpg|1600566753190-17f0baa2a6c3|w=2000"
  "gallery-2.jpg|1558618666-fcd25c85cd64|w=2000"
  "gallery-3.jpg|1530541930197-ff16ac917b0e|w=2000"
  "gallery-4.jpg|1600585154340-be6161a56a0c|w=2000"
  "gallery-5.jpg|1600607687644-c7171b42498f|w=2000"
  "gallery-6.jpg|1564013799919-ab600027ffc6|w=2000"
  "gallery-7.jpg|1600585154526-990dced4db0d|w=2000"
  "gallery-8.jpg|1513694203232-719a280e022f|w=2000"

  # BENEFITS — before/after pairs (3 items × 2 images each)
  "benefit-1-before.jpg|1598228723793-52759bba239c|w=1400"
  "benefit-1-after.jpg|1600566753190-17f0baa2a6c3|w=1400"
  "benefit-2-before.jpg|1554995207-c18c203602cb|w=1400"
  "benefit-2-after.jpg|1600585154340-be6161a56a0c|w=1400"
  "benefit-3-before.jpg|1568605114967-8130f3a36994|w=1400"
  "benefit-3-after.jpg|1564013799919-ab600027ffc6|w=1400"

  # SERVICES — 3 card images
  "service-design.jpg|1556912173-3bb406ef7e77|w=1400"
  "service-install.jpg|1598228723793-52759bba239c|w=1400"
  "service-maintenance.jpg|1558618666-fcd25c85cd64|w=1400"

  # PHILOSOPHY — 2 portrait-ish crop
  "philosophy-1.jpg|1600585154526-990dced4db0d|w=1400"
  "philosophy-2.jpg|1600607687939-ce8a6c25118c|w=1400"

  # FINAL CTA — wide cinematic
  "final-cta.jpg|1564078516393-cf04bd966897|w=2400"
)

for entry in "${IMAGES[@]}"; do
  IFS='|' read -r filename id size <<< "$entry"
  url="https://images.unsplash.com/photo-${id}?${size}&q=80&auto=format&fit=crop"
  echo "Downloading $filename …"
  curl -sL --max-time 30 -o "$OUT/$filename" "$url"
done

echo "Done. Placeholders saved to $OUT/"

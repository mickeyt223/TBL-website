// Auto-converts PNG photos in public/images/ to JPG.
// - Watches the folder live (used by `npm run dev`)
// - Or runs once over all existing PNGs (used by `npm run convert-images`)
//
// Files matching SKIP_PATTERNS (logos, favicons, icons) are left alone since
// they need transparency. Everything else is converted to .jpg at quality 85,
// then the original .png is deleted.

import chokidar from 'chokidar';
import sharp from 'sharp';
import { readdir, unlink, stat } from 'node:fs/promises';
import path from 'node:path';

const WATCH_DIR = 'public/images';
const SKIP_PATTERNS = [/logo/i, /favicon/i, /icon/i];
const QUALITY = 85;

function shouldSkip(filename) {
  return SKIP_PATTERNS.some((re) => re.test(filename));
}

async function convert(pngPath) {
  const filename = path.basename(pngPath);
  if (shouldSkip(filename)) {
    console.log(`[png→jpg] skip: ${filename} (logo/icon, leaving as PNG)`);
    return;
  }
  const jpgPath = pngPath.replace(/\.png$/i, '.jpg');
  try {
    // Wait a beat in case the file is still being written.
    await new Promise((r) => setTimeout(r, 250));
    const before = (await stat(pngPath)).size;
    await sharp(pngPath).jpeg({ quality: QUALITY }).toFile(jpgPath);
    const after = (await stat(jpgPath)).size;
    await unlink(pngPath);
    const kbBefore = (before / 1024).toFixed(0);
    const kbAfter = (after / 1024).toFixed(0);
    console.log(
      `[png→jpg] ${filename} → ${path.basename(jpgPath)}  (${kbBefore}KB → ${kbAfter}KB)`,
    );
  } catch (err) {
    console.error(`[png→jpg] failed on ${filename}:`, err.message);
  }
}

async function runOnce() {
  const entries = await readdir(WATCH_DIR);
  const pngs = entries.filter((f) => f.toLowerCase().endsWith('.png'));
  if (pngs.length === 0) {
    console.log('[png→jpg] no PNGs to convert.');
    return;
  }
  for (const f of pngs) {
    await convert(path.join(WATCH_DIR, f));
  }
}

function runWatch() {
  console.log(`[png→jpg] watching ${WATCH_DIR}/ for new .png files...`);
  const watcher = chokidar.watch(`${WATCH_DIR}/*.png`, {
    ignoreInitial: false,
    awaitWriteFinish: { stabilityThreshold: 400, pollInterval: 100 },
  });
  watcher.on('add', convert);
  watcher.on('change', convert);
}

const mode = process.argv[2];
if (mode === '--once') {
  await runOnce();
} else {
  runWatch();
}

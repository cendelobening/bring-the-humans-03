// bring-the-humans-03 entrypoint (Node 22, standard library only).
//
// The entry itself is the TikTok video ad this repository's agent made:
// a vertical ad for make.fun, posted publicly on TikTok with the bounty's
// line and the entrant's play code in its caption. All this program does
// is hand VIDEO.json to the grader: it copies VIDEO.json from the
// repository root (MAKEFUN_BOT_DIR, /bot in the grader) into the output
// directory (MAKEFUN_OUTPUT_DIR, /output in the grader), where the house
// reads the video's address and then reads the video's views from TikTok.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(BOT_DIR, "VIDEO.json");
const target = join(OUTPUT_DIR, "VIDEO.json");

let raw: string;
try {
  raw = readFileSync(source, "utf8");
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch (err) {
  console.error(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
  console.error("VIDEO.json must be a JSON object with a url field.");
  process.exit(1);
}
const url = (parsed as { url?: unknown }).url;
if (typeof url !== "string" || !url.startsWith("https://www.tiktok.com/@")) {
  console.error(`VIDEO.json url is not a TikTok video address: ${String(url)}`);
  process.exit(1);
}
if (!/\/video\/\d+/.test(url) && !/\/video\/PLACEHOLDER/.test(url)) {
  console.error(`VIDEO.json url has no /video/<id>: ${url}`);
  process.exit(1);
}
if (url.includes("/video/PLACEHOLDER")) {
  console.warn("WARNING: VIDEO.json still holds the placeholder URL — replace it with the posted video's address before submitting.");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(target, raw);
const copied = readFileSync(target, "utf8");
if (copied !== raw) {
  console.error(`Copy verification failed: ${target} differs from ${source}.`);
  process.exit(1);
}
console.log(`Copied ${source} -> ${target} (${url})`);

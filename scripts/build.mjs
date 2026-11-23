import { cp, mkdir, rm } from "node:fs/promises";
import { siteOrigin, prepareHosting } from "./hosting.mjs";
const configuredOrigin = siteOrigin(process.env.SITE_URL);
const isBranchPreview = process.env.CF_PAGES_BRANCH && process.env.CF_PAGES_BRANCH !== "main";
const origin = isBranchPreview ? null : configuredOrigin;
await import("./render-menu.mjs");
await rm("dist", { recursive: true, force: true });
await mkdir("dist");
for (const file of [
  "index.html",
  "styles.css",
  "app.js",
  "impressum.html",
  "datenschutz.html",
  "404.html",
  "assets",
])
  await cp(file, `dist/${file}`, { recursive: true });
await prepareHosting(origin);
console.log("Static website built in dist/");

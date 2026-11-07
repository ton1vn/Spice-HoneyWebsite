import "./render-menu.mjs";
import { cp, mkdir, rm } from "node:fs/promises";
await rm("dist", { recursive: true, force: true });
await mkdir("dist");
for (const file of [
  "index.html",
  "styles.css",
  "app.js",
  "impressum.html",
  "datenschutz.html",
  "assets",
])
  await cp(file, `dist/${file}`, { recursive: true });
console.log("Static website built in dist/");

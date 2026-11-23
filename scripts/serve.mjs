import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
import { parseHeaders } from "./hosting.mjs";
const production = process.argv.includes("--dist");
const root = resolve(production ? "dist" : ".");
const headerRules = production ? await readFile(resolve(root, "_headers"), "utf8") : "";
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

async function findFile(path) {
  for (const candidate of [path, ...(extname(path) ? [] : [path + ".html"])]) {
    try {
      const info = await stat(candidate);
      if (info.isFile()) return candidate;
      if (info.isDirectory()) {
        const index = resolve(candidate, "index.html");
        if ((await stat(index)).isFile()) return index;
      }
    } catch { /* Try the next static path. */ }
  }
  return null;
}

createServer(async (req, res) => {
  let pathname = "/";
  try {
    pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    if (!["GET", "HEAD"].includes(req.method)) {
      res.writeHead(405, { Allow: "GET, HEAD" });
      return res.end();
    }
    const path = resolve(
      root,
      "." + pathname,
    );
    if (path !== root && !path.startsWith(root + sep)) throw Error();
    if (production && pathname.split("/").includes("_headers")) throw Error();
    const file = await findFile(path);
    if (!file) throw Error();
    const body = await readFile(file);
    res.writeHead(200, {
      ...parseHeaders(headerRules, pathname),
      "Content-Type": types[extname(file)] || "application/octet-stream",
      "X-Content-Type-Options": "nosniff",
    });
    res.end(req.method === "HEAD" ? undefined : body);
  } catch {
    const body = production ? await readFile(resolve(root, "404.html")) : "Seite nicht gefunden";
    res.writeHead(404, {
      ...parseHeaders(headerRules, pathname),
      "Content-Type": production ? "text/html; charset=utf-8" : "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    });
    res.end(req.method === "HEAD" ? undefined : body);
  }
}).listen(port, "127.0.0.1", () =>
  console.log(`Local: http://127.0.0.1:${port}`),
);

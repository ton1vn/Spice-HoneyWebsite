import { readFile, writeFile } from "node:fs/promises";

export function siteOrigin(value = "") {
  if (!value.trim()) return null;
  const url = new URL(value.trim());
  if (url.protocol !== "https:" || url.username || url.password || url.port ||
      url.pathname !== "/" || url.search || url.hash ||
      !url.hostname.includes(".") || /\.(localhost|local|internal)$/.test(url.hostname) ||
      /^\d+\.\d+\.\d+\.\d+$/.test(url.hostname) || url.hostname.includes(":")) {
    throw new Error("SITE_URL muss die öffentliche HTTPS-Domain ohne Pfad, Zugangsdaten oder Parameter sein.");
  }
  return url.origin;
}

const escape = value => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

export async function prepareHosting(origin) {
  let headers = await readFile("hosting/_headers", "utf8");
  if (!origin) headers = headers.replace("/*\n", "/*\n  X-Robots-Tag: noindex, nofollow\n");
  await writeFile("dist/_headers", headers);
  await writeFile("dist/robots.txt", "User-agent: *\nDisallow:\n" + (origin ? `Sitemap: ${origin}/sitemap.xml\n` : ""));

  for (const [file, path] of [["index.html", "/"], ["impressum.html", "/impressum"], ["datenschutz.html", "/datenschutz"]]) {
    let html = await readFile(`dist/${file}`, "utf8");
    const meta = origin
      ? `    <link rel="canonical" href="${escape(origin + path)}" />\n    <meta property="og:url" content="${escape(origin + path)}" />\n`
      : file === "index.html" ? '    <meta name="robots" content="noindex,nofollow" />\n' : "";
    html = html.replace("  </head>", meta + "  </head>");
    await writeFile(`dist/${file}`, html);
  }
  if (origin) {
    await writeFile("dist/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escape(origin)}/</loc></url></urlset>\n`);
  }
  console.log(origin ? `Hostingpaket für ${origin} vorbereitet.` : "Vorschaupaket ohne Domain vorbereitet (noindex). SITE_URL erst für die gewählte Live-Domain setzen.");
}

export function parseHeaders(source, pathname) {
  const result = {};
  let matches = false;
  for (const line of source.split(/\r?\n/)) {
    if (!line.trim() || line.trimStart().startsWith("#")) continue;
    if (!/^\s/.test(line)) {
      const pattern = line.trim();
      matches = pattern.endsWith("*") ? pathname.startsWith(pattern.slice(0, -1)) : pathname === pattern;
    } else if (matches) {
      const split = line.indexOf(":");
      if (split > 0) result[line.slice(0, split).trim()] = line.slice(split + 1).trim();
    }
  }
  return result;
}

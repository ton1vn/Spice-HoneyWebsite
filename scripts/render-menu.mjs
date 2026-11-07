import { readFile, writeFile } from "node:fs/promises";
const menu = JSON.parse(await readFile(new URL("../content/menu.json", import.meta.url), "utf8"));
const escape = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const currency = (value) => new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(value / 100);
let html = '';
let drinksStarted = false;
for (const category of menu.categories) {
  if (category.kind === "drink" && !drinksStarted) {
    html += '<h3 id="getraenke" class="menu-subheading">Getränke</h3>\n';
    drinksStarted = true;
  }
  html += `<details class="menu-category" id="${escape(category.id)}"${category.id === "hauptgerichte" ? " open" : ""}><summary>${escape(category.title)}<span aria-hidden="true">+</span></summary><div class="menu-content">`;
  if (category.note) html += `<p class="category-note">${escape(category.note)}</p>`;
  html += '<ul>';
  for (const item of category.items) {
    const hasRange = item.variants.length && new Set(item.variants.map(v => v.price)).size > 1;
    html += `<li><div class="dish-title"><h4>${escape(item.name)}</h4><span>${hasRange ? "ab " : ""}${currency(item.price)}</span></div>`;
    if (item.description) html += `<p>${escape(item.description)}</p>`;
    if (item.variants.length) html += `<p class="variants">${item.variants.map(v => `${escape(v.name)} ${currency(v.price)}`).join("; ")}.</p>`;
    html += '</li>';
  }
  html += '</ul></div></details>\n';
}
const target = new URL("../index.html", import.meta.url);
const index = await readFile(target, "utf8");
if (!index.includes('<!-- MENU:START -->') || !index.includes('<!-- MENU:END -->')) throw new Error("Menu markers missing");
await writeFile(target, index.replace(/<!-- MENU:START -->[\s\S]*?<!-- MENU:END -->/, `<!-- MENU:START -->\n${html}<!-- MENU:END -->`));
console.log(`Restaurant menu rendered: ${menu.categories.length} categories, ${menu.categories.reduce((n, c) => n + c.items.length, 0)} entries.`);

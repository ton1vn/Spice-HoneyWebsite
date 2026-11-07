import { readFile, writeFile } from "node:fs/promises";
const menu = JSON.parse(await readFile(new URL("../content/menu.json", import.meta.url), "utf8"));
const escape = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const currency = (value) => new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(value / 100);
let html = '<div class="menu-browser" id="menue-auswahl">\n';
html += '<div class="menu-kinds" role="group" aria-label="Speisekartenbereich wählen"><a href="#hauptgerichte" data-menu-kind="food">Speisen</a><a href="#refreshers" data-menu-kind="drink">Getränke</a></div>\n';
for (const kind of ["food", "drink"]) {
  html += `<nav class="menu-filters" data-filter-kind="${kind}" aria-label="${kind === "food" ? "Speisenkategorien" : "Getränkekategorien"}">`;
  for (const category of menu.categories.filter(c => c.kind === kind)) {
    html += `<a href="#${escape(category.id)}" data-menu-category="${escape(category.id)}">${escape(category.title)}</a>`;
  }
  html += '</nav>\n';
}
html += '<p class="sr-only" id="menu-status" role="status" aria-live="polite"></p>\n<div class="menu-results">\n';
for (const category of menu.categories) {
  html += `<section class="menu-category" id="${escape(category.id)}" data-kind="${category.kind}" aria-labelledby="title-${escape(category.id)}"><div class="category-heading"><h3 id="title-${escape(category.id)}">${escape(category.title)}</h3>`;
  if (category.note) html += `<p>${escape(category.note)}</p>`;
  html += '</div><ul class="dish-grid">';
  for (const item of category.items) {
    html += '<li class="dish-card"><div class="dish-media media-slot" aria-hidden="true">';
    // Final photography can be added per dish without changing the layout.
    if (item.image) html += `<img src="${escape(item.image)}" width="900" height="675" alt="" loading="lazy">`;
    html += `</div><div class="dish-copy"><div class="dish-title"><h4>${escape(item.name)}</h4>`;
    if (!item.variants.length) html += `<span class="dish-price">${currency(item.price)}</span>`;
    html += '</div>';
    if (item.description) html += `<p>${escape(item.description)}</p>`;
    if (item.variants.length) html += `<dl class="dish-variants">${item.variants.map(v => `<div><dt>${escape(v.name)}</dt><dd>${currency(v.price)}</dd></div>`).join("")}</dl>`;
    html += '</div></li>';
  }
  html += '</ul></section>\n';
}
html += '</div><a class="text-link category-return" href="#menue-auswahl">Zur Kategorieauswahl <span aria-hidden="true">↑</span></a></div>\n';
const target = new URL("../index.html", import.meta.url);
const index = await readFile(target, "utf8");
if (!index.includes('<!-- MENU:START -->') || !index.includes('<!-- MENU:END -->')) throw new Error("Menu markers missing");
await writeFile(target, index.replace(/<!-- MENU:START -->[\s\S]*?<!-- MENU:END -->/, `<!-- MENU:START -->\n${html}<!-- MENU:END -->`));
console.log(`Restaurant menu rendered: ${menu.categories.length} categories, ${menu.categories.reduce((n, c) => n + c.items.length, 0)} entries.`);

import { readFile, writeFile } from "node:fs/promises";
const menu = JSON.parse(await readFile(new URL("../content/menu.json", import.meta.url), "utf8"));
const categories = menu.categories.filter(category => category.enabled !== false);
const escape = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const branded = (value) => escape(value).replaceAll("Spice &amp; Honey", '<span class="brand-name">Spice &amp; Honey</span>');
const currency = (value) => new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(value / 100);
const frameNumbers = new Set([1, 2, 3]);
let html = '<div class="menu-browser" id="menue-auswahl">\n';
html += '<div class="menu-kinds" role="group" aria-label="Speisekartenbereich wählen"><a href="#hauptgerichte" data-menu-kind="food">Speisen</a><a href="#refreshers" data-menu-kind="drink">Getränke</a></div>\n';
for (const kind of ["food", "drink"]) {
  html += `<nav class="menu-filters" data-filter-kind="${kind}" aria-label="${kind === "food" ? "Speisenkategorien" : "Getränkekategorien"}">`;
  for (const category of categories.filter(c => c.kind === kind)) {
    html += `<a href="#${escape(category.id)}" data-menu-category="${escape(category.id)}">${escape(category.title)}</a>`;
  }
  html += '</nav>\n';
}
html += '<p class="sr-only" id="menu-status" role="status" aria-live="polite"></p>\n<div class="menu-results">\n';
for (const category of categories) {
  html += `<section class="menu-category" id="${escape(category.id)}" data-kind="${category.kind}" aria-labelledby="title-${escape(category.id)}"><div class="category-heading"><h3 id="title-${escape(category.id)}">${escape(category.title)}</h3>`;
  if (category.note && !category.noteTitle) html += `<p>${escape(category.note)}</p>`;
  html += '</div>';
  const groups = category.kind === "drink"
    ? [{ items: category.items, photos: false, className: "dish-list drink-list" }]
    : [
        { items: category.items.filter(item => item.image), photos: true, className: "dish-grid" },
        { items: category.items.filter(item => !item.image), photos: false, className: "dish-list" }
      ];
  for (const group of groups.filter(group => group.items.length)) {
    html += `<ul class="${group.className}">`;
    for (const item of group.items) {
      if (!Number.isInteger(item.photoFrame) || item.photoFrame < 4 || frameNumbers.has(item.photoFrame)) throw new Error(`Invalid or duplicate photo frame: ${item.name}`);
      frameNumbers.add(item.photoFrame);
      html += `<li class="dish-card" data-photo-frame="${item.photoFrame}">`;
      if (group.photos) {
        html += '<div class="dish-media media-slot has-photo"><picture>';
        if (item.imageMobile) html += `<source media="(max-width: 600px)" srcset="${escape(item.imageMobile)}" width="1440" height="960">`;
        html += `<img src="${escape(item.image)}" width="1440" height="1080" alt="${escape(item.imageAlt || item.name)}" loading="lazy" decoding="async"></picture></div>`;
      }
      html += `<div class="dish-copy"><div class="dish-title"><h4>${branded(item.name)}</h4>`;
      if (!item.variants.length) html += `<span class="dish-price">${currency(item.price)}</span>`;
      html += '</div>';
      if (item.description) html += `<p>${escape(item.description)}</p>`;
      if (item.variants.length) html += `<dl class="dish-variants">${item.variants.map(v => `<div><dt>${escape(v.name)}</dt><dd>${currency(v.price)}</dd></div>`).join("")}</dl>`;
      html += '</div></li>';
    }
    html += '</ul>';
  }
  if (category.noteTitle && category.note) html += `<aside class="menu-note" aria-labelledby="note-${escape(category.id)}"><h4 id="note-${escape(category.id)}">${escape(category.noteTitle)}</h4><p>${escape(category.note)}</p></aside>`;
  html += '</section>\n';
}
html += '</div><a class="text-link category-return" href="#menue-auswahl">Zur Kategorieauswahl <span aria-hidden="true">↑</span></a></div>\n';
const target = new URL("../index.html", import.meta.url);
const index = await readFile(target, "utf8");
if (!index.includes('<!-- MENU:START -->') || !index.includes('<!-- MENU:END -->')) throw new Error("Menu markers missing");
await writeFile(target, index.replace(/<!-- MENU:START -->[\s\S]*?<!-- MENU:END -->/, `<!-- MENU:START -->\n${html}<!-- MENU:END -->`));
console.log(`Restaurant menu rendered: ${categories.length} categories, ${categories.reduce((n, c) => n + c.items.length, 0)} entries.`);

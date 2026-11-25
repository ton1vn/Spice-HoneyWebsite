document.documentElement.classList.add("enhanced");
const header = document.querySelector(".site-header");
function syncHeaderHeight() {
  if (header) document.documentElement.style.setProperty("--header-height", `${Math.ceil(header.getBoundingClientRect().height)}px`);
}
syncHeaderHeight();
if (header && "ResizeObserver" in window) new ResizeObserver(syncHeaderHeight).observe(header);
const toggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector("#mobile-nav");
function closeNav() {
  if (!toggle || !mobileNav) return;
  mobileNav.hidden = true;
  toggle.setAttribute("aria-expanded", "false");
  toggle.textContent = "Menü";
  syncHeaderHeight();
}
if (toggle && mobileNav) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Schließen" : "Menü";
    mobileNav.hidden = !open;
    syncHeaderHeight();
  });
  mobileNav.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeNav();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !mobileNav.hidden) {
      closeNav();
      toggle.focus();
    }
  });
  matchMedia("(min-width:921px)").addEventListener("change", (e) => {
    if (e.matches) closeNav();
  });
}
// Progressive enhancement: without JavaScript every menu category remains readable.
const categories = [...document.querySelectorAll(".menu-category")];
const categoryLinks = [...document.querySelectorAll("[data-menu-category]")];
const kindLinks = [...document.querySelectorAll("[data-menu-kind]")];
const menuStatus = document.querySelector("#menu-status");
const rememberedCategory = { food: "hauptgerichte", drink: "refreshers" };

function selectCategory(id, announce = true) {
  const selected = categories.find(category => category.id === id);
  if (!selected) return false;
  const kind = selected.dataset.kind;
  rememberedCategory[kind] = id;
  categories.forEach(category => { category.hidden = category !== selected; });
  document.querySelectorAll("[data-filter-kind]").forEach(filters => {
    filters.hidden = filters.dataset.filterKind !== kind;
  });
  categoryLinks.forEach(link => {
    if (link.dataset.menuCategory === id) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
  kindLinks.forEach(link => {
    if (link.dataset.menuKind === kind) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
  if (announce && menuStatus) {
    menuStatus.textContent = `${selected.querySelector("h3").textContent}: ${selected.querySelectorAll(".dish-card").length} Einträge`;
  }
  return true;
}

function showHashCategory() {
  const id = location.hash.slice(1);
  if (id === "getraenke") selectCategory(rememberedCategory.drink, false);
  else if (id === "speisekarte" || id === "ganze-karte") selectCategory(rememberedCategory.food, false);
  else selectCategory(id, false);
}

if (categories.length) {
  selectCategory("hauptgerichte", false);
  showHashCategory();
  // Keep normal anchor links and URL history, but reveal the target before the browser scrolls.
  document.addEventListener("click", event => {
    const link = event.target.closest("a[href^='#']");
    if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    if (link.dataset.menuCategory || link.dataset.menuKind) {
      event.preventDefault();
      const id = link.dataset.menuCategory || rememberedCategory[link.dataset.menuKind];
      selectCategory(id);
      history.pushState(null, "", `#${id}`);
    } else if (link.hash === "#getraenke") {
      selectCategory(rememberedCategory.drink);
    } else if (link.hash === "#speisekarte" || link.hash === "#ganze-karte") {
      selectCategory(rememberedCategory.food);
    } else {
      selectCategory(link.hash.slice(1));
    }
  });
  window.addEventListener("hashchange", showHashCategory);
  window.addEventListener("popstate", showHashCategory);
}
const reduced = matchMedia("(prefers-reduced-motion:reduce)");
if ("IntersectionObserver" in window && !reduced.matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealing");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 },
  );
  document
    .querySelectorAll("[data-reveal]")
    .forEach((el) => observer.observe(el));
}
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const reservationDialog = document.querySelector("#reservation-dialog");
const reservationFrame = reservationDialog?.querySelector("iframe");
if (reservationDialog && reservationFrame && typeof reservationDialog.showModal === "function") {
  const loading = reservationDialog.querySelector(".reservation-loading");
  let reservationTrigger;
  document.querySelectorAll("[data-reservation-open]").forEach(link => {
    link.setAttribute("aria-haspopup", "dialog");
    link.setAttribute("aria-controls", reservationDialog.id);
    link.addEventListener("click", event => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      if (reservationDialog.open) return;
      closeNav();
      reservationTrigger = link;
      loading.hidden = false;
      reservationDialog.showModal();
      document.body.classList.add("reservation-open");
      reservationFrame.src = link.href;
    });
  });
  reservationFrame.addEventListener("load", () => {
    if (reservationFrame.hasAttribute("src")) loading.hidden = true;
  });
  reservationDialog.querySelector(".reservation-close").addEventListener("click", () => reservationDialog.close());
  reservationDialog.addEventListener("click", event => {
    if (event.target !== reservationDialog) return;
    const bounds = reservationDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) reservationDialog.close();
  });
  reservationDialog.addEventListener("close", () => {
    document.body.classList.remove("reservation-open");
    reservationFrame.removeAttribute("src");
    reservationTrigger?.focus({ preventScroll: true });
  });
}

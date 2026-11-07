document.documentElement.classList.add("enhanced");
const toggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector("#mobile-nav");
function closeNav() {
  if (!toggle || !mobileNav) return;
  mobileNav.hidden = true;
  toggle.setAttribute("aria-expanded", "false");
  toggle.textContent = "Menü";
}
if (toggle && mobileNav) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Schließen" : "Menü";
    mobileNav.hidden = !open;
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
  matchMedia("(min-width:761px)").addEventListener("change", (e) => {
    if (e.matches) closeNav();
  });
}
const occasions = {
  abend: {
    title: "Dein Feierabendteller",
    description: "Rice & Flame mit Bulgogi-Rind und ein Signature Refresher.",
    price: "19,00 €",
    detail: "Für eine Person. Vor Ort.",
    photo: "rice",
    alt: "Rice & Flame für den Feierabend",
    caption: "Ein langer Tag. Ein voller Teller.",
  },
  zwei: {
    title: "Euer Abend zu zweit",
    description:
      "Bún Bò Nam Bộ, Rice & Flame mit Rind, The Tower Deluxe und zwei Signature Refreshers.",
    price: "46,50 €",
    detail: "Für zwei Personen. 23,25 € pro Person bei gleicher Teilung.",
    photo: "tower",
    alt: "The Tower Deluxe zum Teilen",
    caption: "Ein Tisch. Viele gute Gründe zu teilen.",
  },
  brunch: {
    title: "Süß trifft herzhaft",
    description:
      "Bánh Mì mit BBQ Pork, Golden Honey French Toast und zwei Cappuccino.",
    price: "35,00 €",
    detail: "Für zwei Personen. Samstag und Sonntag ab 12 Uhr.",
    photo: "corner",
    alt: "Warmer Sitzbereich im Spice & Honey für den Wochenendbrunch",
    caption: "Am Wochenende darf es ein bisschen länger dauern.",
  },
};
const result = document.querySelector("#occasion-result");
const photo = document.querySelector("#occasion-photo");
const caption = document.querySelector("#occasion-caption");
document.querySelectorAll("[data-occasion]").forEach((button) =>
  button.addEventListener("click", () => {
    const item = occasions[button.dataset.occasion];
    if (!item || !result) return;
    document
      .querySelectorAll("[data-occasion]")
      .forEach((other) =>
        other.setAttribute("aria-pressed", String(other === button)),
      );
    const title = document.createElement("h3");
    title.textContent = item.title;
    const description = document.createElement("p");
    description.textContent = item.description;
    const price = document.createElement("p");
    price.className = "occasion-price";
    price.textContent = item.price;
    const detail = document.createElement("p");
    detail.textContent = item.detail;
    result.replaceChildren(title, description, price, detail);
    photo.src = `assets/${item.photo}.webp`;
    photo.alt = item.alt;
    photo.classList.remove("image-change");
    requestAnimationFrame(() => photo.classList.add("image-change"));
    caption.textContent = item.caption;
  }),
);
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

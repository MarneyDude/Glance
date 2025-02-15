const catalogLinkEl = document.querySelector("#catalog-link");
const homeLinkEl = document.querySelector("#home-link");
const modalCatalogEl = document.querySelector(".modal__overlay");
const catalogLinksEl = document.querySelectorAll(".catalog-link");
console.log("catalogLinksEl:", catalogLinksEl);
const catalogNameEl = document.querySelector(".filter-title");
const currentPathEl = window.location.pathname;

catalogLinkEl.addEventListener("click", handleCatalogClick);
homeLinkEl.addEventListener("click", closeCatalog);
catalogLinksEl.forEach((link) =>
  link.addEventListener("click", handleCatalogSelection)
);

function openModal() {
  modalCatalogEl.scrollTop = 0;
  modalCatalogEl.classList.toggle("menu__is-open");
  document.body.style.overflow = modalCatalogEl.classList.contains(
    "menu__is-open"
  )
    ? "hidden"
    : "auto";
}

function closeCatalog() {
  modalCatalogEl.classList.remove("menu__is-open");
  document.body.style.overflow = "auto";
}

function handleCatalogClick(event) {
  event.preventDefault();
  openModal();
}

function handleCatalogSelection(event) {
  const selectedLinkEl = event.target.closest("a");
  if (!selectedLinkEl) return;

  const catalogName = selectedLinkEl.textContent.trim();
  localStorage.setItem("selectedCatalog", catalogName);
  catalogNameEl.textContent = catalogName;
}

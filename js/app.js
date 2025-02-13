const link = document.querySelector("#catalog-link");
const modalCatalog = document.querySelector(".modal-overlay");
const homeLink = document.querySelector("#home-link");
const catalogLinkEl = document.querySelectorAll(".catalog-link");
const catalogNameEl = document.querySelector(".filter-title");

link.addEventListener("click", (event) => {
  event.preventDefault();
  modalCatalog.scrollTop = 0;
  if (modalCatalog.classList.contains("menu-is-open")) {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }

  modalCatalog.classList.toggle("menu-is-open");
});

homeLink.addEventListener("click", (event) => {
  event.preventDefault();

  document.body.style.overflow = "auto";

  modalCatalog.classList.remove("menu-is-open");
});

let catalogName = "";

catalogLinkEl.forEach((link) => {
  link.addEventListener("click", (event) => {
    catalogName = event.target.closest("a").textContent.trim();

    localStorage.setItem("selectedCatalog", catalogName);

    catalogNameEl.textContent = catalogName;
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const catalogName = localStorage.getItem("selectedCatalog");

  if (catalogName) {
    catalogNameEl.textContent = catalogName;
  }
});

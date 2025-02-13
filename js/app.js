const link = document.querySelector("#catalog-link");
const modalCatalog = document.querySelector(".modal-catalog");
const homeLink = document.querySelector("#home-link");

link.addEventListener("click", (event) => {
  event.preventDefault();

  if (modalCatalog.classList.contains("menu-is-open")) {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }

  modalCatalog.classList.toggle("menu-is-open");
});

homeLink.addEventListener("click", (event) => {
  event.preventDefault();

  if (modalCatalog.classList.contains("menu-is-open")) {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }
  modalCatalog.classList.remove("menu-is-open");
});

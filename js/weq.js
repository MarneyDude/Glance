const link = document.querySelector("#catalog-link");
const modalCatalog = document.querySelector(".modal-catalog");
const homeLink = document.querySelector("#home-link");

function openModal(event) {
  event.preventDefault();
  document.body.style.overflow = "hidden";
  modalCatalog.classList.add("menu-is-open");

  link.removeEventListener("click", openModal);
  link.addEventListener("click", closeModal);
  homeLink.addEventListener("click", closeModal);
}

function closeModal(event) {
  document.body.style.overflow = "auto";

  event.preventDefault();

  modalCatalog.classList.remove("menu-is-open");
  window.location.href = homeLink.href;

  link.removeEventListener("click", closeModal);
  link.addEventListener("click", openModal);
}

link.addEventListener("click", openModal);

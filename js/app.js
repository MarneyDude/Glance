document.addEventListener("DOMContentLoaded", function () {
  const catalogLink = document.getElementById("catalog-link");
  const modalCatalog = document.getElementById("modal-catalog");
  const modalBackdrop = document.querySelector(".modal-backdrop");

  // Відкриття модального вікна при натисканні на "Каталог"
  catalogLink.addEventListener("click", function (event) {
    event.preventDefault();
    modalCatalog.classList.add("menu-is-open");
    modalCatalog.classList.remove("menu-is-closing");
  });

  // Закриття модального вікна при натисканні будь-де поза модальним вікном
  document.addEventListener("click", function (event) {
    if (
      !modalBackdrop.contains(event.target) &&
      !catalogLink.contains(event.target)
    ) {
      modalCatalog.classList.add("menu-is-closing");
      setTimeout(() => {
        modalCatalog.classList.remove("menu-is-open", "menu-is-closing");
      }, 350);
    }
  });
});

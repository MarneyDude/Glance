// Отримуємо елементи для взаємодії
const catalogLink = document.getElementById("catalog-link");
const modalCatalog = document.getElementById("modal-catalog");

// Відкриття модального вікна при натисканні на "Каталог"
catalogLink.addEventListener("click", function (event) {
  event.preventDefault(); // Зупиняємо перехід по посиланню
  modalCatalog.classList.add("menu-is-open"); // Додаємо клас для відкриття
});

// Закриття модального вікна при натисканні на фон
modalCatalog.addEventListener("click", function (event) {
  if (event.target === modalCatalog) {
    // Перевіряємо, чи натиснуто саме на фон
    modalCatalog.classList.remove("menu-is-open"); // Закриваємо модальне вікно
  }
});

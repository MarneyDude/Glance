// document.addEventListener("DOMContentLoaded", function () {
//   const catalogLink = document.getElementById("catalog-link");
//   const homeLink = document.getElementById("home-link");
//   const basketLink = document.getElementById("basket-link");
//   const profileLink = document.getElementById("profile-link");
//   const smartphoneLink = document.getElementById("smartphone-link");
//   const watchLink = document.getElementById("watch-link");
//   const tvLink = document.getElementById("tv-link");
//   const audioLink = document.getElementById("audio-link");
//   const hairLink = document.getElementById("hair-link");
//   const consoleLink = document.getElementById("console-link");
//   const ovenLink = document.getElementById("oven-link");
//   const homeLivingLink = document.getElementById("home-living-link");
//   const travelLink = document.getElementById("travel-link");
//   const childrenLink = document.getElementById("children-link");
//   const perfumesLink = document.getElementById("perfumes-link");
//   const saleLink = document.getElementById("sale-link");

//   const modalCatalog = document.getElementById("modal-catalog");
//   const modalBackdrop = document.querySelector(".modal-backdrop");

//   // Відкриття модального вікна при натисканні на "Каталог"
//   catalogLink.addEventListener("click", function (event) {
//     event.preventDefault();
//     if (modalCatalog.classList.contains("menu-is-open")) {
//       // Якщо модальне вікно вже відкрите, то закриваємо його
//       modalCatalog.classList.add("menu-is-closing");
//       setTimeout(() => {
//         modalCatalog.classList.remove("menu-is-open", "menu-is-closing");
//       }, 350);
//     } else {
//       // Якщо модальне вікно закрите, то відкриваємо його
//       modalCatalog.classList.add("menu-is-open");
//       modalCatalog.classList.remove("menu-is-closing");
//     }
//   });

//   // При натисканні на "Home", якщо модальне вікно закрите, просто переходимо по посиланню
//   homeLink.addEventListener("click", function (event) {
//     if (!modalCatalog.classList.contains("menu-is-open")) {
//       // Якщо модальне вікно закрите, просто дозволяємо перехід по посиланню
//       return;
//     } else {
//       // Якщо модальне вікно відкрите, запускаємо анімацію закриття
//       event.preventDefault(); // Зупиняємо перехід по посиланню
//       modalCatalog.classList.add("menu-is-closing");
//       setTimeout(() => {
//         modalCatalog.classList.remove("menu-is-open", "menu-is-closing"); // Тепер виконуємо перехід
//       }, 350);
//     }
//   });

//   // Функція для запуску анімації та відкриття посилання після закриття модального вікна
//   function triggerAnimationAndNavigate(link) {
//     link.addEventListener("click", function (event) {
//       event.preventDefault(); // Зупиняємо перехід одразу

//       // Запускаємо анімацію закриття
//       modalCatalog.classList.add("menu-is-closing");

//       // Очікуємо завершення анімації
//       modalCatalog.addEventListener(
//         "transitionend",
//         function onTransitionEnd() {
//           // Видаляємо класи після завершення анімації
//           modalCatalog.classList.remove("menu-is-open", "menu-is-closing");

//           // Тепер виконуємо перехід за посиланням
//           window.location.href = link.href;

//           // Видаляємо обробник події, щоб він не спрацював кілька разів
//           modalCatalog.removeEventListener("transitionend", onTransitionEnd);
//         }
//       );
//     });
//   }

//   // Додаємо анімацію до всіх посилань (окрім "Home", оскільки ми не хочемо змінювати його поведінку)
//   triggerAnimationAndNavigate(basketLink);
//   triggerAnimationAndNavigate(profileLink);
//   triggerAnimationAndNavigate(smartphoneLink);
//   triggerAnimationAndNavigate(watchLink);
//   triggerAnimationAndNavigate(tvLink);
//   triggerAnimationAndNavigate(audioLink);
//   triggerAnimationAndNavigate(hairLink);
//   triggerAnimationAndNavigate(consoleLink);
//   triggerAnimationAndNavigate(ovenLink);
//   triggerAnimationAndNavigate(homeLivingLink);
//   triggerAnimationAndNavigate(travelLink);
//   triggerAnimationAndNavigate(childrenLink);
//   triggerAnimationAndNavigate(perfumesLink);
//   triggerAnimationAndNavigate(saleLink);

//   // Закриття модального вікна при натисканні поза ним
//   document.addEventListener("click", function (event) {
//     if (
//       !modalBackdrop.contains(event.target) &&
//       !catalogLink.contains(event.target)
//     ) {
//       modalCatalog.classList.add("menu-is-closing");
//       setTimeout(() => {
//         modalCatalog.classList.remove("menu-is-open", "menu-is-closing");
//       }, 350);
//     }
//   });
// });

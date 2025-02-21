const catalog = {
  phones: [
    {
      brand: "Apple",
      model: "iPhone 14",
      price: 999,
      discountPercentage: 10, // Знижка 10%
      quantity: 50,
      colors: ["Silver", "Black", "Blue"],
      features: ["5G", "OLED Display", "Fast Charging"],
      photo:
        "https://cdn.comfy.ua/media/catalog/product/cache/5/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/u/a/uaua_iphone14_midnight_pdp_image_position-1a_2.jpg",
    },
    {
      brand: "Samsung",
      model: "Galaxy S23",
      price: 899,
      discountPercentage: 11, // Знижка 11%
      quantity: 30,
      colors: ["Silver", "Black", "Blue"],
      features: ["5G", "OLED Display", "Fast Charging"],
      photo:
        "https://cdn.comfy.ua/media/catalog/product/cache/5/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/s/m/sm-s721_galaxys24fe_graphite_front.jpg",
    },
    {
      brand: "Xiaomi",
      model: "Redmi Note 13 Pro +",
      price: 499,
      discountPercentage: 10, // Знижка 10%
      quantity: 100,
      colors: ["Silver", "Black", "Blue"],
      features: ["5G", "OLED Display", "Fast Charging"],
      photo:
        "https://cdn.comfy.ua/media/catalog/product/cache/5/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/_/8/_8_45_.jpg",
    },
    {
      brand: "OnePlus",
      model: "9 Pro",
      price: 799,
      discountPercentage: 6, // Знижка 6%
      quantity: 80,
      colors: ["Black", "Silver", "Green"],
      features: ["5G", "Fluid AMOLED Display", "Fast Charging"],
      photo:
        "https://cdn.comfy.ua/media/catalog/product/cache/5/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/6/0/60ee98bb73879_9pro-morning-mist-02-rgb_1_.jpg",
    },
    {
      brand: "Poco",
      model: "X7 Pro 8",
      price: 599,
      discountPercentage: 8, // Знижка 8%
      quantity: 60,
      colors: ["White", "Black", "Green"],
      features: ["5G", "OLED Display", "Google Assistant"],
      photo:
        "https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/_/8/_8.29_.jpg/w_320",
    },
  ],
  smartWatches: [
    {
      brand: "Apple",
      model: "Watch 5",
      price: 399,
      discountPercentage: 10, // Знижка 10%
      quantity: 40,
      colors: ["Gold", "Silver", "Black"],
      features: ["Heart Rate Monitor", "GPS", "Waterproof"],
      photo:
        "https://i.allo.ua/media/catalog/product/cache/3/small_image/212x184/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_watch_se_44mm_gps_midnight_aluminum_sport_band_midnight_pdp_image_position_1__ce-ww_result.webp",
    },
    {
      brand: "Samsung",
      model: "Galaxy Watch 7",
      price: 299,
      discountPercentage: 10, // Знижка 10%
      quantity: 60,
      colors: ["Gold", "Silver", "Black"],
      features: ["Heart Rate Monitor", "GPS", "Waterproof"],
      photo:
        "https://i.allo.ua/media/catalog/product/cache/3/small_image/212x184/9df78eab33525d08d6e5fb8d27136e95/s/m/sm-l305_002_front2_cream_240429_result.webp",
    },
    {
      brand: "Garmin",
      model: "Fenix 6",
      price: 599,
      discountPercentage: 8, // Знижка 8%
      quantity: 45,
      colors: ["Black", "Silver", "Blue"],
      features: ["GPS", "Heart Rate Monitor", "Solar Charging"],
      photo:
        "https://i.allo.ua/media/catalog/product/cache/3/small_image/212x184/9df78eab33525d08d6e5fb8d27136e95/import/3664734313069868.jpg",
    },
    {
      brand: "Amazfit",
      model: "Pop 3S",
      price: 179,
      discountPercentage: 11, // Знижка 11%
      quantity: 75,
      colors: ["Black", "Silver", "Gold"],
      features: ["Heart Rate Monitor", "GPS", "Fitness Tracking"],
      photo:
        "https://i.allo.ua/media/catalog/product/cache/3/small_image/212x184/9df78eab33525d08d6e5fb8d27136e95/1/_/1_result1689945534.jpg",
    },
    {
      brand: "Fitbit",
      model: "Charge 4",
      price: 129,
      discountPercentage: 8, // Знижка 8%
      quantity: 90,
      colors: ["Black", "Plum", "White"],
      features: ["Heart Rate Monitor", "Sleep Tracking", "GPS"],
      photo:
        "https://i.allo.ua/media/catalog/product/cache/3/small_image/212x184/9df78eab33525d08d6e5fb8d27136e95/import/2653566511083473.jpg",
    },
  ],
  tV: [
    {
      brand: "LG",
      model: "OLED C2",
      price: 1299,
      discountPercentage: 7, // Знижка 7%
      quantity: 15,
      colors: ["Black", "Silver", "Grey"],
      features: ["4K", "HDR", "Smart TV"],
      photo:
        "https://cdn.comfy.ua/media/catalog/product/cache/5/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/5/5/55_c4_a_1.jpg",
    },
    {
      brand: "Samsung",
      model: "QLED Q90",
      price: 1099,
      discountPercentage: 9, // Знижка 9%
      quantity: 20,
      colors: ["Black", "Silver", "Grey"],
      features: ["4K", "HDR", "Smart TV"],
      photo:
        "https://cdn.comfy.ua/media/catalog/product/cache/5/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/q/e/qe65s95cauxua.jpg",
    },
    {
      brand: "Sony",
      model: "Bravia XR",
      price: 1499,
      discountPercentage: 7, // Знижка 7%
      quantity: 10,
      colors: ["Black", "Silver"],
      features: ["4K", "HDR", "Smart TV"],
      photo:
        "https://cdn.comfy.ua/media/catalog/product/cache/5/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/a/s/assets_asset_hierarchy_consumer_assets_television_bravia_lcd_hdtv_fy_23_a80l_ecomm_product_images_xr55-65-77a80l_01-a80l-55-65-77-sony-bravia_xr-frnt_1.jpg",
    },
    {
      brand: "Philips",
      model: "V-Series",
      price: 499,
      discountPercentage: 10, // Знижка 10%
      quantity: 40,
      colors: ["Black", "Silver"],
      features: ["4K", "HDR", "Smart TV"],
      photo:
        "https://cdn.comfy.ua/media/catalog/product/cache/5/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/p/h/philips_55oled769_amb_20_1_1_.jpg",
    },
    {
      brand: "TCL",
      model: "6-Series",
      price: 899,
      discountPercentage: 11, // Знижка 11%
      quantity: 25,
      colors: ["Black", "Silver"],
      features: ["4K", "HDR", "Roku TV"],
      photo:
        "https://cdn.comfy.ua/media/catalog/product/cache/5/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/0/_/0_tcl-805-55.jpg",
    },
  ],
};

const menuLinksEl = document.querySelector("#js-menu-list");
const modalCatalogEl = document.querySelector(".js-modal-catalog");
const modalCatalogButtonEl = document.querySelector(".js-catalog-button");
const sharesListEl = document.querySelector("#js-shares-list");
const catalogListEl = document.querySelector("#js-catalog-list");
modalCatalogButtonEl.addEventListener("click", openMenuLink);
catalogListEl.addEventListener("click", openCatalogLink);
menuLinksEl.addEventListener("click", openMenuLink);

renderingShares();

function openCatalogLink(event) {
  event.preventDefault();
  console.log();
  localStorage.setItem("category", event.target.dataset.name);
  localStorage.setItem("categoryTitle", event.target.textContent.trim());

  window.location.href = "/catalog.html";
}

function openMenuLink(event) {
  event.preventDefault();
  const homeLink = event.target.classList.contains("menu__link--home");
  const catalogLink = event.target.classList.contains("menu__link--catalog");
  const basketLink = event.target.classList.contains("menu__link--basket");
  const profileLink = event.target.classList.contains("menu__link--profile");

  let wasCatalogOpen = modalCatalogEl.classList.contains("menu__is-open");

  if (homeLink) {
    if (modalCatalogEl.classList.contains("menu__is-open")) {
      modalCatalogEl.classList.remove("menu__is-open");
      setTimeout(function () {
        window.location.href = "/index.html";
      }, 200);
    }
  } else if (catalogLink || event.target === modalCatalogButtonEl) {
    modalCatalogEl.classList.toggle("menu__is-open");
  } else if (basketLink) {
    console.log("basketPage");
  } else if (profileLink) {
    console.log("profilePage");
  }

  if (wasCatalogOpen !== modalCatalogEl.classList.contains("menu__is-open")) {
    document.body.style.overflow = modalCatalogEl.classList.contains(
      "menu__is-open"
    )
      ? "hidden"
      : "auto";
  }
}

function renderingShares() {
  const markup = catalog.phones
    .map((phone) => {
      const {
        brand,
        model,
        price,
        discountPercentage,
        quantity,
        colors: [color1, color2, color3],
        features,
        photo,
      } = phone;

      const discountPrice = calculateDiscount(price, discountPercentage);

      return `<li class="shares__item">
                 <div class="shares-item-header">
              <img class="shares__image" src="${photo}" alt="phone" />
              <ul class="shares__color-list">
                <li class="shares__color-item">
                  <a href="#" class="shares__color-link" data-color = "${color1}"></a>
                </li>
                <li class="shares__color-item">
                  <a href="#" class="shares__color-link" data-color = "${color2}"></a>
                </li>
                <li class="shares__color-item">
                  <a href="#" class="shares__color-link" data-color = "${color3}"></a>
                </li>
              </ul>
            </div>
              <h3 class="shares__name">${brand + " " + model}</h3>
              <div class="shares__price-box">
                <p class="shares__price shares__price--discount">${discountPrice} $</p>
                <p class="shares__price shares__price--original">${price} $</p>
              </div>
              <div class="shares__info">
                <p class="shares__stock">In stock</p>
                <svg class="shares__like-icon" width="21" height="17px">
                  <use href="./images/sprite.svg#heart"></use>
                </svg>
              </div>
              <button class="shares__button" type="button">To Cart</button>
            </li>`;
    })
    .join("");

  sharesListEl.insertAdjacentHTML("afterbegin", markup);
}

function calculateDiscount(price, discountPercentage) {
  const discountAmount = (price * discountPercentage) / 100;
  const discountedPrice = price - discountAmount;

  return Math.round(discountedPrice);
}

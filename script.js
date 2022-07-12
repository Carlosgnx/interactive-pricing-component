"use strict";
/************Variables************/
const SWITCH_ELEMENT = document.querySelector(".card__switch");
let yearly = false;

/************Functions************/
/**
 *
 * @param {Number} price
 * @returns
 */
function getPrice(price) {
  if (yearly) {
    const priceWithDiscount = price - (25 / 100) * price;
    return priceWithDiscount.toFixed(2);
  }
  return price.toFixed(2);
}

function updateFields() {
  //Changing the price depending of SLIDER_VALUE
  const SLIDER_VALUE = document.querySelector(".card__range").value;
  const PRICE_ELEMENT = document.querySelector(".card__price");
  const PAGEVIEWS__ELEMENT = document.querySelector(".card__pageviews-number");
  switch (SLIDER_VALUE) {
    case "0":
      PRICE_ELEMENT.innerText = getPrice(8.0);
      PAGEVIEWS__ELEMENT.innerText = "10K";
      break;
    case "25":
      PRICE_ELEMENT.innerText = getPrice(12.0);
      PAGEVIEWS__ELEMENT.innerText = "50K";
      break;
    case "50":
      PRICE_ELEMENT.innerText = getPrice(16.0);
      PAGEVIEWS__ELEMENT.innerText = "100K";
      break;
    case "75":
      PRICE_ELEMENT.innerText = getPrice(24.0);
      PAGEVIEWS__ELEMENT.innerText = "500K";
      break;
    case "100":
      PRICE_ELEMENT.innerText = getPrice(36.0);
      PAGEVIEWS__ELEMENT.innerText = "1M";
      break;
  }
}

/************Listeners************/
document.querySelector(".card__range").addEventListener("input", (e) => {
  //Changing the slider fill color
  const SLIDER_ELEMENT = e.target;
  const SLIDER_VALUE = SLIDER_ELEMENT.value;
  const STYLE = document.querySelector(":root");
  STYLE.style.setProperty(
    "--deg",
    `linear-gradient(
        to right,
        rgba(165, 243, 235, 1) 0%,
        rgba(165, 243, 235, 1) ${SLIDER_VALUE}%,
        #eaeefb ${SLIDER_VALUE}%,
        #eaeefb 100%
      )`
  );
  updateFields();
});

/**
 * Move switch button on click
 */
SWITCH_ELEMENT.addEventListener("click", () => {
  SWITCH_ELEMENT.classList.toggle("toggle");
  yearly ? (yearly = false) : (yearly = true);
  updateFields();
});

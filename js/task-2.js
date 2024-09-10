"use strict";

import { images } from "../src/main.js";

const galleryEl = document.querySelector(".gallery");
galleryEl.style.listStyleType = "none";
console.log(galleryEl);

const imgMarkup = (transaction) => {
  return `<li><img src="${transaction.url}" alt="${transaction.alt}" width="360"></li>`;
};

const setImgMarkup = (images) => {
  return images.map(imgMarkup).join("");
};

console.log(setImgMarkup(images));
galleryEl.insertAdjacentHTML("beforeend", setImgMarkup(images));

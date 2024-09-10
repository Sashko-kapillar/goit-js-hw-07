"use strict";

import { images } from "../src/main.js";

const galleryElem = document.querySelector(".gallery");
galleryElem.style.listStyleType = "none";

// Деструктурізація
for (const img of images) {
  const { preview, original, description } = img;

  // створення елемента <img>
  const imgEl = document.createElement("img");
  imgEl.classList = "gallery-image";
  imgEl.width = "360";
  imgEl.src = `${preview}`;
  imgEl.alt = `${description}`;
  imgEl.dataset.source = original;

  // створення елемента <a>
  const linkEl = document.createElement("a");
  linkEl.classList = "gallery-link";
  linkEl.href = `${original}`;

  // створення елемента <li>
  const itemEl = document.createElement("li");
  itemEl.classList = "gallery-item";

  // вкладення елементів (перший той у який вкладаємо, тоді той що вкладаємо)
  linkEl.appendChild(imgEl);
  itemEl.appendChild(linkEl);
  galleryElem.appendChild(itemEl);
}

galleryElem.addEventListener("click", (event) => {
  // заборона стандартної поведінки браузера(завантаження зображення на ПК)
  event.preventDefault();

  // перевірка чи клік на картинці
  if (event.target.nodeName !== "IMG") return;

  // бібліотека створює елемент <img>
  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="900">
  `);

  // елемент <img> відкривається у модальному вікні
  instance.show();

  // закриваємо модальне вікно клавішею Esc
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
});

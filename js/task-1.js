"use strict";

const listWithId = document.querySelector("#categories");
listWithId.style.listStyleType = "none";
listWithId.style.color = "#2e2f42";
listWithId.style.flexDirection = "column";
listWithId.style.gap = "24px";
// console.log(listWithId);

const item = document.querySelectorAll(".item");
console.log(item.length);

const heading = document.querySelectorAll("h2");
// console.log(heading);
heading.forEach((head) => console.log(head.textContent));

const itemLi = document.querySelectorAll(".item li");
console.log(itemLi.length);

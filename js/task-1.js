"use strict";

const listWithId = document.querySelector("#categories");
listWithId.style.padding = "24px";
listWithId.style.width = "440px";
listWithId.style.gap = "24px";

const item = document.querySelectorAll(".item");
console.log("Numbers of categories: ", item.length);

item.forEach((head) => {
  const heading = head.querySelector("h2").textContent;
  console.log(`Category:  ${heading}`);
  const elem = head.querySelectorAll("ul > li").length;
  console.log(`Elements:  ${elem}`);
});

const input = document.getElementById("name-input");
const output = document.getElementById("name-output");
const titleOne = document.querySelector("h1");

// Створити новий елемент div
const newDiv = document.createElement("div");

// Стилізувати новий елемент div
newDiv.style.width = "408px";
newDiv.style.padding = "24px";
newDiv.style.borderRadius = "8px";
newDiv.style.backgroundColor = "#fff";
newDiv.style.border = "1px solid #cecece";
newDiv.style.margin = "0 auto";

//Розмістити нового елементу div перед елементом input
input.parentNode.insertBefore(newDiv, input);

/*  =====   чому неможливо використати цей код?   =====  */
// const newDiv = `<div></div>`;
// input.insertAdjacentHTML("beforebegin", newDiv);

// Помістити наші елементи у новий елемент div
newDiv.appendChild(input);
newDiv.appendChild(titleOne);

input.addEventListener("input", () => {
  // Очистити пробіли на початку і кінці рядка
  const name = input.value.trim();

  // Перевірити, чи рядок не пустий
  output.textContent = name ? `${name}!` : " Anonymous!";
});

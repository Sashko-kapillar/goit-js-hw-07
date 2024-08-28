function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");

// створити новий div
const createDiv = document.createElement("div");
createDiv.style.width = "534px";
createDiv.style.backgroundColor = "#fff";
createDiv.style.padding = "24px";
createDiv.style.borderRadius = "16px";
createDiv.style.margin = "0 auto";
createDiv.style.border = "1px solid #cecece";

// розмістити div перед controls елементом
controls.parentNode.insertBefore(createDiv, controls);

// помістити елементи у цей div
createDiv.appendChild(controls);
createDiv.appendChild(boxes);

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  const boxesContainer = document.getElementById("boxes");
  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
createBtn.addEventListener("click", () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100");
  }
});

destroyBtn.addEventListener("click", destroyBoxes);

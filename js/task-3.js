const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", () => {
  // Очищаємо пробіли на початку і кінці рядка
  const name = input.value.trim();

  // Перевіряємо, чи рядок не пустий
  output.textContent = name ? `${name}!` : " Anonymous!";
});

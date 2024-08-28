const loginForm = document.querySelector(".login-form");
loginForm.style.width = "408px";
loginForm.style.backgroundColor = "#fff";
loginForm.style.padding = "24px";
loginForm.style.borderRadius = "8px";
loginForm.style.border = "1px solid #cecece";
loginForm.style.margin = "0 auto";

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Запобігаємо перезавантаженню сторінки

  const formData = new FormData(loginForm);
  const formObject = {};

  for (const [key, value] of formData.entries()) {
    formObject[key] = value.trim();
  }

  if (Object.values(formObject).some((value) => value === "")) {
    alert("All form fields must be filled in");
    return;
  }

  console.log(formObject);
  loginForm.reset();
});

const label = document.querySelector("label");
console.log(label.textContent);

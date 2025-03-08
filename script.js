const inputs = document.querySelectorAll("input");
const textArea = document.querySelector("textarea");

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    const label = input.previousElementSibling;
    label.classList.add("active");
  });
  input.addEventListener("blur", () => {
    const label = input.previousElementSibling;
    label.classList.remove("active");
  });
});
textArea.addEventListener("focus", () => {
  const label = textArea.previousElementSibling;
  label.classList.add("active");
});
textArea.addEventListener("blur", () => {
  const label = textArea.previousElementSibling;
  label.classList.remove("active");
});

document.getElementById("meuForm").addEventListener("submit", function () {
  document.getElementById("botaoEnviar").disabled = true;
  document.getElementById("botaoEnviar").textContent = "Sending...";
});

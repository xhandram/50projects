const button = document.querySelector(".search-btn");
const input = document.querySelector(".search-input");

button.addEventListener("click", (e) => {
  e.preventDefault();
  input.classList.toggle("large");
});

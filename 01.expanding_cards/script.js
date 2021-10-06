const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => panel.addEventListener("click", activatePanel));

function activatePanel() {
  panels.forEach((panel) => panel.classList.remove("active"));
  this.classList.add("active");
}

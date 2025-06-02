const btnAbrir = document.querySelector(".button_schedule");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

btnAbrir.addEventListener("click", () => {
  modal.classList.add("active");
  overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
});

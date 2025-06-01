const modal = document.getElementById("modal");
const openBtn = document.querySelector(".button_schedule");

// Abrir modal
openBtn.addEventListener("click", () => {
  modal.classList.remove("hidding");
  modal.classList.add("active");
});

// Fechar modal ao clicar fora do conteúdo do form
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("active");
    modal.classList.add("hidding");
  }
});

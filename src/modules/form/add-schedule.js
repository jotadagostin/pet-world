document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const tutorName = document.getElementById("tutor-name").value;
  const petName = document.getElementById("pet-name").value;
  const phone = document.getElementById("fone").value;
  const service = document.getElementById("service-description").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!tutorName || !petName || !service || !date || !time) {
    alert("Please fill all required fields.");
    return;
  }

  const hour = parseInt(time.split(":")[0]);

  let containerClass = "";

  if (hour >= 9 && hour < 12) {
    containerClass = "container_morning";
  } else if (hour >= 13 && hour < 18) {
    containerClass = "container_afternoon";
  } else if (hour >= 19 && hour < 21) {
    containerClass = "container_night";
  } else {
    alert("Time is outside our schedule range.");
    return;
  }

  const scheduleItem = document.createElement("li");
  scheduleItem.innerHTML = `
      <div class="client_hour">
        <h2>${time}</h2>
        <h3><span>${petName}</span> / ${tutorName}</h3>
      </div>
      <div class="client_need">
        <p>${service}</p>
        <p><button class="remove-btn">Remove schedule</button></p>
      </div>
    `;

  let container = document.querySelector(
    `.${containerClass} .container_clients ul`
  );

  // Se ainda não existe a <ul>, criamos ela
  if (!container) {
    const containerClients = document.createElement("div");
    containerClients.classList.add("container_clients");

    const ul = document.createElement("ul");
    ul.appendChild(scheduleItem);
    containerClients.appendChild(ul);

    document.querySelector(`.${containerClass}`).appendChild(containerClients);
  } else {
    container.appendChild(scheduleItem);
  }

  // Limpa o formulário
  e.target.reset();

  // Fecha o modal
  document.getElementById("modal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
});

// Exibe o modal
document
  .querySelector(".button_schedule")
  .addEventListener("click", function () {
    document.getElementById("modal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  });

// Fecha o modal ao clicar fora
document.getElementById("overlay").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
});

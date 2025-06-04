//Event delegation to remove the schedules:

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-btn")) {
    const confirmDelete = confirm(
      "Do you really want to remove this schedule?"
    );
    if (confirmDelete) {
      const li = event.target.closest("li");
      const ul = li.parentElement;

      li.remove();

      //remove <ul> if it is empty (to not let empty list in the DOM)
      if (ul.children.length === 0) {
        ul.parentElement.remove(); //remove container_clients
      }
    }
  }
});

//coldAppetizersModal menu
let openColdAppetizersBtn = document.getElementById("coldAppetizersBtn");
let modal = document.getElementById("coldAppetizersModal")
let closeColdAppetizersBtn = document.getElementById("closeModalBtn")

openColdAppetizersBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeColdAppetizersBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  event.target === modal && (modal.style.display = "none");
});

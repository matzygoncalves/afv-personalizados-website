const menuButton = document.querySelector(".header-menu-button");
const header = document.querySelector(".header");

menuButton.addEventListener("click", function () {
  header.classList.toggle("active");
});

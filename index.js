const menuOpen = document.querySelector(".bi-list");
const menuClose = document.querySelector(".close_hamb");
const containerNav = document.querySelector(".container-nav");
const navList = document.querySelector(".nav-list");

menuOpen.addEventListener("click", () => {
  containerNav.style.display = "flex";
  navList.style.display = "none";
});

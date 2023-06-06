const navLinks = document.getElementById("nav-links");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navList = document.querySelectorAll('.nav-links li');

function toggleNav() {
  navLinks.classList.toggle("nav-active");
  hamburgerMenu.classList.toggle("toggle");
}

hamburgerMenu.addEventListener("click", toggleNav);

navList.forEach(link => {
  link.addEventListener('click', toggleNav);
});

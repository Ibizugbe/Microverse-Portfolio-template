const menuOpen = document.querySelector('.bi-list');
const containerNav = document.querySelector('.container-nav');
const navList = document.querySelector('.nav-list');
const about = document.querySelectorAll('.mobile-nav-links');

menuOpen.addEventListener('click', () => {
  containerNav.style.display = 'flex';
  navList.style.display = 'none';
});

about.forEach((n) => {
  n.addEventListener('click', () => {
    containerNav.style.display = 'none';
    navList.style.display = 'flex';
  });
});

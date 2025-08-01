const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active'); // 👉 activa la X visual
  if (hamburger.textContent === '☰') {
    hamburger.textContent = '✕';
  } else {
    hamburger.textContent = '☰';
  }
});
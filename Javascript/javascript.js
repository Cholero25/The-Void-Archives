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



function colorsector(value){
  
const colors = document.querySelectorAll('.card-links');

colors.forEach(val => {
  if (value === '' || val.classList.contains(value)){
    val.style.display = 'block'
  } else {
    val.style.display = 'none'
  }
});

}

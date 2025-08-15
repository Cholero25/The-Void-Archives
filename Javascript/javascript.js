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


let index = 0;
let carrucel = [
  "Images/Hero1.png",
  "Images/Hero2.png",
  "Images/Bloodborne.png",
  "Images/Cleric.png",
  "Images/Nostramus.png",
  "Images/Theinfector.png",
  "Images/Yellowmonster.png",
  "Images/Tyrant.png"

];

const putcarrucelinside = document.getElementById('Carrucel');

// Función de transición
function fadeOutIn() {
  // Fade-out
  putcarrucelinside.classList.add('fade-out');
  putcarrucelinside.classList.remove('fade-in');

  setTimeout(() => {
    // Cambiamos la imagen
    index = (index + 1) % carrucel.length;
    putcarrucelinside.src = carrucel[index];

    // Fade-in
    putcarrucelinside.classList.remove('fade-out');
    putcarrucelinside.classList.add('fade-in');
  }, 900);
}

// 1️⃣ Mostrar imagen inicial inmediatamente
putcarrucelinside.src = (carrucel[index]);
putcarrucelinside.classList.add('fade-in');

// 2️⃣ Hacer primer cambio rápido (1 segundo después)
setTimeout(fadeOutIn, 1000);

// 3️⃣ Continuar el ciclo normal cada 10 segundos
setInterval(fadeOutIn, 10000);




let indiceActual = 0;
const imagenesFondo = [
  "Images/Tentacle.webp",
  "Images/spacearm.png",
  "Images/amygala.png",
  "Images/armdeadspace.png",
  "Images/fearandhungh.png"
];

const elementoFondo = document.getElementById('background');

// Asegúrate de tener estas clases en tu CSS
elementoFondo.classList.add('fondo-transicion');

function cambiarFondoConTransicion() {
  // Primera fase: desvanecer
  elementoFondo.style.opacity = '0';
  
  setTimeout(() => {
    // Cambia la imagen
    indiceActual = (indiceActual + 1) % imagenesFondo.length;
    elementoFondo.style.backgroundImage = `url('${imagenesFondo[indiceActual]}')`;
    
    // Segunda fase: aparecer
    elementoFondo.style.opacity = '1';
  }, 1000); // Debe coincidir con el tiempo de transición CSS
}

// Configuración inicial
elementoFondo.style.backgroundImage = `url('${imagenesFondo[indiceActual]}')`;
elementoFondo.style.opacity = '1';

// Iniciar el carrusel
setInterval(cambiarFondoConTransicion, 6000);
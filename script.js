let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("paqueteria");
        habilidades[3].classList.add("figmacanva");
        habilidades[4].classList.add("gitgithub");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}
  /* ----------------- JS para desplazar el carrusel ----------------- */
  const track   = document.getElementById('track');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsBox = document.getElementById('dots');
  const slides  = Array.from(track.children);
  let  index    = 0;

  /* Crea los puntos (indicadores) dinámicamente */
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => moveToSlide(i));
    dotsBox.appendChild(dot);
  });
  const dots = Array.from(dotsBox.children);

  /* Función genérica para cambiar de slide */
  function moveToSlide(newIndex) {
    index = (newIndex + slides.length) % slides.length; // asegura loop infinito
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(d => d.classList.remove('active'));
    dots[index].classList.add('active');
  }

  /* Listeners para botones */
  nextBtn.addEventListener('click', () => moveToSlide(index + 1));
  prevBtn.addEventListener('click', () => moveToSlide(index - 1));

  /* Opcional: auto‑avance cada X segundos */
  // setInterval(() => moveToSlide(index + 1), 5000);

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
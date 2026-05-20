document.addEventListener("DOMContentLoaded", function () {
  const fechaFestival = new Date(2026, 9, 10, 16, 0, 0).getTime(); 

  const contador = setInterval(function() {
    const ahora = new Date().getTime();
    const distancia = fechaFestival - ahora;

    const elDias = document.getElementById("dias");
    const elHoras = document.getElementById("horas");
    const elMinutos = document.getElementById("minutos");
    const elSegundos = document.getElementById("segundos");

    if (distancia < 0) {
      clearInterval(contador);
      const contenedor = document.getElementById("cuenta-regresiva");
      if (contenedor) {
        contenedor.innerHTML = "<div class='tiempo-bloque' style='width:100%'><span>¡YA INICIÓ!</span></div>";
      }
      return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    if (elDias && elHoras && elMinutos && elSegundos) {
      elDias.innerText = String(dias).padStart(2, '0');
      elHoras.innerText = String(horas).padStart(2, '0');
      elMinutos.innerText = String(minutos).padStart(2, '0');
      elSegundos.innerText = String(segundos).padStart(2, '0');
    }
  }, 1000);
});

  const items = document.querySelectorAll('.carrusel-item');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  let posicionActual = 0;

  function mostrarImagen(indice) {

    items[posicionActual].classList.remove('activo');

    if (indice >= items.length) {
      posicionActual = 0;
    } else if (indice < 0) {
      posicionActual = items.length - 1;
    } else {
      posicionActual = indice;
    }

    items[posicionActual].classList.add('activo');
  }

  if (btnNext && btnPrev && items.length > 0) {
    btnNext.addEventListener('click', () => {
      mostrarImagen(posicionActual + 1);
    });

    btnPrev.addEventListener('click', () => {
      mostrarImagen(posicionActual - 1);
    });
  
    setInterval(() => {
      mostrarImagen(posicionActual + 1);
    }, 5000);
  }
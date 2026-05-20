
const fechaFestival = new Date('Oct 10, 2026 15:00:00').getTime();

const countdown = setInterval(() => {

  const ahora = new Date().getTime();
 
  const distancia = fechaFestival - ahora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById('dias').innerText = dias < 10 ? '0' + dias : dias;
  document.getElementById('horas').innerText = horas < 10 ? '0' + horas : horas;
  document.getElementById('minutos').innerText = minutos < 10 ? '0' + minutos : minutos;
  document.getElementById('segundos').innerText = segundos < 10 ? '0' + segundos : segundos;
 
  if (distancia < 0) {
    clearInterval(countdown);
    document.getElementById('cuenta-regresiva').innerHTML = "<div class='tiempo-bloque' style='width:100%'><h2>¡EL VIBRA FEST YA COMENZÓ!</h2></div>";
  }
}, 1000);
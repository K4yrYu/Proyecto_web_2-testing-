///////////////////////////////////////////////////

//script boton ayuda


document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
      var boton = document.getElementById('boton');
      if (boton) { // Asegúrate de que el elemento existe antes de intentar acceder a su estilo
          boton.style.position = 'fixed'; // Establecer la posición del botón como fija
      }
  });
});
//////////////////////////////////////////
 
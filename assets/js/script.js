



///////////////////////////////////////////////////

//script cinta v2

document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
      var scrollPos = window.scrollY;
      var boton = document.getElementById('boton');
      if (boton) { // Asegúrate de que el elemento existe antes de intentar acceder a su estilo
          boton.style.top = 50 + scrollPos + 'px';
      }
  });
});

//////////////////////////////////////////
 
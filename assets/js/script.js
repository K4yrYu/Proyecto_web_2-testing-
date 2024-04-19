$(document).ready(function() {
    $(window).scroll(function() {
      var scrollPos = $(document).scrollTop();
      $('#boton').css({
        'top': 50 + scrollPos + '%' // Ajusta el porcentaje para un desplazamiento más suave
      });
    });
  });
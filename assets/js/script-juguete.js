import { juguete } from "./api-juguetes.js";

//apartado de juguete

// Función para generar el HTML de una tarjeta de juegos
 const generateJugueteCard = (juguete) => {
  return `
      <div class="card col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-5">
          <img src="${juguete.img}" class="card-img-top" alt="${juguete.precio}">
          <div class="card-body">
              <h5 class="card-title">${juguete.name}</h5>
              <h5 class="card-title">${juguete.precio}</h5>
              <button class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i>&nbsp;Comprar</button>
          </div>
      </div>
  `;
};

// Función para renderizar las tarjetas de juegos 
const renderJuguetes = (juguetes) => {
  const contenedor = document.getElementById("contenedorJuguete");
  contenedor.innerHTML = ""; // Limpiar el contenedor
  juguetes.forEach((juguete) => {
      const cardHTML = generateJugueteCard(juguete);
      contenedor.innerHTML += cardHTML; // Agregar la tarjeta al contenedor
  });
};

// Mostrar todos los juegos al principio
renderJuguetes(juguete);


//Listener de evento para el campo de búsqueda
const searchInput = document.getElementById("nombre");
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const filteredJuguetes = juego.filter((juguete) =>
      juguete.name.toLowerCase().includes(searchTerm)
  );
  renderJuegos(filteredJuguetes);
});


// Listener de evento para el botón "compra"
const contenedor = document.getElementById("contenedorJuguete");
contenedor.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-primary")) {
      const button = event.target;
      const jugueteCard = button.closest(".card");
      const jugueteName = jugueteCard.querySelector(".card-title").textContent;
      // Redireccionar al detalle del Digimon seleccionado
      window.location.href = `jugete-unico.html?name=${encodeURIComponent(jugueteName)}`;
  }
});

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
  
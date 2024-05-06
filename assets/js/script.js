import { juego } from "./api-juegos.js";

//script catalogo de juegos (con api :3)

//apartado de juegos

// Función para generar el HTML de una tarjeta de juegos
 const generateJuegoCard = (juego) => {
  return `
      <div class="card col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-5">
          <img src="${juego.img}" class="card-img-top" alt="${juego.precio}">
          <div class="card-body">
              <h5 class="card-title">${juego.name}</h5>
              <h5 class="card-title">${juego.precio}</h5>
              <button class="btn btn-primary">Añadir al Carrito</button>
          </div>
      </div>
  `;
};

// Función para renderizar las tarjetas de juegos
const renderJuegos = (juegos) => {
  const contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = ""; // Limpiar el contenedor
  juegos.forEach((juego) => {
      const cardHTML = generateJuegoCard(juego);
      contenedor.innerHTML += cardHTML; // Agregar la tarjeta al contenedor
  });
};

// Mostrar todos los juegos al principio
renderJuegos(juego);


//Listener de evento para el campo de búsqueda
const searchInput = document.getElementById("nombre");
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const filteredJuegos = juego.filter((juego) =>
      juego.name.toLowerCase().includes(searchTerm)
  );
  renderJuegos(filteredJuegos);
});

// Listener de evento para el botón "compra"
const contenedor = document.getElementById("contenedor");
contenedor.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-primary")) {
      const button = event.target;
      const juegoCard = button.closest(".card");
      const juegoName = juegoCard.querySelector(".card-title").textContent;
      // Redireccionar al detalle del Digimon seleccionado
      window.location.href = `juego-unico.html?name=${encodeURIComponent(juegoName)}`;
  }
});
////////////////////////////////////////////////////

//apartado de consolas
/*
// Función para generar el HTML de una tarjeta de juegos
 const generateJuegoCard = (juego) => {
  return `
      <div class="card col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-5">
          <img src="${juego.img}" class="card-img-top" alt="${juego.precio}">
          <div class="card-body">
              <h5 class="card-title">${juego.name}</h5>
              <h5 class="card-title">${juego.precio}</h5>
              <button class="btn btn-primary">Añadir al Carrito</button>
          </div>
      </div>
  `;
};

// Función para renderizar las tarjetas de juegos
const renderJuegos = (juegos) => {
  const contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = ""; // Limpiar el contenedor
  juegos.forEach((juego) => {
      const cardHTML = generateJuegoCard(juego);
      contenedor.innerHTML += cardHTML; // Agregar la tarjeta al contenedor
  });
};

// Mostrar todos los juegos al principio
renderJuegos(juego);


//Listener de evento para el campo de búsqueda
const searchInput = document.getElementById("nombre");
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const filteredJuegos = juego.filter((juego) =>
      juego.name.toLowerCase().includes(searchTerm)
  );
  renderJuegos(filteredJuegos);
});

// Listener de evento para el botón "compra"
const contenedor = document.getElementById("contenedor");
contenedor.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-primary")) {
      const button = event.target;
      const juegoCard = button.closest(".card");
      const juegoName = juegoCard.querySelector(".card-title").textContent;
      // Redireccionar al detalle del Digimon seleccionado
      window.location.href = `juego-unico.html?name=${encodeURIComponent(juegoName)}`;
  }
});
*/ 


///////////////////////////////////////////////////

//script de la cinta
$(document).ready(function() {
    $(window).scroll(function() {
      var scrollPos = $(document).scrollTop();
      $('#boton').css({
        'top': 50 + scrollPos + '%' // Ajusta el porcentaje para un desplazamiento más suave
      });
    });
  });


  //////////////////////////////////////////
 
import { consola } from "./api-consolas.js";

//apartado de consolas

// Función para generar el HTML de una tarjeta de consolas
 const generateConsolaCard = (consola) => {
  return `
      <div class="card col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-5">
          <img src="${consola.img}" class="card-img-top" alt="${consola.precio}">
          <div class="card-body">
              <h5 class="card-title">${consola.name}</h5>
              <h5 class="card-title">&nbsp</h5>
              <h5 class="card-title">${consola.precio}</h5>
              <button class="btn btn-primary">Añadir al Carrito</button>
          </div>
      </div>
  `;
};

// Función para renderizar las tarjetas de consolas
const renderConsolas = (consolas) => {
  const contenedor = document.getElementById("contenedorConsolas");
  contenedor.innerHTML = ""; // Limpiar el contenedor
  consolas.forEach((consola) => {
      const cardHTML = generateConsolaCard(consola);
      contenedor.innerHTML += cardHTML; // Agregar la tarjeta al contenedor
  });
};

// Mostrar todos las consolas al principio
renderConsolas(consola);


//Listener de evento para el campo de búsqueda
const searchInput = document.getElementById("nombre");
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const filteredConsolas = consola.filter((consola) =>
      consola.name.toLowerCase().includes(searchTerm)
  );
  renderConsolas(filteredConsolas);
});
contenedorConsolas

// Listener de evento para el botón "compra"
const contenedor = document.getElementById("contenedorConsolas");
contenedor.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-primary")) {
      const button = event.target;
      const consolaCard = button.closest(".card");
      const consolaName = consolaCard.querySelector(".card-title").textContent;
      // Redireccionar la consola seleccionada
      window.location.href = `consola-unica.html?name=${encodeURIComponent(consolaName)}`;
  }
});

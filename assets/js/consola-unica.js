
//alerta de añadido al carrito
const contenedor = document.getElementById("consolaDetailContainer");
contenedor.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-primary")) {
    // Mostrar la alerta con SweetAlert
    Swal.fire({
      title: "¡Producto añadido al carrito!",
      icon: "success"
    }).then((result) => {
      // Redirigir a juego.html después de que el usuario cierre la alerta
      if (result.isConfirmed) {
        window.location.href = "consolas.html";
      }
    });
  }
});


// Función para generar el HTML de los detalles de la consola
const generateConsolaDetailHTML = (consola) => {
    return `
        <div class="container mt-3">
            <div class="row justify-content-center">
                <div class="col-xl-12">
                    <!-- Tarjeta -->
                    <div class="row mt-3">
                        <div class="col-md-8 col-lg-8 col-xl-8 text-center">
                            <img src="${consola.img}" class="img-fluid" alt="${consola.precio}" style="max-width: 100%; height: 100%;">
                        </div>
                        <div class="col-md-4 col-lg-4 col-xl-4 text-left color-letra-blanco">
                            &nbsp;
                            <h5 class="card-title" style="font-size: 3rem;">${consola.name}</h5>
                            &nbsp;
                            <h5 class="card-title" style="font-size: 2rem;">${consola.stock}</h5>
                            &nbsp;
                            <h5 class="card-title" style="font-size: 2rem;">${consola.precio}</h5>
                            &nbsp;
                            <h5>&nbsp</h5>
                            <button class="btn btn-primary" style="font-size: 1.25rem; padding: 10px 20px;"><i class="fa-solid fa-cart-shopping"></i>&nbsp;Añadir al Carrito</button>
                            <h5>&nbsp</h5>
                            <a href="consolas.html" class="btn btn-secondary my-2 my-sm-0" style="font-size: 1.25rem; padding: 10px 20px;" type="submit">Atras</a>
                        </div>
                    </div>
                    <
                </div>
            </div>
        </div>
    `;
};

// Obtener el nombre de la consola de la URL
const params = new URLSearchParams(window.location.search);
const consolaName = params.get('name');

console.log('Nombre de la consola:', consolaName); // Verificar el nombre de la consola

// Función para obtener los detalles de la consola por su nombre
const obtenerDetallesConsola = async (nombre) => {
  try {
    const response = await fetch('https://run.mocky.io/v3/5b911f00-e002-4557-bab2-cc31fa50c177');
    if (!response.ok) {
      throw new Error('La solicitud falló');
    }
    const consolas = await response.json();
    const consola = consolas.find(consola => consola.name === nombre);
    if (!consola) {
      throw new Error('Consola no encontrada');
    }
    console.log('Detalles de la consola:', consola); // Verificar los detalles de la consola
    renderizarDetalleConsola(consola);
  } catch (error) {
    console.error('Error:', error);
  }
};

// Función para renderizar los detalles de la consola
const renderizarDetalleConsola = (consola) => {
  const consolaDetailContainer = document.getElementById("consolaDetailContainer");
  consolaDetailContainer.innerHTML = ""; // Limpiar el contenedor

  const consolaHTML = `
    <div class="container mt-3">
        <div class="row justify-content-center">
            <div class="col-xl-12">
            <!-- Tarjeta -->
                <div class="row mt-3">
                    <div class="col-md-8 col-lg-8 col-xl-8 text-center">
                        <img src="${consola.img}" class="img-fluid" alt="${consola.precio}" style="max-width: 100%; height: 100%;">
                    </div>
                    <div class="col-md-4 col-lg-4 col-xl-4 text-left color-letra-blanco">
                        &nbsp;
                        <h5 class="card-title" style="font-size: 3rem;">${consola.name}</h5>
                        &nbsp;
                        <h5 class="card-title" style="font-size: 2rem;">${consola.stock}</h5>
                        &nbsp;
                        <h5 class="card-title" style="font-size: 2rem;">${consola.precio}</h5>
                        &nbsp;
                        <h5>&nbsp</h5>
                        <button class="btn btn-primary" style="font-size: 1.25rem; padding: 10px 20px;"><i class="fa-solid fa-cart-shopping"></i>&nbsp;Añadir al Carrito</button>
                        <h5>&nbsp</h5>
                        <a href="consolas.html" class="btn btn-secondary my-2 my-sm-0" style="font-size: 1.25rem; padding: 10px 20px;" type="submit">Atras</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

  // Insertar el HTML en el contenedor
  consolaDetailContainer.innerHTML = consolaHTML;
};

// Cargar los detalles de la consola al cargar la página
obtenerDetallesConsola(consolaName);
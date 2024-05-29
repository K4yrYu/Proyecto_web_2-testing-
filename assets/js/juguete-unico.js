
//alerta de añadido al carrito
const contenedor = document.getElementById("jugueteDetailContainer");
contenedor.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-primary")) {
    // Mostrar la alerta con SweetAlert
    Swal.fire({
      title: "¡Producto añadido al carrito!",
      icon: "success"
    }).then((result) => {
      // Redirigir a juego.html después de que el usuario cierre la alerta
      if (result.isConfirmed) {
        window.location.href = "jugetes.html";
      }
    });
  }
});

// Obtener el nombre del juguete de la URL
const params = new URLSearchParams(window.location.search);
const jugueteName = params.get('name');

console.log('Nombre del juguete:', jugueteName); // Verificar el nombre del juguete

// Función para obtener los detalles del juguete por su nombre
const obtenerDetallesJuguete = async (nombre) => {
  try {
    const response = await fetch('https://run.mocky.io/v3/e7444942-34a2-4929-9166-f9dc80625a47');
    if (!response.ok) {
      throw new Error('La solicitud falló');
    }
    const juguetes = await response.json();
    const juguete = juguetes.find(juguete => juguete.name === nombre);
    if (!juguete) {
      throw new Error('Juguete no encontrado');
    }
    console.log('Detalles del juguete:', juguete); // Verificar los detalles del juguete
    renderizarDetalleJuguete(juguete);
  } catch (error) {
    console.error('Error:', error);
  }
};

// Función para renderizar los detalles del juguete
const renderizarDetalleJuguete = (juguete) => {
  const jugueteDetailContainer = document.getElementById("jugueteDetailContainer");
  jugueteDetailContainer.innerHTML = ""; // Limpiar el contenedor

  const jugueteHTML = `
    <div class="container mt-3">
        <div class="row justify-content-center">
            <div class="col-xl-12">
                <!-- Tarjeta -->
                <div class="row mt-3">
                    <div class="col-md-8 col-lg-8 col-xl-8 text-center">
                        <img src="${juguete.img}" class="img-fluid" alt="${juguete.precio}" style="max-width: 100%; height: 100%;">
                    </div>
                    <div class="col-md-4 col-lg-4 col-xl-4 text-left color-letra-blanco">
                        &nbsp;
                        <h5 class="card-title" style="font-size: 3rem;">${juguete.name}</h5>
                        &nbsp;
                        <h5 class="card-title" style="font-size: 2rem;">${juguete.stock}</h5>
                        &nbsp;
                        <h5 class="card-title" style="font-size: 2rem;">${juguete.precio}</h5>
                        &nbsp;
                        <h5>&nbsp</h5>
                        <button class="btn btn-primary" style="font-size: 1.25rem; padding: 10px 20px;"><i class="fa-solid fa-cart-shopping"></i>&nbsp;Añadir al Carrito</button>
                        <h5>&nbsp</h5>
                        <a href="jugetes.html" class="btn btn-secondary my-2 my-sm-0" type="submit">Atras</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `;

  // Insertar el HTML en el contenedor
  jugueteDetailContainer.innerHTML = jugueteHTML;
};

// Cargar los detalles del juguete al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  obtenerDetallesJuguete(jugueteName);
});




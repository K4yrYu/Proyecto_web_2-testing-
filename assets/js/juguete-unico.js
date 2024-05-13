import { juguete } from "./api-juguetes.js";

// Función para generar el HTML de los detalles del juego
const generateJugueteDetailHTML = (juguete) => {
    return `
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
                    <
                </div>
            </div>
        </div>
    `;
};

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

// Función para obtener el nombre del juego de la URL
const getJugueteNameFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('name');
};

// Obtener la información del juego por su nombre
const getJugueteByName = (name) => {
    return juguete.find(juguete => juguete.name === name);
};

// Obtener el nombre del juego de la URL
const jugueteName = getJugueteNameFromUrl();

// Obtener la información del juego por su nombre
const selectedJuguete = getJugueteByName(jugueteName);

// Obtener el contenedor de detalles del juego por su ID
const jugueteDetailContainer = document.getElementById("jugueteDetailContainer");

// Generar HTML con la información detallada del juego y mostrarlo en el contenedor
if (selectedJuguete) {
    jugueteDetailContainer.innerHTML = generateJugueteDetailHTML(selectedJuguete);
} else {
    jugueteDetailContainer.innerHTML = "<p>ERROR, juego no encontrado.</p>";
}
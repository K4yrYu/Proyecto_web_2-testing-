import { consola } from "./api-consolas.js";

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
                            <h5 class="card-title" style="font-size: 2rem;">${consola.precio}</h5>
                            &nbsp;
                            <button class="btn btn-primary" style="font-size: 1.25rem; padding: 10px 20px;"><i class="fa-solid fa-cart-shopping"></i>&nbsp;Añadir al Carrito</button>
                        </div>
                    </div>
                    <
                </div>
            </div>
        </div>
    `;
};





// Función para obtener el nombre del juego de la URL
const getConsolaNameFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('name');
};

// Obtener la información del juego por su nombre
const getConsolaByName = (name) => {
    return consola.find(consola => consola.name === name);
};

// Obtener el nombre del juego de la URL
const consolaName = getConsolaNameFromUrl();

// Obtener la información del juego por su nombre
const selectedConsola = getConsolaByName(consolaName);

// Obtener el contenedor de detalles del juego por su ID
const consolaDetailContainer = document.getElementById("consolaDetailContainer");

// Generar HTML con la información detallada del Digimon y mostrarlo en el contenedor
if (selectedConsola) {
    consolaDetailContainer.innerHTML = generateConsolaDetailHTML(selectedConsola);
} else {
    consolaDetailContainer.innerHTML = "<p>ERROR, consola no encontrado.</p>";
}
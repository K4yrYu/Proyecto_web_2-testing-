import { juego } from "./api-juegos.js";

// Función para generar el HTML de los detalles del juego
const generateJuegoDetailHTML = (juego) => {
    return `
        <div class="container mt-3">
            <div class="row justify-content-center">
                <div class="col-xl-12">
                    <div class="row mt-3">
                        <div class="col-md-8 col-lg-8 col-xl-8 text-center">
                            <img src="${juego.img}" class="img-fluid" alt="${juego.precio}" style="max-width: 100%; height: auto;">
                        </div>
                        <div class="col-md-4 col-lg-4 col-xl-4 text-left color-letra-blanco">
                            &nbsp;
                            <h5 class="card-title" style="font-size: 1.5rem;">${juego.name}</h5>
                            &nbsp;
                            <h5 class="card-title" style="font-size: 1.5rem;">${juego.precio}</h5>
                            &nbsp;
                            <button class="btn btn-primary" style="font-size: 1.25rem; padding: 10px 20px;"><i class="fa-solid fa-cart-shopping"></i>&nbsp;Añadir al Carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};



// Función para obtener el nombre del juego de la URL
const getJuegoNameFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('name');
};

// Obtener la información del juego por su nombre
const getJuegoByName = (name) => {
    return juego.find(juego => juego.name === name);
};

// Obtener el nombre del juego de la URL
const juegoName = getJuegoNameFromUrl();

// Obtener la información del juego por su nombre
const selectedJuego = getJuegoByName(juegoName);

// Obtener el contenedor de detalles del juego por su ID
const juegoDetailContainer = document.getElementById("juegoDetailContainer");

// Generar HTML con la información detallada del Digimon y mostrarlo en el contenedor
if (selectedJuego) {
    juegoDetailContainer.innerHTML = generateJuegoDetailHTML(selectedJuego);
} else {
    juegoDetailContainer.innerHTML = "<p>ERROR, juego no encontrado.</p>";
}
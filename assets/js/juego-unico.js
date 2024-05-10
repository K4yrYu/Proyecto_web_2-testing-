import { juego } from "./api-juegos.js";

// Función para generar el HTML de los detalles del juego
const generateJuegoDetailHTML = (juego) => {
    return `
        <div class="container mt-3">
            <div class="row justify-content-center">
                <div class="col-xl-12">
                    <!-- Tarjeta -->
                    <div class="row mt-3">
                        <div class="col-md-8 col-lg-8 col-xl-8 text-center">
                            <img src="${juego.img}" class="img-fluid" alt="${juego.precio}" style="max-width: 100%; height: 100%;">
                        </div>
                        <div class="col-md-4 col-lg-4 col-xl-4 text-left color-letra-blanco">
                            &nbsp;
                            <h5 class="card-title" style="font-size: 3rem;">${juego.name}</h5>
                            &nbsp;
                            <h5 class="card-title" style="font-size: 2rem;">${juego.consolas}</h5>
                            &nbsp;
                            <h5 class="card-title" style="font-size: 2rem;">${juego.precio}</h5>
                            &nbsp;
                            <h5>&nbsp</h5>
                            <button class="btn btn-primary" style="font-size: 1.25rem; padding: 10px 20px;"><i class="fa-solid fa-cart-shopping"></i>&nbsp;Añadir al Carrito</button>
                        </div>
                    </div>
                    <
                </div>
            </div>
        </div>
    `;
};




const generateJuegoDetalleHTML = (juego) => {
    return `
        <div class="container-fluid mt-5 color-letra-blanco">
            <div class="row justify-content-center">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h1 class="font-size: 2rem;">Resumen del Juego:</h1>
                    <p class="mt-5" style="font-size: 2rem;">${juego.descrip}</p>
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

// Generar HTML con la información detallada del juego y mostrarlo en el contenedor
if (selectedJuego) {
    juegoDetailContainer.innerHTML = generateJuegoDetailHTML(selectedJuego);
    detailesjuegosContainer.innerHTML = generateJuegoDetalleHTML(selectedJuego);
} else {
    juegoDetailContainer.innerHTML = "<p>ERROR, juego no encontrado.</p>";
    detailesjuegosContainer.innerHTML = "<p>ERROR, juego no encontrado.</p>";
}
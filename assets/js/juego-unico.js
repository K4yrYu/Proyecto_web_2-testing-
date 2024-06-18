///// Card juego unico con fetch /////////

//se importa la funcion y la lista desde carrito
import { agregarAlCarrito, listaCarrito } from './script-carro.js';


// Obtener el nombre del juego de la URL
const params = new URLSearchParams(window.location.search);
const juegoName = params.get('name');

console.log('Nombre del juego:', juegoName); // Verificar el nombre del juego


// Función para obtener los detalles del juego por su nombre
const obtenerDetallesJuego = async (nombre) => {
  try {
    const response = await fetch('https://run.mocky.io/v3/25f0df6d-da53-494b-9e56-def4dc281aaa');
    if (!response.ok) {
      throw new Error('La solicitud falló');
    }
    const juegos = await response.json();
    const juego = juegos.find(juego => juego.name === nombre);
    if (!juego) {
      throw new Error('Juego no encontrado');
    }
    console.log('Detalles del juego:', juego); // Verificar los detalles del juego
    //renderiza el juego y su descrip
    renderizarDetalleJuego(juego);
    renderizarDescriptJuego(juego);

    
    return juego; // Devolver el juego en lugar de la listaCarrito


  } catch (error) {
    console.error('Error:', error);
  }
};



// Función para renderizar los detalles del juego
const renderizarDetalleJuego = (juego) => {
  const juegoDetailContainer = document.getElementById("juegoDetailContainer");
  juegoDetailContainer.innerHTML = ""; // Limpiar el contenedor

  const juegoHTML = `
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
                        <h5 class="card-title" style="font-size: 2rem;">${juego.stock}</h5>
                        &nbsp;
                        <h5 class="card-title" style="font-size: 2rem;">${juego.precio}</h5>
                        &nbsp;
                        <h5>&nbsp</h5>
                        <button id="btnCarrito" class="btn btn-primary" style="font-size: 1.25rem; padding: 10px 20px;"><i class="fa-solid fa-cart-shopping"></i>&nbsp;Añadir al Carrito</button>
                        <h5>&nbsp</h5>
                        <a href="juego.html" class="btn btn-secondary my-2 my-sm-0" style="font-size: 1.25rem; padding: 10px 20px;" type="submit">Atras</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
`;

// Insertar el HTML en el contenedor
juegoDetailContainer.innerHTML = juegoHTML;
};

// Función para renderizar los detalles del juego
const renderizarDescriptJuego = (juego) => {
  const detailesjuegosContainer = document.getElementById("detailesjuegosContainer");
  detailesjuegosContainer.innerHTML = ""; // Limpiar el contenedor
  const juegoHTML = `
  
  <div class="container-fluid mt-5 color-letra-blanco">
          <div class="row justify-content-center">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <h1 class="font-size: 2rem;">Resumen del Juego:</h1>
                  <p class="mt-5" style="font-size: 2rem;">${juego.descrip}</p>
              </div>
          </div>
      </div>

`;

// Insertar el HTML en el contenedor
detailesjuegosContainer.innerHTML = juegoHTML;
};

// Cargar los detalles del juego al cargar la página
obtenerDetallesJuego(juegoName);


///////////////////


// Listener de evento para el contenedor
const contenedor = document.getElementById("juegoDetailContainer");
contenedor.addEventListener("click", async (event) => {
  if (event.target.classList.contains("btn-primary")) {
    try {
      const juego = await obtenerDetallesJuego(juegoName);
      if (juego) {
        ///test////
        // Convertir el precio del juego a formato numérico
        const precioNumero = convertirPrecioANumero(juego.precio);
        // Agregar el precio al total de pagos
        totalPago += precioNumero;
        // Guardar el total de pagos en localStorage
        localStorage.setItem('totalPago', totalPago.toString());
        ///////////
        // Agregar el juego actual a la lista del carrito
        agregarAlCarrito(juego); // Llamar a la función para agregar al carrito
        console.log(listaCarrito);
        console.log(totalPago);
        // Mostrar la alerta con SweetAlert
        Swal.fire({
          title: "¡Producto añadido al carrito!",
          icon: "success"
        }).then((result) => {
          // Redirigir a juego.html después de que el usuario cierre la alerta
          if (result.isConfirmed) {
            window.location.href = "juego.html";
          }
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
});



////////TEST//////////



// Variable global para el total de pagos
let totalPago = localStorage.getItem('totalPago') ? parseFloat(localStorage.getItem('totalPago')) : 0;


// Función para convertir un precio a formato numérico
const convertirPrecioANumero = (precio) => {
  // Eliminar el símbolo '$' y las comas
  const precioSinSimbolo = precio.replace('$', '').replace(',', '');
  // Convertir el precio a formato numérico
  const precioNumerico = parseFloat(precioSinSimbolo);

  // Multiplicar por mil para obtener el valor esperado
  const valorMultiplicado = precioNumerico * 1000;
  //retorna el valor final ya convertido
  return valorMultiplicado;
};


///////////////////////////////
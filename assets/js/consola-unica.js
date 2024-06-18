///// Card consola unica con fetch /////////


//importa funciones y lista desde carrito
import { agregarAlCarrito, listaCarrito } from './script-carro.js';


// Obtener el nombre de la consola de la URL
const params = new URLSearchParams(window.location.search);
const consolaName = params.get('name');

console.log('Nombre de la consola:', consolaName); // Verificar el nombre de la consola



// Función para obtener los detalles de la consola por su nombre
const obtenerDetallesConsola = async (nombre) => {
  try {
    const response = await fetch('https://run.mocky.io/v3/45eea02e-8f7c-4db1-987f-3ae9d024a67f');
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


    return consola; //retorna la consola seleccionada 

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

// Listener de evento para el contenedor
const contenedorC = document.getElementById("consolaDetailContainer");
contenedorC.addEventListener("click", async (event) => {
  if (event.target.classList.contains("btn-primary")) {
    try {
      const consola = await obtenerDetallesConsola(consolaName);
      if (consola) {
        ///test////
        // Convertir el precio del juego a formato numérico
        const precioNumero = convertirPrecioANumero(consola.precio);
        // Agregar el precio al total de pagos
        totalPago += precioNumero;
        // Guardar el total de pagos en localStorage
        localStorage.setItem('totalPago', totalPago.toString());
        ///////////
        // Agregar el juego actual a la lista del carrito
        agregarAlCarrito(consola); // Llamar a la función para agregar al carrito
        console.log(listaCarrito);
        console.log(totalPago);
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

  return valorMultiplicado;
};


///////////////////////////////
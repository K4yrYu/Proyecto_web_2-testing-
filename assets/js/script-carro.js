// Inicializar el arreglo y cargarlo desde el localStorage al cargar la página
export let listaCarrito = [];

// Obtener el valor de totalPago del almacenamiento local
const totalPago = localStorage.getItem('totalPago');

//convertir precio a numero
const convertirPrecioANumero = (precio) => {
    return parseFloat(precio.replace('$', '').replace(/\./g, '').replace(',', '.'));
};

//se obtiene la lista desde el localStorage
document.addEventListener('DOMContentLoaded', function() {
    const listaGuardada = localStorage.getItem('listaCarrito');
    if (listaGuardada) {
        listaCarrito = JSON.parse(listaGuardada);
        console.log(listaCarrito);
        
    }
    obtenerYRenderizarCompras(); // Llama a la función para renderizar las compras al cargar la página
});

// Función para guardar/actualizar la lista en localStorage
function guardarListaEnLocalStorage() {
    localStorage.setItem('listaCarrito', JSON.stringify(listaCarrito));
}



// Función para obtener y renderizar las compras
const obtenerYRenderizarCompras = () => {
    try {
        // Obtener la lista de compras directamente del arreglo listaCarrito
        const compras = listaCarrito;
        renderCompras(compras); // Llama a la función renderCompras para mostrar las tarjetas

        // Mostrar u ocultar la card-carro-vacio según el contenido del carrito
        const cardCarroVacio = document.getElementById("card-carro-vacio");
        if (compras.length === 0) {
            cardCarroVacio.style.display = "block"; // Mostrar la card-carro-vacio si el carrito está vacío
            PagoFinalTotal.style.display = "none";
            btnConfirmarCompra.style.display = "none";
            // Limpiar la variable totalPago y dejarla en 0
            localStorage.setItem('totalPago', 0);
        } else {
            cardCarroVacio.style.display = "none"; // Ocultar la card-carro-vacio si el carrito tiene elementos
            PagoFinalTotal.style.display = "block";
            btnConfirmarCompra.style.display = "block";
        }
    } catch (error) {
        console.error('Error:', error);
    }
};



// Función mejorada para generar el HTML de una tarjeta del carro
const generateComprasCard = ({ img, name, precio, stock }) => {
    return `
    <div class="card mb-3 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12" style="width: 100%; font-size: 3rem;">
        <div class="row g-0">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <img src="${img}" class="img-fluid rounded-start" alt="${name}">
            </div>
            <div class="col-md-8">
                <div class="card-body d-flex flex-column">
                    <h7 class="card-title">${name}</h7>
                    <p class="card-text">Precio: ${precio}</p>
                    <p class="card-text">${stock}</p>
                    <div class="d-flex justify-content-end mt-auto">
                        <button class="btn btn-danger eliminar-btn" style="font-size: 5rem;"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
};



// Función para renderizar las tarjetas de compras y almacenarlas en localStorage
const renderCompras = (compras) => {
    const contenedor = document.getElementById("carritoDeCompras");
    contenedor.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevas tarjetas

    compras.forEach((compra, index) => {
        const cardHTML = generateComprasCard(compra);
        const cardElement = document.createElement('div');
        cardElement.innerHTML = cardHTML.trim(); // Crear un nuevo div para cada tarjeta
        contenedor.appendChild(cardElement.firstChild);
    });

    // Agregar eventos al botón eliminar de cada tarjeta
    contenedor.querySelectorAll('.eliminar-btn').forEach((button, index) => {
        button.addEventListener('click', () => {
            eliminarDelCarrito(index); // Llama a la función para eliminar el elemento del carrito
            obtenerYRenderizarCompras(); // Vuelve a renderizar las compras actualizadas
        });
    });
    // Mostrar el total de pago actualizado
    const totalPago = parseFloat(localStorage.getItem('totalPago')) || 0;
    const totalPagoFormateado = totalPago.toLocaleString('es-CL', { minimumFractionDigits: 0 }).replace(/\./g, ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    document.getElementById("PagoFinalTotal").textContent = `El precio final es: $${totalPagoFormateado}`;
};




 //boton pagar las compras
 document.addEventListener('DOMContentLoaded', () => {
    obtenerYRenderizarCompras();
    
    // Seleccionar el botón de compra
    const botonCompra = document.getElementById('btnConfirmarCompra');
    
    // Verificar si el botón se seleccionó correctamente
    if (botonCompra) {
        // Agregar evento de clic al botón de compra
        botonCompra.addEventListener('click', () => {
            Swal.fire({
        title: '¡MUCHAS GRACIAS POR SU COMPRA!',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    }).then(() => {
        // Limpiar la lista de compras
        listaCarrito = [];
        guardarListaEnLocalStorage();
        window.location.reload();
        // Redirigir al index principal
        //window.location.href = 'index.html';
        //recarga la pagina para visualizar el carro vacío
    });
        });
    } else {
        console.error('No se encontró el botón de compra');
    }
});



//agregar un elemento al carrito
export function agregarAlCarrito(item) {
    listaCarrito.push(item);
    guardarListaEnLocalStorage(); // Guardar la lista actualizada en localStorage
}

//eliminar un elemento del carrito
function eliminarDelCarrito(index) {

    const itemEliminado = listaCarrito[index];
    const precioItemEliminado = convertirPrecioANumero(itemEliminado.precio);

    // Restar el precio del elemento eliminado del totalPago
    let totalPago = parseFloat(localStorage.getItem('totalPago')) || 0;
    totalPago -= precioItemEliminado;

    // Guardar el nuevo totalPago en localStorage
    localStorage.setItem('totalPago', totalPago);


    //borra del carro x objeto
    listaCarrito = listaCarrito.filter((_, i) => i !== index); // Filtrar todos los elementos excepto el que queremos eliminar
    guardarListaEnLocalStorage(); // Guardar la lista actualizada en localStorage

    //recarg pagina
    window.location.reload();
    
}

//----------------------------------------------------------//


// Mostrar todos los juegos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    obtenerYRenderizarCompras();

    
    // Obtener el valor de totalPago del almacenamiento local
    const totalPago = localStorage.getItem('totalPago') || 0;
    const totalPagoNumerico = parseFloat(totalPago);

    // Función para formatear el número como moneda en CLP
    const formatearMonedaCLP = (numero) => {
        return '$' + numero.toLocaleString('es-CL', { minimumFractionDigits: 0 }).replace(/\./g, ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };

    // Formatear el totalPago como CLP
    const totalPagoFormateado = formatearMonedaCLP(totalPagoNumerico);

    // Mostrar el totalPago formateado en el contenedor correspondiente
    const contenedorPagoFinalTotal = document.getElementById('PagoFinalTotal');
    contenedorPagoFinalTotal.innerHTML = `El precio final es: ${totalPagoFormateado}`;
    
    // Script de la cinta
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        const boton = document.getElementById('boton');
        if (boton) { // Asegúrate de que el elemento existe antes de intentar acceder a su estilo
            boton.style.top = 50 + scrollPos + 'px';
        }
    });
});

//-------------------------------------------------------//

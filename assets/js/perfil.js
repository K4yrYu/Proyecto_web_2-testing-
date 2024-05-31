document.addEventListener('DOMContentLoaded', function() {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
        const userEmailDisplay = document.getElementById('user-email-display');
        if (userEmailDisplay) {
            userEmailDisplay.textContent = `Correo electrónico: ${storedEmail}`;
            console.log('Correo electrónico almacenado:', storedEmail); // Imprimir en consola
        } else {
            console.error("No se encontró el elemento 'user-email-display'");
        }
    } else {
        console.log('No se ha encontrado el correo electrónico almacenado.');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const userEmailDisplay = document.getElementById('user-email-display');
    const closeButton = document.getElementById('close-session-btn');
    const storedEmail = localStorage.getItem('userEmail');

    // Verificar si hay un correo electrónico almacenado
    if (storedEmail) {
        // Si hay un correo electrónico almacenado, mostrarlo en la página
        userEmailDisplay.textContent = `Email: ${storedEmail}`;

        // Mostrar el botón de cerrar sesión y agregarle funcionalidad
        closeButton.style.display = 'block';
        closeButton.addEventListener('click', function() {
            // Eliminar el correo electrónico almacenado
            localStorage.removeItem('userEmail');
            // Redirigir a la página de inicio
            window.location.href = 'index.html';
        });
    } else {
        // Si no hay un correo electrónico almacenado, mostrar el botón de inicio de sesión
        const loginButton = document.createElement('a');
        loginButton.textContent = 'Iniciar Sesión';
        loginButton.href = 'index.html'; // Cambia 'login.html' por la ruta correcta de tu página de inicio de sesión
        loginButton.classList.add('btn', 'btn-secondary', 'my-2', 'my-sm-0' );
        document.querySelector('.navbar-nav').appendChild(loginButton);
    }
});

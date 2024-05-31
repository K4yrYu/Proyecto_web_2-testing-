const passWordInput = document.querySelector('#input-password');
const showPassword = document.querySelector('#show-password');
const hidePassword = document.querySelector('#hide-password');
const btnStatePassword = document.querySelector('.btn-hide-show');
const btnSignIn = document.querySelector('.btn-sign-in');
const emailInput = document.querySelector('#input-email');
const errorMessage = document.querySelector('#error-message');

// Dummy credentials for validation
const validEmail = 'usuario@ejemplo.com';
const validPassword = 'contraseña123';

// Mostrar u ocultar contraseña
btnStatePassword.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default button behavior

    if (passWordInput.type === 'password') {
        passWordInput.type = 'text';
        showPassword.style.display = 'block';
        hidePassword.style.display = 'none';
    } else {
        passWordInput.type = 'password';
        showPassword.style.display = 'none';
        hidePassword.style.display = 'block';
    }
});

// Manejar el inicio de sesión
btnSignIn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the form from submitting

    const email = emailInput.value.trim();
    const password = passWordInput.value.trim();

    if (email === validEmail && password === validPassword) {
        // Guardar el correo electrónico en localStorage
        localStorage.setItem('userEmail', email);

        // Redirigir o realizar acciones de inicio de sesión exitoso
        alert('Inicio de sesión exitoso');
        window.location.href = "Pag-inicio.html";
    } else {
        // Mostrar mensaje de error
        errorMessage.style.display = 'block';
    }
});

// Ocultar mensaje de error cuando los campos de entrada cambian
const clearErrorMessage = () => {
    if (emailInput.value.trim() !== '' && passWordInput.value.trim() !== '') {
        errorMessage.style.display = 'none';
    }
};

// Recuperar el correo electrónico almacenado y mostrarlo en el campo de entrada
document.addEventListener('DOMContentLoaded', () => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
        emailInput.value = storedEmail;
        console.log('Correo electrónico almacenado:', storedEmail); // Imprimir en consola
    }
});

emailInput.addEventListener('input', clearErrorMessage);
passWordInput.addEventListener('input', clearErrorMessage);

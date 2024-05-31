// Obtención de elementos del DOM
const passWordInput = document.querySelector('#input-password');
const showPasswordBtn = document.querySelector('#show-password');
const hidePasswordBtn = document.querySelector('#hide-password');

const passWordconfirmInput = document.querySelector('#input-confirm-password');
const showConfirmPasswordBtn = document.querySelector('#show-confirm-password');
const hideConfirmPasswordBtn = document.querySelector('#hide-confirm-password');

const btnSignIn = document.querySelector('.btn-sign-in');
const errorMessage = document.querySelector('#error-message');

// Mostrar contraseña
showPasswordBtn.addEventListener('click', () => {
    passWordInput.type = 'text';
    showPasswordBtn.style.display = 'none';
    hidePasswordBtn.style.display = 'block';
});

// Ocultar contraseña
hidePasswordBtn.addEventListener('click', () => {
    passWordInput.type = 'password';
    showPasswordBtn.style.display = 'block';
    hidePasswordBtn.style.display = 'none';
});

// Mostrar confirmación de contraseña
showConfirmPasswordBtn.addEventListener('click', () => {
    passWordconfirmInput.type = 'text';
    showConfirmPasswordBtn.style.display = 'none';
    hideConfirmPasswordBtn.style.display = 'block';
});

// Ocultar confirmación de contraseña
hideConfirmPasswordBtn.addEventListener('click', () => {
    passWordconfirmInput.type = 'password';
    showConfirmPasswordBtn.style.display = 'block';
    hideConfirmPasswordBtn.style.display = 'none';
});

// Validación al hacer clic en el botón de registro
btnSignIn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevenir el envío del formulario

    const password = passWordInput.value.trim();
    const confirmPassword = passWordconfirmInput.value.trim();

    if (password && password === confirmPassword) {
        // Redirigir o realizar acciones de registro exitoso
        alert('Registro exitoso');
        window.location.href = "index.html";
    } else {
        // Mostrar mensaje de error por contraseñas no coincidentes
        errorMessage.style.display = 'block';
    }
});

// Ocultar mensaje de error cuando los campos de entrada cambian
const clearErrorMessage = () => {
    if (passWordInput.value.trim() !== '' && passWordconfirmInput.value.trim() !== '') {
        errorMessage.style.display = 'none';
    }
};

// Agregar eventos de entrada para borrar el mensaje de error
passWordInput.addEventListener('input', clearErrorMessage);
passWordconfirmInput.addEventListener('input', clearErrorMessage);

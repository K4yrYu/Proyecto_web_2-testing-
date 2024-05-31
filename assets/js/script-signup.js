// Obtención de elementos del DOM
const passWordInput = document.querySelector('#input-password');
const togglePasswordBtn = document.querySelector('#toggle-password');

const passWordconfirmInput = document.querySelector('#input-confirm-password');
const toggleConfirmPasswordBtn = document.querySelector('#toggle-confirm-password');

const btnSignIn = document.querySelector('.btn-sign-in');
const errorMessage = document.querySelector('#error-message');

// Función para alternar la visibilidad de la contraseña
const togglePasswordVisibility = (inputField, toggleBtn) => {
    if (inputField.type === 'password') {
        inputField.type = 'text';
        toggleBtn.classList.remove('fa-eye');
        toggleBtn.classList.add('fa-eye-slash');
    } else {
        inputField.type = 'password';
        toggleBtn.classList.remove('fa-eye-slash');
        toggleBtn.classList.add('fa-eye');
    }
};

// Eventos de clic para mostrar/ocultar contraseña
togglePasswordBtn.addEventListener('click', () => {
    togglePasswordVisibility(passWordInput, togglePasswordBtn);
});

toggleConfirmPasswordBtn.addEventListener('click', () => {
    togglePasswordVisibility(passWordconfirmInput, toggleConfirmPasswordBtn);
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

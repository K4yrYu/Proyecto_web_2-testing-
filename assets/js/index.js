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

btnSignIn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the form from submitting

    const email = emailInput.value.trim();
    const password = passWordInput.value.trim();

    if (email === validEmail && password === validPassword) {
        // Redirect or perform successful login actions
        alert('Inicio de sesión exitoso');
        window.location.href = "Pag-inicio.html";
    } else {
        // Display error message
        errorMessage.style.display = 'block';
    }
});

const clearErrorMessage = () => {
    if (emailInput.value.trim() === '' || passWordInput.value.trim() === '') {
        errorMessage.style.display = 'none';
    }
};

emailInput.addEventListener('input', clearErrorMessage);
passWordInput.addEventListener('input', clearErrorMessage);


const passWordInput = document.querySelector('#input-password');
const showPasswordBtn = document.querySelector('#show-password');
const hidePasswordBtn = document.querySelector('#hide-password');

const passWordconfirmInput = document.querySelector('#input-confirm-password');
const showConfirmPasswordBtn = document.querySelector('#show-confirm-password');
const hideConfirmPasswordBtn = document.querySelector('#hide-confirm-password');

const btnSignIn = document.querySelector('.btn-sign-in');
const errorMessage = document.querySelector('#error-message');

// Dummy password for validation
const validPassword = 'contraseña123';

showPasswordBtn.addEventListener('click', () => {
    passWordInput.type = 'text';
    showPasswordBtn.style.display = 'none';
    hidePasswordBtn.style.display = 'block';
});

hidePasswordBtn.addEventListener('click', () => {
    passWordInput.type = 'password';
    showPasswordBtn.style.display = 'block';
    hidePasswordBtn.style.display = 'none';
});

showConfirmPasswordBtn.addEventListener('click', () => {
    passWordconfirmInput.type = 'text';
    showConfirmPasswordBtn.style.display = 'none';
    hideConfirmPasswordBtn.style.display = 'block';
});

hideConfirmPasswordBtn.addEventListener('click', () => {
    passWordconfirmInput.type = 'password';
    showConfirmPasswordBtn.style.display = 'block';
    hideConfirmPasswordBtn.style.display = 'none';
});

btnSignIn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the form from submitting

    const password = passWordInput.value.trim();
    const confirmPassword = passWordconfirmInput.value.trim();

    if (password === validPassword && password === confirmPassword) {
        // Redirect or perform successful registration actions
        alert('Registro exitoso');
        
        window.location.href = "index.html";
    } else {
        // Display error message for password mismatch
        errorMessage.style.display = 'block';
    }
});

const clearErrorMessage = () => {
    if (passWordInput.value.trim() === '' || passWordconfirmInput.value.trim() === '') {
        errorMessage.style.display = 'none';
    }
};

passWordInput.addEventListener('input', clearErrorMessage);
passWordconfirmInput.addEventListener('input', clearErrorMessage);

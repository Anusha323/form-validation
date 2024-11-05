const form = document.getElementById('form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const errorMessagesDiv = document.getElementById('errorMessages');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let errorMessages = [];

    if (usernameInput.value.trim() === '') {
        errorMessages.push('Username cannot be blank');
    }

    if (emailInput.value.trim() === '') {
        errorMessages.push('Email cannot be blank');
    } else if (!validateEmail(emailInput.value)) {
        errorMessages.push('Invalid email address');
    }

    if (passwordInput.value.trim() === '') {
        errorMessages.push('Password cannot be blank');
    }

    if (confirmPasswordInput.value.trim() === '') {
        errorMessages.push('Confirm Password cannot be blank');
    } else if (passwordInput.value !== confirmPasswordInput.value) {
        errorMessages.push('Passwords do not match');
    }

    if (errorMessages.length > 0) {
        errorMessagesDiv.innerHTML = errorMessages.join('<br>');
    } else {
        errorMessagesDiv.innerHTML = '';
        // Form is valid, can submit now
    }
});

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
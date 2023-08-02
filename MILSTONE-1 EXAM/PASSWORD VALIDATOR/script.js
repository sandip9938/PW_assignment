document.getElementById('passwordForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const passwordInput = document.getElementById('password').value;
    const messageElement = document.getElementById('message');
    const isValid = validatePassword(passwordInput);
    messageElement.textContent = isValid ? 'Password is valid!' : 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.';
});

function validatePassword(password) {
    // Password must be at least 8 characters long
    if (password.length < 8) {
        return false;
    }

    // Password must contain at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return false;
    }

    // Password must contain at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return false;
    }

    // Password must contain at least one number
    if (!/\d/.test(password)) {
        return false;
    }

    return true;
}

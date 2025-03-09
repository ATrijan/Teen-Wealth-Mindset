function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (username && password) {
        localStorage.setItem(username, password);
        alert('Registration successful!');
        document.getElementById('registerForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
}
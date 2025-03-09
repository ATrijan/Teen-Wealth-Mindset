function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword) {
        if (storedPassword === password) {
            window.location.href = "home.html"; // Redirect to homr
        } else {
            alert('Incorrect password.');
        }
    } else {
        alert('User not found.');
    }
}
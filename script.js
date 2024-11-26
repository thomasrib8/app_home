function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Définez ici le nom d'utilisateur et le mot de passe
    const validUsername = "admin";
    const validPassword = "Roue2021*";

    if (username === validUsername && password === validPassword) {
        // Affiche le contenu principal
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        // Affiche un message d'erreur
        document.getElementById('error-message').style.display = 'block';
    }
}

function launchApp(url) {
    window.open(url, '_blank');
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Définitions des identifiants valides
    const validUsername = "admin";
    const validPassword = "3monkeys";

    if (username === validUsername && password === validPassword) {
        // Afficher le contenu principal et cacher l'écran de connexion
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        // Afficher un message d'erreur
        document.getElementById('error-message').style.display = 'block';
    }
}

function launchApp(url) {
    // Ouvre l'URL dans une nouvelle fenêtre ou un nouvel onglet
    window.open(url, '_blank');
}

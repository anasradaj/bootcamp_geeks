const loginForm = document.getElementById('loginForm');
const loginSubmit = document.getElementById('loginSubmit');
const loginMessage = document.getElementById('loginMessage');

function checkLoginInputs() {
    const inputs = loginForm.querySelectorAll('input[required]');
    let allFilled = true;
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            allFilled = false;
        }
    });
    loginSubmit.disabled = !allFilled;
}

loginForm.querySelectorAll('input[required]').forEach(input => {
    input.addEventListener('input', checkLoginInputs);
});

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(loginForm);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        loginMessage.textContent = result.message;
        if (response.ok) {
            loginMessage.className = 'message success';
        } else {
            loginMessage.className = 'message error';
        }
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        loginMessage.textContent = 'Erreur: Impossible de se connecter au serveur.';
        loginMessage.className = 'message error';
    }
});

checkLoginInputs();
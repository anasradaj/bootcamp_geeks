const registerForm = document.getElementById('registerForm');
const registerSubmit = document.getElementById('registerSubmit');
const registerMessage = document.getElementById('registerMessage');

function checkRegisterInputs() {
    const inputs = registerForm.querySelectorAll('input[required], email[required]'); // Inclure le champ email
    let allFilled = true;
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            allFilled = false;
        }
    });
    registerSubmit.disabled = !allFilled;
}

registerForm.querySelectorAll('input[required], email[required]').forEach(input => { // Inclure le champ email
    input.addEventListener('input', checkRegisterInputs);
});

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(registerForm);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        registerMessage.textContent = result.message;
        if (response.ok) {
            registerMessage.className = 'message success';
            registerForm.reset();
            checkRegisterInputs();
        } else {
            registerMessage.className = 'message error';
        }
    } catch (error) {
        console.error('Erreur lors de l\'inscription:', error);
        registerMessage.textContent = 'Erreur: Impossible de se connecter au serveur.';
        registerMessage.className = 'message error';
    }
});

checkRegisterInputs();
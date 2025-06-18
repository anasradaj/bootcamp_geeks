// Register form logic
const form = document.getElementById('register-form');
const btn = document.getElementById('register-btn');
const msg = document.getElementById('register-message');
const inputs = Array.from(form.querySelectorAll('input'));

function checkInputs() {
  btn.disabled = !inputs.every(input => input.value.trim());
}
inputs.forEach(input => input.addEventListener('input', checkInputs));

form.onsubmit = async e => {
  e.preventDefault();
  btn.disabled = true;
  msg.textContent = '';
  const body = {
    name: form.name.value.trim(),
    lastname: form.lastname.value.trim(),
    email: form.email.value.trim(),
    username: form.username.value.trim(),
    password: form.password.value
  };
  const res = await fetch('/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  const data = await res.json();
  if (res.ok) {
    msg.style.color = '#77dd77';
    msg.textContent = data.message || 'Registration successful!';
    form.reset();
    checkInputs();
  } else {
    msg.style.color = '#fc575e';
    msg.textContent = data.error || 'Registration failed.';
  }
  btn.disabled = false;
};
checkInputs();

// Login form logic
const form = document.getElementById('login-form');
const btn = document.getElementById('login-btn');
const msg = document.getElementById('login-message');
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
    username: form.username.value.trim(),
    password: form.password.value
  };
  const res = await fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  const data = await res.json();
  if (res.ok) {
    msg.style.color = '#77dd77';
    msg.textContent = data.message || 'Login successful!';
    form.reset();
    checkInputs();
  } else {
    msg.style.color = '#fc575e';
    msg.textContent = data.error || 'Login failed.';
  }
  btn.disabled = false;
};
checkInputs();

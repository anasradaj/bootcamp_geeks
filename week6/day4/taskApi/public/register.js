// Register form logic
const form = document.querySelector('form');
if (form) {
  const btn = form.querySelector('button[type="submit"]');
  let msg = document.getElementById('register-message');
  if (!msg) {
    msg = document.createElement('div');
    msg.id = 'register-message';
    form.appendChild(msg);
  }
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
      firstName: form.firstName.value.trim(),
      lastName: form.lastName.value.trim(),
      email: form.email.value.trim(),
      userName: form.username.value.trim(),
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
}

// User Management Frontend JS
const tabRegister = document.getElementById('tab-register');
const tabLogin = document.getElementById('tab-login');
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const registerMsg = document.getElementById('register-message');
const loginMsg = document.getElementById('login-message');
const userList = document.getElementById('user-list');
const refreshBtn = document.getElementById('refresh-users');

// Tab switching
function showTab(tab) {
  if (tab === 'register') {
    tabRegister.classList.add('active');
    tabLogin.classList.remove('active');
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
  } else {
    tabRegister.classList.remove('active');
    tabLogin.classList.add('active');
    registerForm.classList.remove('active');
    loginForm.classList.add('active');
  }
  registerMsg.textContent = '';
  loginMsg.textContent = '';
}
tabRegister.onclick = () => showTab('register');
tabLogin.onclick = () => showTab('login');

registerForm.onsubmit = async e => {
  e.preventDefault();
  registerMsg.textContent = '';
  const username = document.getElementById('reg-username').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const first_name = document.getElementById('reg-firstname').value.trim();
  const last_name = document.getElementById('reg-lastname').value.trim();
  const password = document.getElementById('reg-password').value;
  if (!username || !email || !first_name || !last_name || !password) {
    registerMsg.textContent = 'All fields are required.';
    return;
  }
  const res = await fetch('/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, first_name, last_name, password })
  });
  const data = await res.json();
  if (res.ok) {
    registerMsg.style.color = '#77dd77';
    registerMsg.textContent = 'Registration successful!';
    registerForm.reset();
    fetchUsers();
  } else {
    registerMsg.style.color = '#fc575e';
    registerMsg.textContent = data.error || 'Registration failed.';
  }
};

loginForm.onsubmit = async e => {
  e.preventDefault();
  loginMsg.textContent = '';
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value;
  if (!username || !password) {
    loginMsg.textContent = 'Username and password required.';
    return;
  }
  const res = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  const data = await res.json();
  if (res.ok) {
    loginMsg.style.color = '#77dd77';
    loginMsg.textContent = 'Login successful!';
  } else {
    loginMsg.style.color = '#fc575e';
    loginMsg.textContent = data.error || 'Login failed.';
  }
};

refreshBtn.onclick = fetchUsers;

async function fetchUsers() {
  userList.innerHTML = '<li>Loading...</li>';
  const res = await fetch('/api/users');
  const users = await res.json();
  userList.innerHTML = '';
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `${user.username} (${user.email}) - ${user.first_name} ${user.last_name}`;
    userList.appendChild(li);
  });
}

fetchUsers();

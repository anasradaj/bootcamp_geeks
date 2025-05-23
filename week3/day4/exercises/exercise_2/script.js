// 1. Retrieve the form and log it
const form = document.querySelector('form');
console.log(form);

// 2. Retrieve inputs by id and log them
const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
console.log(fnameInput, lnameInput);

// 3. Retrieve inputs by name and log them
const firstnameByName = document.getElementsByName('firstname')[0];
const lastnameByName = document.getElementsByName('lastname')[0];
console.log(firstnameByName, lastnameByName);

// 4. Handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const fnameValue = fnameInput.value.trim();
    const lnameValue = lnameInput.value.trim();
    if (!fnameValue || !lnameValue) {
        alert('Please fill in both fields.');
        return;
    }
    const ul = document.querySelector('.usersAnswer');
    ul.innerHTML = '';
    const li1 = document.createElement('li');
    li1.textContent = fnameValue;
    const li2 = document.createElement('li');
    li2.textContent = lnameValue;
    ul.appendChild(li1);
    ul.appendChild(li2);
});
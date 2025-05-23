// Part I: setTimeout alert after 2 seconds
setTimeout(function() {
    alert('Hello World');
}, 2000);

// Part II: setTimeout add paragraph after 2 seconds
setTimeout(function() {
    const container = document.getElementById('container');
    const p = document.createElement('p');
    p.textContent = 'Hello World';
    container.appendChild(p);
}, 2000);

// Part III: setInterval add paragraph every 2 seconds, clear on button or 5 paragraphs
let intervalId = setInterval(function() {
    const container = document.getElementById('container');
    const p = document.createElement('p');
    p.textContent = 'Hello World';
    container.appendChild(p);
    if (container.querySelectorAll('p').length >= 5) {
        clearInterval(intervalId);
    }
}, 2000);

document.getElementById('clear').addEventListener('click', function() {
    clearInterval(intervalId);
});
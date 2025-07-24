"use strict";
// HTML setup for testing (not needed in Node.js, only in browser)
// <input type="text" id="myInput" />
const inputElement = document.getElementById('myInput');
if (inputElement) {
    inputElement.value = 'Hello, TypeScript!';
    console.log(inputElement.value);
}
else {
    console.log('Element not found');
}

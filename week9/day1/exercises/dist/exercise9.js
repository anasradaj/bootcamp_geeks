"use strict";
function greet(name) {
    if (name) {
        return `Hello, ${name}!`;
    }
    else {
        return "Hello!";
    }
}
console.log(greet());
console.log(greet("Alice"));

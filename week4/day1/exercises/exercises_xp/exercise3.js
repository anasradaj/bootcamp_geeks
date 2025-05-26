// Exercise 3: Implement a function that checks if a value is a string
const isString = (value) => typeof value === "string";

console.log(isString("hello")); // true
console.log(isString([123])); // false
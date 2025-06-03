// Exercise 1 : print Full Name

function printFullName({ first, last }) {
  return `Your full name is ${first} ${last}`;
}

// Example usage:
const person = { first: 'Elie', last: 'Schoppik' };
const fullNameString = printFullName(person);
console.log(fullNameString);

const anotherPerson = { first: 'Jane', last: 'Doe' };
console.log(printFullName(anotherPerson));

// ----------------------------------------------------------
// Exercise 2 : keys and values

function keysAndValues(obj) {
  const keys = Object.keys(obj);
  keys.sort(); 
  const values = keys.map(key => obj[key]);
  return [keys, values];
}

// Examples:
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));
console.log(keysAndValues({ c: 3, a: 1, b: 2 }));

// ----------------------------------------------------------
// Exercise 3 : Counter class
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter(); // counterOne.count = 0
counterOne.increment(); // counterOne.count = 1
counterOne.increment(); // counterOne.count = 2

const counterTwo = counterOne; // counterTwo and counterOne point to the same object
counterTwo.increment(); // counterOne.count (and counterTwo.count) is now 3

console.log(counterOne.count); // Output: 3
// ----------------------------------------------------------

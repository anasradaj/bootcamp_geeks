// Exercise 1

let numbers = [123, 8409, 100053, 333333333, 7];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  if (number % 3 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// Exercise 2
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
};

const userInput = prompt("Please enter your name:");
const studentName = userInput.toLowerCase();

if (studentName in guestList) {
  const country = guestList[studentName];
  console.log(`Hi! I'm ${studentName}, and I'm from ${country}.`);
} else {
  console.log("Hi! I'm a guest.");
}

// Exercise 3
let age = [20, 5, 12, 43, 98, 55];

let sumAges = 0;
for (let i = 0; i < age.length; i++) {
  sumAges += age[i];
}
console.log("The sum of all ages is:", sumAges);

let highestAge = age[0];
for (let i = 1; i < age.length; i++) {
  if (age[i] > highestAge) {
    highestAge = age[i];
  }
}
console.log("The highest age is:", highestAge);
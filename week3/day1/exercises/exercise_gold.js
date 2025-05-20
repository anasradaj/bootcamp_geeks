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

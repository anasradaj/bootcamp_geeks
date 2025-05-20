// // exercise 1 : 
// // Part 1

// const people = ["Greg", "Mary", "Devon", "James"];

// people.shift()

// people.splice(2,1, "Jason")

// people.push("Anas")

// indexMary = people.indexOf("Mary")
// console.log(indexMary)

// poepleCopy = people.slice(1,3)
// console.log(poepleCopy)

// // indexOfFoo = indexOf("Foo")
// // console.log(indexOfFoo) // //return -1 because the value is not found

// last = people[people.length-1]

// console.log(last)

// //Part 2

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }


// for (let i=0; i<people.length; i++) {
//     console.log(people[i]);  
//     if (people[i] === "Devon") 
//         break;
//  }


// //  Exercise 2 : Your favorite colors

// const colors = ["black", "green", "blue", "white", "red"]

// for (let i = 0 ; i < colors.length; i++) {
//     console.log(`My #${i + 1} choice is ${colors[i]}`);
// }

// const suffixes = ["st", "nd", "rd", "th", "th"];

// for (let i = 0; i < colors.length; i++) {
//   const orderNumber = i + 1;
//   const suffix = suffixes[i];
//   console.log(`My ${orderNumber}${suffix} choice is ${colors[i]}`);
// }

// // exercise 3 :  Repeat the question
// let question;

// do {
//     question = prompt("Please enter a number : ");
//     question = Number(question); 
// } while (isNaN(question) || question < 10);

// console.log("Thank you! The number is:", question);


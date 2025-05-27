// // Exercise 1 : Colors
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// // Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…

// colors.forEach((element, index) => {
//     console.log(`${index + 1}# choice is ${element}.`)
// });

// // Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")

// colors.forEach((element) => {
//     if (element === "Violet") {
//         console.log("Yeah");
//     } else {
//         console.log("No...");
//     }
// });

// -------------------------------------------------------------------------------------------------

// Exercise 2 : Colors #2
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…

colors.forEach((color, index) => {
    console.log(`${index + 1}${ordinal[index + 1] || ordinal[0]} choice is ${color}.`);
});

// --------------------------------------------------------------------------------------------------
// Exercise 3 : Analyzing

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// Output should be : ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange'](spread operator will insert the elements of the arrays into the new array at that position)

// ------2------
const country = "USA";
console.log([...country]);
// Output should be : ['U', 'S', 'A'] (spread operator will convert the string into an array of characters)

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
// Output should be : [undefined, undefined] (spread operator will create an array with two empty slots, which are filled with undefined values)

// ----------------------------------------------------------------------------------------------------
// Exercise 4 : Employees
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// 1. Using the map() method, push into a new array the firstname of the user and a welcome message. 

const welcomeMessages = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeMessages);

// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.

const fullStackResidents = users.filter(user => user.role === "Full Stack Resident");

// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
const fullStackLastNames = fullStackResidents.map(user => user.lastName);
console.log(fullStackLastNames);

// ---------------------------------------------------------------------------------------------------
//  Exercise 5 : Star Wars
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// Use the reduce() method to combine all of these into a single string.
const epicString = epic.reduce((accumulator, currentValue) => {
    return accumulator + ' ' + currentValue;
}, '')
console.log(epicString.trim);

// ----------------------------------------------------------------------------------------------------
//  Exercise 6 : Employees #2
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
// Using the filter() method, create a new array, containing the students that passed the course.
const passedStudents = students.filter(student => student.isPassed);
console.log(`Passed Students:`, passedStudents);

// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name 
passedStudents.forEach(student => console.log(`Good job ${student.name}, you passed the course in ${student.course}`));
// // Exercise 1 : Find the numbers divisible by 23
// function displayNumbersDivisible() {
//     let sum = 0;
//     console.log("Numbers divisible by 23:");
//     for (let i = 0; i <= 500; i++) {
//         if (i % 23 === 0) {
//             console.log(i);
//             sum += i;
//         }
//     }
//     console.log("Sum:", sum);
// }

// displayNumbersDivisible()

// // Bonus : Find the numbers divisible by a given divisor

// function displayNumbersDivisible(divisor) {
//     let sum = 0;

//     console.log(`Numbers divisible by ${divisor}:`);
//     for (let i = 0; i <= 500; i++) {
//         if (i % divisor === 0) {
//             console.log(i);
//             sum += i;
//         }
//     }

//     console.log("Sum:", sum);
// }
// displayNumbersDivisible(23);




// //  Exercise 2 : Shopping List

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// const shoppingList = ["banana", "orange", "apple"];

// function myBill() {
//     let total = 0;
//     for (let item of shoppingList) {
//         if (stock[item] > 0) { 
//             total += prices[item]; 
//             stock[item] -= 1; // Decrease the stock by 1 (Bonus)
//         }
//     }
//     return total;
// }

// console.log("Total price:", myBill());
// console.log("Updated stock:", stock);



// // Exercise 3 : What’s in my wallet ?

// function changeEnough(itemPrice, amountOfChange) {
//     // Calculate the total value of the change
//     const totalChange = 
//         amountOfChange[0] * 0.25 +
//         amountOfChange[1] * 0.10 + 
//         amountOfChange[2] * 0.05 + 
//         amountOfChange[3] * 0.01;  
//     return totalChange >= itemPrice;
// }

// console.log(changeEnough(4.25, [25, 20, 5, 0]));



// //  Exercise 4 : Vacations Costs
// function hotelCost() {
//     let nights;
//     while (true) {
//         nights = parseInt(prompt("Enter the number of nights you want to stay at the hotel: "));
//         if (!isNaN(nights) && nights > 0) break;
//         console.log("Invalid input. Please enter a positive number.");
//     }
//     return nights * 140;
// }

// function planeRideCost() {
//     let destination;
//     while (true) {
//         destination = prompt("Enter your destination: ");
//         if (typeof destination === "string" && isNaN(destination) && destination.trim() !== "") break;
//         console.log("Invalid input. Please enter a valid destination.");
//     }
//     destination = destination.toLowerCase();
//     if (destination === "london") {
//         return 183;
//     } else if (destination === "paris") {
//         return 220;
//     } else {
//         return 300;
//     }
// }

// function rentalCarCost() {
//     let days;
//     while (true) {
//         days = parseInt(prompt("Enter the number of days you want to rent a car: "));
//         if (!isNaN(days) && days > 0) break;
//         console.log("Invalid input. Please enter a positive number of days.");
//     }
//     const cost = days * 40;
//     return days > 10 ? cost * 0.95 : cost;
// }

// function totalVacationCost() {
//     const hotel = hotelCost();
//     const plane = planeRideCost();
//     const car = rentalCarCost();
//     console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
//     console.log(`Total vacation cost: $${hotel + plane + car}`);
// }

// totalVacationCost()

// // Bonus :

// function hotelCost(nights) {
//     return nights * 140;
// }

// function planeRideCost(destination) {
//     destination = destination.toLowerCase();
//     if (destination === "london") {
//         return 183;
//     } else if (destination === "paris") {
//         return 220;
//     } else {
//         return 300;
//     }
// }

// function rentalCarCost(days) {
//     const cost = days * 40;
//     return days > 10 ? cost * 0.95 : cost;
// }

// function totalVacationCost() {
//     let nights, destination, days;

//     while (true) {
//         nights = parseInt(prompt("Enter the number of nights you want to stay at the hotel: "));
//         if (!isNaN(nights) && nights > 0) break;
//         console.log("Invalid input. Please enter a positive number.");
//     }

//     while (true) {
//         destination = prompt("Enter your travel destination: ");
//         if (typeof destination === "string" && isNaN(destination) && destination.trim() !== "") break;
//         console.log("Invalid input. Please enter a valid destination.");
//     }

//     while (true) {
//         days = parseInt(prompt("Enter the number of days you want to rent a car: "));
//         if (!isNaN(days) && days > 0) break;
//         console.log("Invalid input. Please enter a positive number of days.");
//     }

//     const hotel = hotelCost(nights);
//     const plane = planeRideCost(destination);
//     const car = rentalCarCost(days);
//     console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
//     console.log(`Total vacation cost: $${hotel + plane + car}`);
// }

// totalVacationCost();



// // Exercise 5 : Users (in the day3/exercise folder)

// // Exercise 6 : Change the navbar (in the day3/exercise folder)

// // Exercise 7 : My Book List
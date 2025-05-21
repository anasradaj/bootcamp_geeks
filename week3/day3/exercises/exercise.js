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


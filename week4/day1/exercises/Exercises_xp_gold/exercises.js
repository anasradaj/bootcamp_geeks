// // Exercise 1 : Nested functions
// let landscape = function() {

//  let result = "";

//  let flat = function(x) {
//    for(let count = 0; count<x; count++){
//      result = result + "_";
//    }
//  }

//  let mountain = function(x) {
//    result = result + "/"
//    for(let counter = 0; counter<x; counter++){
//      result = result + "'"
//    }
//    result = result + "\\"
//  }

//  flat(4);
//  mountain(4);
//  flat(4)

//  return result;
// }

// landscape()

// // 1.Using the code below, and before executing it, predict the outcome and explain how you came to this conclusion :
// // The code will return a string that represents a landscape with flat ground and a mountain in the middle.
// // The function `landscape` constructs a string by calling two nested functions: `flat` and `mountain`.
// // The `flat` function adds underscores to the string, representing flat ground. The `mountain` function adds a mountain to the string, representing a mountain in the middle of the landscape.

// // 2.Change the code below to nested arrow functions.
// let landscapeArrow = () => {
//   let result = "";

//   let flat = (x) => {
//     for (let count = 0; count < x; count++) {
//       result += "_";
//     }
//   };

//   let mountain = (x) => {
//     result += "/";
//     for (let counter = 0; counter < x; counter++) {
//       result += "'";
//     }
//     result += "\\";
//   };

//   flat(4);
//   mountain(4);
//   flat(4);

//   return result;
// };

// landscapeArrow();

// // -----------------------------------------------------------------------------------------------------
// // Exercise 2 : Closure

// const addTo = x => y => x + y;
// const addToTen = addTo(10);
// addToTen(3);
// // The last line will return 13, because the function `addTo` returns a function that adds the parameter `y` to the parameter `x`.
// // -----------------------------------------------------------------------------------------------------
// // Exercise 3 : Currying
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1)
// // The last line will return 31, because the function `curriedSum` returns a function that adds the parameter `b` to the parameter `a`.
// // -----------------------------------------------------------------------------------------------------
// // Exercise 4 : Currying
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12)
// // The last line will return 17, because the function `add5` is a function that adds the parameter `b` to the parameter `a`, where `a` is 5.

// // -----------------------------------------------------------------------------------------------------
// // Exercise 5 : Composing
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10)
// // The last line will return 16, because the function `compose` returns a function that adds the result of the function `add5` to the result of the function `add1`.

// // -----------------------------------------------------------------------------------------------------

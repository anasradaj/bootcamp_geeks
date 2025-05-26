// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
// First, use function declaration and invoke it.

function convertKgToGr(kg) {
    return kg * 1000;
}

console.log(convertKgToGr(5.4)); 

// Then, use function expression and invoke it.
const convertKgToGr = function(kg) {
    return kg * 1000;
}

console.log(convertKgToGr(5)); 

// Difference between function declaration and function expression:
// Function declarations are hoisted, meaning they can be called before they are defined.
// Function expressions are not hoisted, and can only be called after they are defined.


// finally, use arrow function and invoke it.
const convertKgToGrArrow = (kg) => kg * 1000;
console.log(convertKgToGrArrow(5.4));
// Exercise 1 : Analyzing the map method

[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});
// The map method will iterate over each element in the array [1, 2, 3] and apply the function to each element.
// For each number, it checks if the type is 'number'. If it is, it returns the number multiplied by 2.

// Exercise 2: Analyzing the reduce method

[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
// The reduce method will iterate over each element in the array [[0, 1], [2, 3]] and apply the function to each element.
// It starts with the initial value [1, 2] and concatenates each sub-array to it.

// Exercise 3 : Analyze this code

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
});
// The map method will iterate over each element in the array arrayNum and apply the function to each element.
// For each number, it logs the number and its index to the console, shows an alert with the number, and returns the number multiplied by 2 to the newArray.

// Exercise 4 : Nested arrays
const array = [[1],[2],[3],[[[4]]],[[[5]]]].flat(2);
console.log(array);

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

const newGreeting = greeting.map(phraseArray => phraseArray.join(' '));

const stringGreeting = greeting.map(phraseArray => phraseArray.join(' ')).join(' ');

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]].flat(Infinity);
console.log(trapped);
// Exercise 1 : Promise.all()

/*
Promise.all takes an array of promises (or values) and returns a new promise that resolves when all of the input promises resolve. The resolved value is an array of the resolved values in the same order as the input. If any promise rejects, Promise.all immediately rejects with that reason. In this example, promise1 resolves to 3, promise2 is a value (so it's treated as a resolved promise), and promise3 resolves to 'foo' after 3 seconds. The output is [3, 42, 'foo'].
*/

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values); 
  })
  .catch(error => {
    console.log('One of the promises was rejected:', error);
  });

//   Exercise 2 : Analyse Promise.all()

function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2)); // returns a promise that resolves to x * 2
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync); //creates an array of promises

Promise.all(promiseArr) // waits for all promises to resolve and returns their results as an array.
  .then(result => {
    console.log(result);
  });

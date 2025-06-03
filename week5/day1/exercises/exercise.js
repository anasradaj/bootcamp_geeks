// Exercise 1 : Comparison (promises)

function compareToTen(num) {
    return new Promise((resolve, reject) => { 
        if (num > 10) {
            reject("Greater than 10");
        }
        else if (num === 10) { 
            resolve("Equal to 10");
        }
        else {
            resolve("Less than 10");
        }
    });
}

//In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))

// ---------------------------------------------------------------------------------------------------

// Exercise 2 : Promises

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success after 4 seconds");
    }, 4000);
});
promise
    .then(result => console.log("Exercise 2 Result:", result))
    .catch(error => console.error("Exercise 2 Error:", error));

// ---------------------------------------------------------------------------------------------------
// Exercise 3 : Resolve & Reject

const resolvedPromise = Promise.resolve(3);

resolvedPromise
    .then(value => console.log("Resolved Promise Result:", value))
    .catch(error => console.error("Resolved Promise Error:", error));

const rejectedPromise = Promise.reject("Boo");

rejectedPromise
    .then(value => console.log("Rejected Promise Result:", value))
    .catch(error => console.error("Rejected Promise Error:", error));
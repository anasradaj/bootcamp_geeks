let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.
const displayGroceries = () => groceries.fruits.forEach((fruit) => console.log(fruit));

const cloneGroceries = () => {
    // Copy of client variable
    let user = client;
    console.log("Original client:", client); // John
    client = "Betty";
    console.log("After change - client:", client); // Betty
    console.log("After change - user:", user);     // John
    // The user variable will not change when we modify client because strings are primitive types in JavaScript
    // and are passed by value, meaning user got a copy of the value, not a reference

    // Copy of groceries object
    let shopping = groceries;
    console.log("Original totalPrice:", shopping.totalPrice); // 20$
    shopping.totalPrice = "35$";
    console.log("After price change - shopping totalPrice:", shopping.totalPrice);     // 35$
    console.log("After price change - groceries totalPrice:", groceries.totalPrice);   // 35$
    // The totalPrice will change in both objects because objects are passed by reference
    // shopping and groceries point to the same object in memory

    shopping.other.paid = false;
    console.log("After paid change - shopping paid:", shopping.other.paid);     // false
    console.log("After paid change - groceries paid:", groceries.other.paid);   // false
    // Same here - the paid property will change in both objects because they reference the same object
};

// Invoke the function
cloneGroceries();
function describeValue(value) {
    // "typeof" (Type Guard)
    if (typeof value === 'string') {
        return "This is a string";
    }
    else {
        return "This is a number";
    }
}
console.log(describeValue("hello")); // show: This is a string
console.log(describeValue(42)); // show: This is a number

function getFirstElement(arr) {
    var firstElement = arr[0];
    return firstElement;
}
var mixedArray = ["hello", 123, "world"];
var firstAsString = getFirstElement(mixedArray);
// show "HELLO"
console.log(firstAsString.toUpperCase());

function formatInput(input) {
    var inputAsString = input.toString();
    return "Formatted Input: [".concat(inputAsString.toUpperCase(), "]");
}
console.log(formatInput(123)); // show: Formatted Input: [123]
console.log(formatInput("hello")); // show: Formatted Input: [HELLO]
console.log(formatInput(new Date())); // show: Formatted Input: [DATE STRING]

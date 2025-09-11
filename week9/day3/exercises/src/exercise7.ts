interface Stringifiable {
  toString(): string;
}

function formatInput<T extends Stringifiable>(input: T): string {
  const inputAsString = input.toString();
  return `Formatted Input: [${inputAsString.toUpperCase()}]`;
}

console.log(formatInput(123)); // show: Formatted Input: [123]
console.log(formatInput("hello")); // show: Formatted Input: [HELLO]
console.log(formatInput(new Date())); // show: Formatted Input: [DATE STRING]
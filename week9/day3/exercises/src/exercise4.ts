function getFirstElement(arr: (number | string)[]): string {
  const firstElement = arr[0];
  return firstElement as string;
}

const mixedArray = ["hello", 123, "world"];
const firstAsString = getFirstElement(mixedArray);

// show "HELLO"
console.log(firstAsString.toUpperCase());
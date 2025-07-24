class Calculator {
  static add(a: number, b: number): number {
    return a + b;
  }
  static subtract(a: number, b: number): number {
    return a - b;
  }
}

console.log("--- Exercise 4: Static Methods ---");
console.log("Sum:", Calculator.add(10, 5));        
console.log("Difference:", Calculator.subtract(10, 5)); 

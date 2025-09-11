interface Lengthy {
  length: number;
}

function logLength<T extends Lengthy>(arg: T): void {
  console.log(`Length: ${arg.length}`);
}

logLength("Hello, world!"); 
logLength([1, 2, 3, 4]);  

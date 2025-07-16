function checkNumberSign(num: number): string {
  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}

// Test
console.log(checkNumberSign(5));   // positive
console.log(checkNumberSign(-3));  // negative
console.log(checkNumberSign(0));   // zero

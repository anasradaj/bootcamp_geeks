function isAnagram(str1, str2) {
    // Remove whitespace and convert to lowercase
    const clean1 = str1.replace(/\s+/g, '').toLowerCase();
    const clean2 = str2.replace(/\s+/g, '').toLowerCase();

    // Sort the characters and compare
    return clean1.split('').sort().join('') === clean2.split('').sort().join('');
}

// Example usage:
console.log(isAnagram('Astronomer', 'Moon starer')); // true
console.log(isAnagram('School master', 'The classroom')); // true
console.log(isAnagram('The Morse Code', 'Here come dots')); // true
console.log(isAnagram('hello', 'world')); // false
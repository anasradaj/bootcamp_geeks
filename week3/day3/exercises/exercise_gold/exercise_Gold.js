// Exercise 1 : is_Blank
function isBlank(str) {
    return str === '';
}
console.log(isBlank(''));
console.log(isBlank('abc'));

// Exercise 2 : Abbrev_name
function abbrevName(name) {
    const parts = name.trim().split(' ');
    if (parts.length < 2) return name;
    return `${parts[0]} ${parts[1][0]}.`;
}
console.log(abbrevName("Robin Singh"));

// Exercise 3 : SwapCase
function swapCase(str) {
    return str.split('').map(char => {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    }).join('');
}
console.log(swapCase('The Quick Brown Fox'));

// Exercise 4 : Omnipresent value
function isOmnipresent(arr, val) {
    return arr.every(subArr => subArr.includes(val));
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));



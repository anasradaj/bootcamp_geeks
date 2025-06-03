// 1st daily challenge

function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    if (Array.isArray(words) && words.every(word => typeof word === 'string')) {
      resolve(words.map(word => word.toUpperCase()));
    } else {
      reject('Error: Not all items in the array are strings.');
    }
  });
}

function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (Array.isArray(words) && words.length > 4) {
      resolve([...words].sort());
    } else {
      reject('Error: Array length is not greater than 4.');
    }
  });
}


makeAllCaps([1, "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result)) 
  .catch(error => console.log(error));


// 2nd daily challenge

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

function toJs() {
  return new Promise((resolve, reject) => {
    try {
      const morseObj = JSON.parse(morse);
      if (Object.keys(morseObj).length === 0) {
        reject('Error: Morse object is empty.');
      } else {
        resolve(morseObj);
      }
    } catch (e) {
      reject('Error: Invalid JSON.');
    }
  });
}

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const input = prompt('Enter a word or sentence to convert to Morse code:');
    if (!input) {
      reject('Error: No input provided.');
      return;
    }
    const chars = input.toLowerCase().split('');
    const translation = [];
    for (let char of chars) {
      if (char === ' ') {
        translation.push(' '); 
      } else if (morseJS[char]) {
        translation.push(morseJS[char]);
      } else {
        reject(`Error: Character "${char}" not in Morse object.`);
        return;
      }
    }
    resolve(translation);
  });
}

function joinWords(morseTranslation) {
  const output = morseTranslation.join('\n');
  let pre = document.getElementById('morse-output');
  if (!pre) {
    pre = document.createElement('pre');
    pre.id = 'morse-output';
    document.body.appendChild(pre);
  }
  pre.textContent = output;
}


toJs()
  .then(toMorse)
  .then(joinWords)
  .catch(error => alert(error));

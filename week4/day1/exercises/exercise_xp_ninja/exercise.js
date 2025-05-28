// Exercise 1 : Merge Words

function mergeWords(string) {

  return function(nextString) {
    if (nextString === undefined) {
      return string;
    } else {
      return mergeWords(string + ' ' + nextString);
    }
  };
}

console.log(mergeWords('Hello')());
console.log(mergeWords('There')('is')('no')('spoon.')());

// Below is a verbose JavaScript solution, turn this into a currying function.
const verboseMergeWords = (word1) => {
    return (word2) => {
        return (word3) => {
            return `${word1} ${word2} ${word3}`;
        };
    };
};
const phrase = verboseMergeWords('Hello')('There')('is no spoon.');
console.log(phrase);


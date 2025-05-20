// Daily Challenge: Not Bad
const sentence = "The song is not that bad, I love it";

const wordNot = sentence.indexOf("not");
const wordBad = sentence.indexOf("bad");

if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {   
    const result = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
    console.log(result);
} else {
    console.log(sentence);
}
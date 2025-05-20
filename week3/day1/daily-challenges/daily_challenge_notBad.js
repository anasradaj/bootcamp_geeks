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

const sentence2 = "The movie is bad, it is not good";
const wordNot2 = sentence2.indexOf("not");
const wordBad2 = sentence2.indexOf("bad");

if (wordNot2 !== -1 && wordBad2 !== -1 && wordBad2 > wordNot2) {   
    const result = sentence2.slice(0, wordNot2) + "good" + sentence2.slice(wordBad2 + 3);
    console.log(result);
} else {
    console.log(sentence2);
}
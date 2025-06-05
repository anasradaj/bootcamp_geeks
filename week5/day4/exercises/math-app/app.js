// app.js
const _ = require('lodash');
const math = require('./math.js');

const nums = [2, 4, 6, 8];

console.log('Sum using math.add:', math.add(5, 7));
console.log('Product using math.multiply:', math.multiply(3, 4));
console.log('Lodash sum:', _.sum(nums));
console.log('Lodash max:', _.max(nums));

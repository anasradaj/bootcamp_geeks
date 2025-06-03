// Exercise 1 : Dog age to Human years
const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];

// Using a loop
let dogHumanAgeSum = 0;
for (const animal of data) {
  if (animal.type === 'dog') {
    dogHumanAgeSum += animal.age * 7;
  }
}
console.log('Sum of dogs\' ages in human years (loop):', dogHumanAgeSum);

// Using reduce()
const dogHumanAgeSumReduce = data.reduce((sum, animal) => {
  if (animal.type === 'dog') {
    return sum + animal.age * 7;
  }
  return sum;
}, 0);
console.log('Sum of dogs\' ages in human years (reduce):', dogHumanAgeSumReduce);

// -------------------------------------------------------------------

// Exercise 2 : Email
const userEmail3 = ' cannotfillemailformcorrectly@gmail.com ';
const cleanedEmail = userEmail3.trim();
console.log(cleanedEmail);

// ------------------------------------------------------------------

// Exercise 3 : Employees #3
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// Using reduce to transform the array into an object
const usersObject = users.reduce((accumulator, user) => {
  const fullName = `${user.firstName} ${user.lastName}`;
  accumulator[fullName] = user.role;
  return accumulator;
}, {});

console.log(usersObject);


// -------------------------------------------------------------------
// Exercise 4 : Array to Object
const letters = ['x', 'y', 'z', 'z'];

// Using a for loop
const letterCountLoop = {};
for (const letter of letters) {
  if (letterCountLoop[letter]) {
    letterCountLoop[letter]++;
  } else {
    letterCountLoop[letter] = 1;
  }
}
console.log('Letter count (loop):', letterCountLoop);

// Using reduce()
const letterCountReduce = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});
console.log('Letter count (reduce):', letterCountReduce);

import { people } from './data.js';

function calculateAverageAge(personArray) {
  if (!personArray.length) return 0;
  const total = personArray.reduce((sum, person) => sum + person.age, 0);
  return total / personArray.length;
}

const avgAge = calculateAverageAge(people);
console.log(`Average age: ${avgAge}`);


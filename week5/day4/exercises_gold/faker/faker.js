const faker = require('faker');
const prompt = require('prompt-sync')();

const users = [];

function addFakeUser() {
  users.push({
    name: faker.name.findName(),
    address: faker.address.streetAddress(),
    country: faker.address.country()
  });
}

function addUserFromPrompt() {
  const name = prompt('Enter name: ');
  const address = prompt('Enter address street: ');
  const country = prompt('Enter country: ');
  users.push({
    name,
    address,
    country
  });
}

addFakeUser();
addFakeUser();
addUserFromPrompt();
console.log(users);
// Exercise 1 : Location
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
// ----------------------------------------------------------------------------------------------------


//  Exercise 2: Display Student Info

function displayStudentInfo({first, last}) {
    return `Your full name is ${first} ${last}`;
}
console.log(displayStudentInfo({first: 'Elie', last: 'Schoppik'}));

// -----------------------------------------------------------------------------------------------------

//  Exercise 3: User & id

// Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }

// 1.Using methods taught in class, turn the users object into an array:

const users = { user1: 18273, user2: 92833, user3: 90315 };
const userArray = Object.entries(users);
console.log(userArray);

// 2.Modify the outcome of part 1, by multipling the user’s ID by 2.

const modifiedUserArray = userArray.map(([user, id]) => [user, id * 2]);
console.log(modifiedUserArray);

// ------------------------------------------------------------------------------------------------------

// Exercise 4 : Person class
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
// Output : 'object' (because member is an instance of the person class, which is an object)

// ------------------------------------------------------------------------------------------------------
//  Exercise 5 : Dog class
class Dog {
  constructor(name) {
    this.name = name;
  }
};
// Which constructor will successfully extend the Dog class?
  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

// ------------------------------------------------------------------------------------------------------
//  Exercise 6 : Challenges

// Evaluate these (ie True or False)

[2] === [2]  // False
{} === {}    // False

// What is, for each object below, the value of the property number and why?
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4; // this line change the property of object1, which is also referenced by object2 and object3
console.log(object2.number) // 4 
console.log(object3.number) // 4
console.log(object4.number) // 5 (object4 is a separate object with its own property)

// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin etc …
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

// Create a class Mammal that extends from the Animal class. Inside the class, add a method called sound()
class Mammal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }

  sound(animalSound) {
    return `${animalSound}! I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

// Create a farmerCow object
const farmerCow = new Mammal("Lily", "cow", "brown and white");

// Call the sound method
const cowSound = farmerCow.sound("Moooo");
console.log(cowSound);
"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        return "Some generic animal sound.";
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        return "Woof!";
    }
}
console.log("--- Exercise 3: Class Inheritance ---");
const myDog = new Dog("Buddy");
console.log(`${myDog.name} says: ${myDog.makeSound()}`);

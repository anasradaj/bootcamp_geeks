class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  public makeSound(): string {
    return "Some generic animal sound.";
  }
}
class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  public makeSound(): string {
    return "Woof!";
  }
}


console.log("--- Exercise 3: Class Inheritance ---");
const myDog = new Dog("Buddy");
console.log(`${myDog.name} says: ${myDog.makeSound()}`);





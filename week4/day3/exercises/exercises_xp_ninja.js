// Exercise 1 : Bird class
class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}

const pet = new Flamingo();

/* When you create const pet = new Flamingo();, the Flamingo constructor runs.
The first line in the Flamingo constructor is console.log("I'm pink. 🌸");, so this prints first.
Then super(); is called, which runs the Bird constructor, printing I'm a bird. 🦢.
So, the output is:
I'm pink. 🌸
I'm a bird. 🦢 */
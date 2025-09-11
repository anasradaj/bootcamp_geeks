// definition of two types
type Person = {
  name: string;
  age: number;
};

type Address = {
  street: string;
  city: string;
};

// creation of an intersection type
type PersonWithAddress = Person & Address;

// creation of a variable that respects the intersection type
const personAddress: PersonWithAddress = {
  name: 'Anas',
  age: 30,
  street: 'res andalous',
  city: 'Mohammedia',
};

console.log(personAddress);
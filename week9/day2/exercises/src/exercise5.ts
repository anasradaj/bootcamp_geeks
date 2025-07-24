interface User {
  readonly id: number;
  name: string;
  email: string;
}

interface PremiumUser extends User {
  membershipLevel?: string;
}

function printUserDetails(user: PremiumUser): void {
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  if (user.membershipLevel) {
    console.log(`Membership Level: ${user.membershipLevel}`);
  } else {
    console.log("Membership Level: (none)");
  }
}

// Demonstration
const user1: PremiumUser = { id: 1, name: "Alice", email: "alice@example.com" };
const user2: PremiumUser = { id: 2, name: "Bob", email: "bob@example.com", membershipLevel: "Gold" };

printUserDetails(user1);
printUserDetails(user2);

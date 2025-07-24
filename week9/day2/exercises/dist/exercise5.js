"use strict";
function printUserDetails(user) {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    if (user.membershipLevel) {
        console.log(`Membership Level: ${user.membershipLevel}`);
    }
    else {
        console.log("Membership Level: (none)");
    }
}
// Demonstration
const user1 = { id: 1, name: "Alice", email: "alice@example.com" };
const user2 = { id: 2, name: "Bob", email: "bob@example.com", membershipLevel: "Gold" };
printUserDetails(user1);
printUserDetails(user2);

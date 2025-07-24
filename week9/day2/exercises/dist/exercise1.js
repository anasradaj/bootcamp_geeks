"use strict";
// Define the Employee class with various access levels for its properties
class Employee {
    constructor(name, salary, position, department) {
        this._name = name;
        this._salary = salary;
        this.position = position;
        this.department = department;
    }
    getEmployeeInfo() {
        // Accessing _name (private) and position (public) via 'this' is allowed within the class
        return `Employee Name: ${this._name}, Position: ${this.position}.`;
    }
}
// --- Demonstration of usage ---
console.log("--- Exercise 1: Access Modifiers ---");
const employee1 = new Employee("Alice Dupont", 60000, "Senior Developer", "Engineering");
console.log(`Alice's position is: ${employee1.position}`);
console.log(employee1.getEmployeeInfo());
console.log("--- End Exercise 1 ---");

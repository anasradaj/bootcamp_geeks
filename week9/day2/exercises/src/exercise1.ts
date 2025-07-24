// Define the Employee class with various access levels for its properties
class Employee {
  private _name: string; 
  private _salary: number; 
  public position: string; 
  protected department: string; 
  
  constructor(name: string, salary: number, position: string, department: string) {
    this._name = name;
    this._salary = salary;
    this.position = position;
    this.department = department;
  }


  public getEmployeeInfo(): string {
    // Accessing _name (private) and position (public) via 'this' is allowed within the class
    return `Employee Name: ${this._name}, Position: ${this.position}.`;
  }
  
//   // Example of an internal (private) method for context
//   private calculateBonus(performanceScore: number): number {
//     return this._salary * 0.10 * (performanceScore / 100);
//   }
//   // Example of an internal (protected) method for context
//   protected getDepartmentInfo(): string {
//       return `Works in the ${this.department} department.`;
//   }
}

// --- Demonstration of usage ---

console.log("--- Exercise 1: Access Modifiers ---");

const employee1 = new Employee("Alice Dupont", 60000, "Senior Developer", "Engineering");
console.log(`Alice's position is: ${employee1.position}`);
console.log(employee1.getEmployeeInfo());
console.log("--- End Exercise 1 ---");
type Person1 = {
  name: string;
  age: number;
};

type Job = {
  position: 'Manager' | 'Developer';
  department: string;
};

type Employee = Person1 & Job;

function describeEmployee(employee: Employee): string {
  if (employee.position === 'Manager') {
    return `${employee.name} is a Manager in the ${employee.department} department.`;
  } else {
    return `${employee.name} is a Developer in the ${employee.department} department.`;
  }
}

const manager: Employee = { name: 'Alice', age: 40, position: 'Manager', department: 'Sales' };
const developer: Employee = { name: 'Bob', age: 28, position: 'Developer', department: 'Engineering' };

console.log(describeEmployee(manager));
console.log(describeEmployee(developer));
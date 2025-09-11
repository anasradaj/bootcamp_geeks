function describeEmployee(employee) {
    if (employee.position === 'Manager') {
        return "".concat(employee.name, " is a Manager in the ").concat(employee.department, " department.");
    }
    else {
        return "".concat(employee.name, " is a Developer in the ").concat(employee.department, " department.");
    }
}
var manager = { name: 'Alice', age: 40, position: 'Manager', department: 'Sales' };
var developer = { name: 'Bob', age: 28, position: 'Developer', department: 'Engineering' };
console.log(describeEmployee(manager));
console.log(describeEmployee(developer));

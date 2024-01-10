"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // private name: string;
        this.employees = []; //private means "employees" is only accessible within the class Department, you can't add a "employees[2] = 'Sam'" outside of the class below, you have to use the addEmployee() method.
        // this.id = id;
        // this.name = n;
    }
    describe() {
        console.log(`Department: ${this.id}: ${this.name}`); //this refers to the class scope
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDerpartment extends Department {
}
const accounting = new Department('d1', 'Accounting');
accounting.addEmployee('Max');
accounting.addEmployee('Jacob');
accounting.describe();
accounting.printEmployeeInformation();
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe}
// accountingCopy.describe()

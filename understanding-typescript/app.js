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
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT'); //whenever you add a constructor to and inheritor class, you need the super function. *It forwards the inherited constructor with the same properties.
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Acounting');
        this.reports = reports;
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment('d1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Jacob');
it.describe();
it.printEmployeeInformation();
console.log(it);
const accounting = new AccountingDepartment('d2', []);
accounting.addReport('Something went wrong...');
accounting.printReports();
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe}
// accountingCopy.describe()

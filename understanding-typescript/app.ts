class Department {
    // private id: string;
    // private name: string;
    private employees: string[] = []; //private means "employees" is only accessible within the class Department, you can't add a "employees[2] = 'Sam'" outside of the class below, you have to use the addEmployee() method.


    constructor(private readonly id: string, public name: string){ //readonly only in ts. readonly makes it only initialized once, can't be changed.
        // this.id = id;
        // this.name = n;
    }

    describe(this: Department){ //when Describe is executed "this" will always reference an instance of Department
        console.log(`Department: ${this.id}: ${this.name}`) //this refers to the class scope
    }

    addEmployee(employee: string){
        this.employees.push(employee)
    }

    printEmployeeInformation(){
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

class ITDerpartment extends Department { //the ITDepartment will inherit EVERYTHING from the Department class

}

const accounting = new Department('d1', 'Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Jacob');


accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe}
// accountingCopy.describe()
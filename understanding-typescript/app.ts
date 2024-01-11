class Department {
    // private id: string;
    // private name: string;
    protected employees: string[] = []; //private means "employees" is only accessible within the class Department, you can't add a "employees[2] = 'Sam'" outside of the class below, you have to use the addEmployee() method.


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

class ITDepartment extends Department { //the ITDepartment will inherit EVERYTHING from the Department class, except private properties: you can switch to "protected" and that allows for classes that inherits the property
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT'); //whenever you add a constructor to and inheritor class, you need the super function. *It forwards the inherited constructor with the same properties.
        this.admins = admins
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Acounting')
    }

    addEmployee(name: string){
        if (name === 'Max'){
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string){
        this.reports.push(text)
    }

    printReports() {
        console.log(this.reports)
    }
}
const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Jacob');


it.describe();
it.printEmployeeInformation();

console.log(it)

const accounting = new AccountingDepartment('d2', []);

accounting.addReport('Something went wrong...');
accounting.printReports();



// const accountingCopy = { name: 'DUMMY', describe: accounting.describe}
// accountingCopy.describe()
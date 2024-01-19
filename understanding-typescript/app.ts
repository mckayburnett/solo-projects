class Department {
    static fiscalYear = 2020
    // private id: string;
    // private name: string;
    protected employees: string[] = []; //private means "employees" is only accessible within the class Department, you can't add a "employees[2] = 'Sam'" outside of the class below, you have to use the addEmployee() method.

    constructor(protected readonly id: string, public name: string){ //readonly only in ts. readonly makes it only initialized once, can't be changed.
        // this.id = id;
        // this.name = n;
        //console.log(this.fiscalYear) --- this won't work because fiscalYear is static and not an "instance", would need to do Department.fiscalYear
    }

    static createEmployee(name: string){ //static allows creation without having to instatiate anything- you don't need to use New...
        return{name: name}
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
    private lastReport: string;

    get mostRecentReport(){ //getter is where you use a method/function to retrieve a value
        if(this.lastReport){
            return this.lastReport //getters have to return something. Below you access it with just dot notation, no "()" => accounting.mostRecentReport
        }
        throw new Error('No report found.')
    }

    set mostRecentReport(value: string){
        if(!value){
        this.addReport('please add a value')
        }
        this.addReport(value)
    } //setters typically relate to the getter


    constructor(id: string, private reports: string[]) {
        super(id, 'Acounting')
        this.lastReport = reports[0]
    }

    describe(){
        console.log('Accounting Department - ID ' + this.id)
    }

    addEmployee(name: string){
        if (name === 'Max'){
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string){
        this.reports.push(text)
        this.lastReport = text
    }

    printReports() {
        console.log(this.reports)
    }
}

const employee1 = Department.createEmployee("Max")
console.log(employee1, Department.fiscalYear)

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Jacob');


it.describe();
it.printEmployeeInformation();

console.log(it)

const accounting = new AccountingDepartment('d2', []);

accounting.mostRecentReport = 'Year End Report'
accounting.addReport('Something went wrong...');
accounting.printReports();

accounting.describe()



// const accountingCopy = { name: 'DUMMY', describe: accounting.describe}
// accountingCopy.describe()
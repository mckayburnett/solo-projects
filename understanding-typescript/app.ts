interface Greetable { //only used to describe the structure of an object
    name: string;

    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age = 30;

    constructor(n: string){
        this.name = n
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name)
    }
}

let user1: Greetable;

user1 = new Person('Max')
console.log(user1)

console.log(user1.greet('hello there, I am'))
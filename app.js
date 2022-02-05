class Person {
    #id;
    #name;
    constructor(id, name) {
            this.#id = id;
            this.#name = name
    }
    getId() {
            return this.#id;
    }
    getName() {
            return this.#name
    }
    toString() {
            return `id: ${this.#id}; name: ${this.#name};`
    }
}
const person = new Person(123, 'Moshe');
console.log(`person is ${person}`)
class Employee extends Person {
    #salary;
    constructor(id, name, salary) {
            super(id, name); //call the constructor of the class Person
            this.#salary = salary;
    }
    computeSalary() {
            return this.#salary
    }
    toString() {
            return super.toString() + ` salary: ${this.computeSalary()}`
    }
}
const person2 = new Employee(124, "Sara", 5000);
console.log(`person2 is ${person2}`)
console.log(typeof(person2)) // just object
console.log(person2.constructor.name) // only this way JS allow getting constructor name
class Child extends Person {
    #kindergarten
    constructor(id, name, kindergarten) {
         super(id, name);
         this.#kindergarten = kindergarten   
    }
    getKindergarten() {
            return this.#kindergarten;
    }
    toString() {
            return `${super.toString()} kindergarten: ${this.#kindergarten}`
    }
}
const person3 = new Child(125, 'Yakob', 'Shalom');
console.log(`person3 is ${person3}`)

class WageEmployee extends Employee {
    #hours
    #wage
    constructor(id, name, salary, hours, wage) {
            super(id, name, salary)
            this.#hours = hours;
            this.#wage = wage;
    }
    computeSalary() {
            return super.computeSalary() + this.#hours * this.#wage
    }
    

}
const person4 = new WageEmployee(126, 'Asaf', 1000, 10, 100);
console.log(`person4 is ${person4}`)
/**************************************************************HW #17 definition */
const persons = [
    new Child(100, 'Olya', 'Shalom'),
    new Child(101, 'Serega', "Boker"),
    new Child(102, 'Kolya', 'Shalom'),
    new Employee(103, 'Vasya', 1000),
    new WageEmployee(104, 'Tolya', 1000, 10, 100)
]
function countOfPersonType(persons, type) {
    //return count of persons of the given type
    //Example:
    //countOfPersonType(persons, 'WageEmployee') ---> 1
}
function computeSalaryBudget(persons) {
    //returns total salary of all employee objects in the given array
    //Example:
    //computeSalaryBudget(persons) ---> 3000
}
function countChildrenGindergarten(persons, kindergarten) {
    //returns number of children in the given kindergarten
    //Example:
    //countChildrenGindergarten(persons, 'Shalom') ---> 2
}
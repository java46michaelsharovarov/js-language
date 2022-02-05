class Person {
    #id;
    #name;
    constructor(id, name) {
            this.#id = id;
            this.#name = name;
    }
    getId() {
            return this.#id;
    }
    getName() {
            return this.#name;
    }
    toString() {
            return `id: ${this.#id}; name: ${this.#name};`
    }
}
class Employee extends Person {
    #salary;
    constructor(id, name, salary) {
            super(id, name);
            this.#salary = salary;
    }
    computeSalary() {
            return this.#salary;
    }
    toString() {
            return super.toString() + ` salary: ${this.computeSalary()}`;
    }
}
class Child extends Person {
    #kindergarten;
    constructor(id, name, kindergarten) {
         super(id, name);
         this.#kindergarten = kindergarten; 
    }
    getKindergarten() {
            return this.#kindergarten;
    }
    toString() {
            return super.toString() + ` kindergarten: ${this.#kindergarten}`;
    }
}
class WageEmployee extends Employee {
    #hours;
    #wage;
    constructor(id, name, salary, hours, wage) {
            super(id, name, salary);
            this.#hours = hours;
            this.#wage = wage;
    }
    computeSalary() {
            return super.computeSalary() + this.#hours * this.#wage;
    }
}
const persons = [
    new Child(100, 'Olya', 'Shalom'),
    new Child(101, 'Serega', "Boker"),
    new Child(102, 'Kolya', 'Shalom'),
    new Employee(103, 'Vasya', 1000),    
    new WageEmployee(104, 'Tolya', 1000, 10, 100)
]
function countOfPersonType(persons, type) {
    return persons.reduce((count, n) => n.constructor.name == type ? ++count : count, 0);
}
function computeSalaryBudget(persons) {
    return persons.reduce((salary, n) => "computeSalary" in n ? salary + n.computeSalary(): salary, 0);
    // return persons.reduce((salary, n) => n.toString().includes('salary') ? salary + n.computeSalary(): salary, 0);
}
function countChildrenGindergarten(persons, kindergarten) {
    return persons.reduce((count, n) => n.toString().includes(kindergarten) ? ++count : count, 0);
}
console.log(countOfPersonType(persons, 'WageEmployee'));
console.log(computeSalaryBudget(persons));
console.log(countChildrenGindergarten(persons, 'Shalom'));
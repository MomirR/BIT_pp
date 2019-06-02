class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

class Employee extends Person {
    constructor(job, salary, name, surname) {
        super(name, surname);
        this.job = job;
        this.salary = salary;
    }

    getData() {
        this.Person.call(this, name, surname);
        return this.name + " " + this.surname + " " + this.salary;
    }

    getSalary() {
        console.log(this.salary);
    }

    increaseSalary() {
        var tenPercent = (parseInt(this.salary) / 100) * 10;
        return this.salary * tenPercent;
    }
}

class Developer extends Employee {
    constructor(specialization, job, salary, name, surname) {
        super(name, surname, job, salary);
        this.specialization = specialization;
    }

    getSpecialization() {
        console.log(this.specialization);
    }
}

class Manager extends Employee {
    constructor(department, job, salary, name, surname) {
        super(job, salary, name, surname)
        this.department = department;
    }

    getDepartment() {
        console.log(this.department);
    }

    changeDepartment(value) {
        this.department = value;
    }
}

/********************* TESTING STARTS *********************/

var me = new Person("Momir", "Radovanovic");
var me2 = new Employee("Developer", "1200eur", "Momir", "Radovanovic");
var me3 = new Developer("Front End Developer", "Programmer", "1200eur", "Momir", "Radovanovic");
var me4 = new Manager("Muzicki", "Violinist", "250eur", "Momir", "Radovanovic");
console.log(me4);

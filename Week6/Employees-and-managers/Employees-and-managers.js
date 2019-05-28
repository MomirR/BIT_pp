function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

function Employee(job, salary, name, surname) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}

function Developer(specialization, job, salary, name, surname) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}

Developer.prototype.getSpecialization = function () {
    console.log(this.specialization);
}

function Manager(department, job, salary, name, surname) {
    Employee.call(this, job, salary, name, surname)
    this.department = department;
}

Manager.prototype.getDepartment = function () {
    console.log(this.department);
}

Manager.prototype.changeDepartment = function (value) {
    this.department = value;
}

Employee.prototype.getData = function () {
    this.Person.call(this, name, surname);
    return this.name + " " + this.surname + " " + this.salary;
}

Employee.prototype.getSalary = function () {
    console.log(this.salary);
}
Employee.prototype.increaseSalary = function () {
    var tenPercent = (parseInt(this.salary) / 100) * 10;
    return this.salary * tenPercent;
}

var me = new Person("Momir", "Radovanovic");
var me2 = new Employee("Developer", "1200eur", "Momir", "Radovanovic");
var me3 = new Developer("Front End Developer", "Programmer", "1200eur", "Momir", "Radovanovic");
var me4 = new Manager("Muzicki", "Violinist", "250eur", "Momir", "Radovanovic");
console.log(me4);

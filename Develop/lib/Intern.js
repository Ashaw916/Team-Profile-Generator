// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee{
    constructor(role, name, id, email, school) {
        super(name, id, email);
        this.role = role;
        this.email = email;
        this.school = school;
    }

    printInfo() {
        console.log(`role: ${this.role}`);
        console.log(`name: ${this.name}`);
        console.log(`id:${this.id}`);
        console.log(`email: ${this.email}`);
        console.log(`School:: ${this.school}`);
    };
};

module.exports = Intern;

// const intern = new Intern();

// console.log("--Intern--")
// intern.printInfo();
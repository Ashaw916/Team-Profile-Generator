// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(role, name, id, email, github) {
        super(name, id, email);
        this.role = role;
        this.email = email;
        this.github = github;
    }

    printInfo() {
        console.log(`role: ${this.role}`);
        console.log(`name: ${this.name}`);
        console.log(`id:${this.id}`);
        console.log(`email: ${this.email}`);
        console.log(`GitHub: ${this.github}`);
    };
};

module.exports = Engineer;

// const engineer = new Engineer("role", "name", "id", "email", "github");

// console.log("--Engineer--")
// engineer.printInfo();
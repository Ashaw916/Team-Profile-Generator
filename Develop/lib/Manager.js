// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee{
    constructor(role, name, id, email, office) {
        super(name, id, email);
        this.role = role;
        this.email = email;
        this.office = office;
    }

    printInfo() {
        console.log(`role: ${this.role}`);
        console.log(`name: ${this.name}`);
        console.log(`id:${this.id}`);
        console.log(`email: ${this.email}`);
        console.log(`Office:: ${this.office}`);
    };
};

module.exports = Manager;

// const manager = new Manager();

// console.log("--Manager--")
// manager.printInfo();
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "./output/team.html");

// // Sets up the Express App
// // =============================================================
// var app = express();
// var PORT = process.env.PORT || 3000;

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

const render = require("./lib/htmlRenderer");
// const { response } = require("express");
// const { removeListener } = require("process");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const employees = [];

// choose role
inquirer
  .prompt([
    {
      type: "checkbox",
      message: "Choose a role.",
      name: "role",
      choices: ["Intern", "Engineer", "Manager"],
    },
  ])
  .then((response) => {
    if (response.role === "Intern") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "name",
            message: "Enter name ",
          },
          {
            type: "input",
            name: "id",
            message: "Enter id",
          },
          {
            type: "input",
            name: "email",
            message: "Enter email",
          },
          {
            type: "input",
            name: "___",
            message: "___",
          },
        ])
        .then((response) => {
          const intern = new Intern(response);
          employees.push(intern);
        //   render(intern);
          printInfo(intern);
        });
    } else if (response.role === "Engineer") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "name",
            message: "Enter name ",
          },
          {
            type: "input",
            name: "id",
            message: "Enter id",
          },
          {
            type: "input",
            name: "email",
            message: "Enter email",
          },
          {
            type: "input",
            name: "___",
            message: "___",
          },
        ])
        .then((response) => {
          const engineer = new Engineer(response);
          employees.push(engineer);
        //   render(engineer);
          printInfo(engineer);
        });
    } else {
      inquirer
        .prompt([
          {
            type: "input",
            name: "name",
            message: "Enter name ",
          },
          {
            type: "input",
            name: "id",
            message: "Enter id",
          },
          {
            type: "input",
            name: "email",
            message: "Enter email",
          },
          {
            type: "input",
            name: "___",
            message: "___",
          },
        ])
        .then((response) => {
          const manager = new Manager(response);
          employees.push(manager);
        //   render(manager);
          printInfo(manager);
        });
    }
    render(employees);
  });

// send to htmlREnder

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

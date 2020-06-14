const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
var express = require("express");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "./output/team.html");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

const render = require("./lib/htmlRenderer.js");
const { Console, error } = require("console");
const { response } = require("express");
const { removeListener } = require("process");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const employees = [];

// choose role
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "checkbox",
        message: "Choose a role.",
        name: "role",
        choices: ["Intern", "Engineer", "Manager"],
      },
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
    ])
    .then((response) => {
      console.log(response);

      let specInfo;
      let roleText = response.role;
      console.log("role 1st " + roleText);
      if (roleText == "Intern") {
        specInfo = "School";
        console.log("if intern");
      } else if (roleText == "Engineer") {
        specInfo = "GitHub";
        console.log("if Engineer");
      } else if (roleText == "Manager") {
        specInfo = "office number";
        console.log("if Manager");
      } else {
        console.log("error");
      }

      inquirer
        .prompt([
          {
            type: "input",
            name: "specInfo",
            message: `Enter ${specInfo}`,
          },
          {
            type: "confirm",
            name: "addAnother",
            message: "Add another team member?",
          },
        ])
        .then(({ specInfo, addAnother }) => {
            console.log(response);

            console.log("another " + addAnother);
            console.log("role 2nd " + roleText);
            console.log("name " + response.name);
            console.log("id " + response.id);
            console.log("email " + response.email);
            console.log("spec " + specInfo);
            let nameR = response.name;
            let idR = response.id;
            let emailR = response.email;

            if (roleText == "Intern") {
                let newEmployee = new Intern(nameR, idR, emailR, specInfo);
                console.log("cons" + newEmployee + "sent");
                employees.push(newEmployee);
            } else if (roleText == "Engineer") {
                let newEmployee = new Engineer(nameR, idR, emailR, specInfo);
                console.log("cons" + newEmployee + "sent");
                employees.push(newEmployee);
            } else if (roleText == "Manager") {
                let newEmployee = new Manager(nameR, idR, emailR, specInfo);
                console.log("cons" + newEmployee + "sent");
                employees.push(newEmployee);
            } else {
                console.log(error + " not sent");
            }

            if (addAnother === true) {
                addEmployee();
            } else {
                console.log("done adding team");
            }
            render(employees);
        });
    });
}

function sendTeam() {}

function startApp() {
  addEmployee();
  sendTeam();
}
startApp();

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "main.html"));
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  }); 
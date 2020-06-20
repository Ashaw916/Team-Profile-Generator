const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer.js");
const OUTPUT_DIR = path.resolve(__dirname, "./output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

function write(){
  fs.writeFileSync(outputPath, render(employees), "utf-8")
}
const employees = [];

// choose role
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
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
        write(employees);
        });
    });
}



function startApp() {
  addEmployee();
  write();
}
startApp();


// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   }); 
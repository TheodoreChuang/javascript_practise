// const myLodash = require("./lodash");
// const npmLodash = require("lodash");

// console.log(myLodash.random());

// myLodash.times(2, i => {
//   console.log(`${i} iteration`);
// });

// myLodash.times(2, myLodash.random);

// console.log(npmLodash.random(200));

// let build = npmLodash.times(2, i => {
//   return i;
// });

// console.log(build);

// require("./setup");

// console.log("... code after setup...");

// console.log(setupVar); // not defined

// console.log(GLOBALVAR);
// GLOBALFUNC();

const inquirer = require("inquirer");
const chalk = require("chalk");

let questions = [
  {
    type: "input",
    name: "name",
    message: "What's your first name"
  },
  {
    type: "list",
    name: "color",
    message: "What's your color",
    choices: ["red", "yellow", "green", "blue"]
  }
];

inquirer
  .prompt(questions)
  .then(answers => {
    let { color, name } = answers;
    color = color.toLowerCase();

    if (!chalk[color]) throw "Sorry I don't know that color";

    console.log(chalk.keyword(`${color}`).inverse(`Hi ${name}.`));
  })
  .catch(error => console.log(error));

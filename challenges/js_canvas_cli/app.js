"use strict";

const fs = require("fs");
const inquirer = require("inquirer");
const chalk = require("chalk");

// let contacts = { Rex: { phone: 133441173 }, Elena: { phone: 3145479439 } };
let contactsString = fs.readFileSync("contacts.txt", "utf8");
let contacts = JSON.parse(contactsString);

function menuPrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menuOption",
        message: "What do you want to do?",
        choices: [
          "view all contacts",
          "add new contact",
          "remove a contact",
          new inquirer.Separator(),
          "quit app"
        ],
        filter: function(option) {
          return option.slice(0, 3);
        }
      }
    ])
    .then(option => {
      handleOption(option.menuOption);
    })
    .catch(error => console.log(error));
}

function handleOption(menuOption) {
  switch (menuOption) {
    case "vie":
      console.log("view option");
      viewContacts(menuPrompt);
      break;
    case "add":
      console.log("add option");
      addContact(menuPrompt);
      break;
    case "rem":
      console.log("remove option");
      removeContact(menuPrompt);
      break;
    case "qui":
      console.log("quit option");
      saveToFile();
      break;
    default:
      console.log("Not sure what you mean");
      menuPrompt();
      break;
  }
}

function viewContacts(callback) {
  for (let name in contacts) {
    console.log(`${name}: ${contacts[name].phone}`);
  }
  callback();
}

const questions = [
  {
    type: "input",
    name: "name",
    message: "What's your name"
  },
  {
    type: "input",
    name: "phone",
    message: "What's your phone number",
    validate: function(value) {
      var pass = value.match(/\d{10,11}/);
      if (pass) {
        return true;
      }

      return "Please enter a valid phone number";
    }
  }
];

function addContact(callback) {
  inquirer
    .prompt(questions)
    .then(answers => {
      contacts[`${answers.name}`] = { phone: answers.phone };

      console.log(chalk.blue(`> Added ${answers.name}: ${answers.phone}`));
      callback();
    })
    .catch(error => console.log(error));
}

// TODO
function removeContact(callback) {
  let contactsArray = [];
  for (let name in contacts) {
    // console.log(`${name}: ${contacts[name].phone}`);
    contactsArray.push(name);
  }
  console.log(contactsArray);

  inquirer
    .prompt([
      {
        type: "list",
        contact: "contact",
        message: "Who would you like to remove?",
        choices: ["Bob", "Alice"]
      }
    ])
    .then(contact => {
      console.log(contact);
      // remove contacts[`${contact}`]
      callback();
    })
    .catch(error => console.log(error));
}

function saveToFile() {
  let contactsJson = JSON.stringify(contacts);
  fs.writeFile("contacts.txt", contactsJson, err => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

menuPrompt();

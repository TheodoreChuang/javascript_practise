// Challenge
// Create a new variable called user, set the value to: tom
let user = "tom";

// Write an if statement: if the user's name is tom, say 'Hello Tom'
if (user === "tom") {
  console.log("Hello Tom");
  // Add an else condition: say 'Hello someone other than Tom'
} else {
  console.log("Hello someone other than Tom");
}

// Add a new variable called age, set the value to: 18
let age = 18;

// If the user is 18, say 'welcome to the casino!'
if (age === 18) {
  console.log("welcome to the casino!");
}
// Research 'prompt'. Use it in your code to ask the user for their age.
let userAge = prompt("How old are you?");
// If the user is less than 18 years old, use the alert method to deny entry.
if (userAge < 18) {
  alert("Accessed denied, you are not old enough");
} else {
  alert("Welcome");
}

// Beast Mode
// Assign an empty array to a students variable.
students = [];
// Use the push method to add a student called Sarah
students.push("Sarah");
// Use prompt to ask the user for their name, add it to the array.
let userName = prompt("What's your name?");
students.push(userName);

// Use a loop to ask the user for 3 names, add them all to the array.
let threeNames = [];
for (let i = 0; i < 3; i++) {
  name = prompt("What's your name?");
  threeNames.push(name);
}
// Loop through the array and use the alert method to read each user back to the user.
threeNames.forEach(name => alert(name));

// Beast Mode++
// Store hashes in your students array
// Each student should have a name and age property
studentAsObject = [];
let times = prompt("How many students would you like to add to the list?");

for (let i = 0; i < times; i++) {
  let students;
  let studentName = prompt("What's your name?");
  let studentAge = prompt("How old are you?");
  studentObj = { studentName: studentName, studentAge: studentAge };
  studentAsObject.push(studentObj);
}
console.log(studentAsObject);

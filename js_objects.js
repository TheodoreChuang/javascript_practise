// Challenge
// Assign a new empty object to a variable called me
let me = {};
// On the next line, add one key 'age' and set its value to your age
me.age = 32;
// On the next line, add one key 'current location' and set its value to your current location
me["current location"] = "Sydney";
// Use console.log to display the age and current location on screen
console.log(`${me.age} ${me["current location"]}`);
// Use code to add an array of hobbies to your me object
me.hobbies = ["coding", "Bitcoin"];
// Use code to delete your age key
delete me.age;
// Iterate through me.hobbies and log each hobby to the screen
me.hobbies.forEach(hobby => console.log(hobby));

// Beast Mode
// Add another item to the end of the hobbies array
me.hobbies.push("walks");
// Delete the first item in the hobbies array
me.hobbies.shift();
// Add a mother key, set its value to an empty object
me.mother = {};
// Add name, age and location keys to the mother object
props = ["name", "age", "location"];
props.forEach(prop => (me.mother[prop] = {}));

// Add a print_details function to the me object.
me.print_details = function() {
  props = Object.keys(me);
  props.forEach(prop => console.log(`${prop}: ${me[prop]}`));
};
// Call the function to log some details about yourself. I.e. me.print_details() should work
// Note the difference between calling me.print_details and me.print_details()
me.print_details();

// Beast Mode++
const sydney_campus = { state: "NSW", street: "7 Kelly St" };
const brisbane_campus = { state: "QLD", street: "205 N Quay" };
const melbourne_campus = { state: "VIC", street: "120 Spencer St" };
const coder_academy = {
  sydney: sydney_campus,
  melbourne: melbourne_campus,
  brisbane: brisbane_campus
};
// Use console.log and interpolation to display your campus' street and state from the coder_academy object
console.log(coder_academy.sydney.street, coder_academy.sydney.state);
// If we use code to delete the state from your campus, will your log of the coder_academy object still work? I.e. did it copy each campus object or does it reference each campus object?
// Research: value vs reference (a common interview question)
delete coder_academy.sydney.state;
// State is undefined. Objects are by reference
// https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0

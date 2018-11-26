"use strict";
// -------------------------------------------------
//  Nov 19
// -------------------------------------------------
// Write a JavaScript function named objectMatches to compare two objects to determine if the first object
// contains equivalent property values to the second one.

objectMatches(
  { age: 25, hair: "long", beard: true },
  { hair: "long", beard: true }
);
//true

objectMatches(
  { hair: "long", beard: true },
  { age: 25, hair: "long", beard: true }
);
//false

objectMatches({ hair: "long", beard: true }, { hair: "short", beard: true });
//false

function objectMatches(object1, object2) {
  let doesMatch = true;

  Object.keys(object2).forEach(function(key) {
    if (object1[key] === undefined || object2[key] !== object1[key]) {
      doesMatch = false;
    }
  });

  return doesMatch;
}

// -------------------------------------------------
//  Nov 20
// -------------------------------------------------

let obj = {
  x: 5,
  y: 20,
  z: 3
};

function mult({ x, y, z = 1 }) {
  return x * y * z;
}

console.log(mult(obj)); // 300

// example 2
// No number => 0, 1 number => number, multiple numbers => multiple numbers

let obj2 = {
  // x: 5,
  // y: 2,
  // z: 3,
  a: true,
  b: "1",
  c: "hello"
  // d: 3
};

function multiAll(obj) {
  let product;

  for (let key in obj) {
    if (typeof obj[key] === "number") {
      product = product === defined ? 1 : answer;
      product *= obj[key];
    }
  }
  return product;
}

console.log(multiAll(obj2));

/* CHALLENGE 10 - Destructuring and Rest Operator

Assign values to the a, b, c variables
using destructuring and rest operator.
*/

("use strict");

var a, b, c;

var arr = [1, 2, 3, 4, 5, 6, 7];

// Write code here
// a = arr.shift();
// b = arr.shift();
// c = arr;
[a, b, ...c] = arr;

console.log(a);
// 1

console.log(b);
// 2

console.log(c);
// [3, 4, 5, 6, 7]

// -------------------------------------------------
//  Nov 21
// -------------------------------------------------

//Program three different ways to log each individual item in the array.
let myArray = ["one", 2, true, 4];

// myArray.forEach(el => console.log(`forEach: ${el}`));
// myArray.map(el => console.log(`map: ${el}`));
// (function() {
//   for (let el of myArray) {
//     console.log(`for..of..: ${el}`));
//   }
// })();

//Write a function that adds all numbers together. If any argument is not a number return false

function sumIfNums1(...args) {
  let flattenArgs = args.flat();
  let accumulator = 0;

  for (let ele of flattenArgs) {
    if (typeof ele === "number") {
      accumulator += ele;
    } else {
      accumulator = false;
      break;
    }
  }
  return accumulator;
}

function sumIfNums(...args) {
  let flattenArgs = args.flat();

  let isAllNum = flattenArgs.every(ele => {
    return typeof ele === "number";
  });

  if (isAllNum === true) {
    return flattenArgs.reduce((accumulator, current) => {
      return accumulator + current;
    });
  } else {
    return false;
  }
}

sumIfNums(1, 2, 3);

sumIfNums(["one", 2, true, 4]);

//Set 3 variables (you may call them whatever you want) to the first three elements of myArray using destructing

[a, b, c, ...d] = myArray;

//Create a object from a class named Fruit. When an object is instantiated from the class set 3 properties on the object (name, color, bites). Also have a function in the class that when called takes a bite of the fruit and decrements the bites property. If there are no bites left in the fruit log to the console “All gone!”, if there was a bite log “So yummy”.

function FruitConstructor(name, color, bites) {
  this.name = name;
  this.color = color;
  this.bites = bites;
}
FruitConstructor.prototype.takeBite = function() {
  if (this.bites >= 1) {
    console.log("So yummy");
    this.bites--;
  } else {
    console.log("All gone!");
  }
};

let mango = new FruitConstructor("mango", "orange", 4);
class Fruit {
  constructor(name, color, bites) {
    this.name = name;
    this.color = color;
    this.bites = bites;
  }
  takeBite() {
    if (this.bites >= 1) {
      console.log("So yummy");
      this.bites--;
    } else {
      console.log("All gone!");
    }
  }
}

let apple = new Fruit("apple", "green", 3);

// -------------------------------------------------
//  Nov
// -------------------------------------------------

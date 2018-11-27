"user strict";

// -------------------------------------------------
//  Nov 27 - Vanilla JS Review
// -------------------------------------------------

// Return min and max values in an array
// only numbers count
// returned as array [min, max]

// [1, 2, 3, 4, 5]
// [100, -3, -1000]
//["33", 5, 1]

function minAndMax(array) {
  let sorted = array
    .filter(function isNumber(obj) {
      return obj !== undefined && typeof obj === "number" && !isNaN(obj);
    })
    .sort(function(a, b) {
      return a - b;
    });
  return [sorted.shift(), sorted.pop()];
}

// Get every nth element in an given array
// nthElement([1,2,3,4,5,6,7,8], 3) // [3,6]
// bonus take negative index starting from end of array

function nthElement(array, nth) {
  if (nth < 0) {
    array = array.reverse();
    nth *= -1;
  }
  let nthArray = [];
  for (let i = nth - 1; i < array.length; i += nth) {
    nthArray.push(array[i]);
  }
  return nthArray;
}

// ES6 Fat arrow
// throw and error if either number is not a number
// catch that error outside of the function and log it to the console
// also throw an error for the division by 0

function divide(x, y) {
  if (typeof x !== "number" || typeof y !== "number" || y === 0)
    throw "Not a number";
  return x / y;
}

try {
  divide(7, 2);
} catch (error) {
  console.log(error);
}

// Write a function that separates a string of comma separated
// values into an array without using .split()
// withoutSplit("garret,tom, bob,one,three")

function stringToArray(string) {
  let arr = [];
  let i = 0;
  for (let j = 0; j < string.length; j++) {
    if (string[j] === ",") {
      i++;
    } else {
      arr[i] === undefined ? arr.push(string[j]) : (arr[i] += string[j]);
    }
  }
  return arr;
}

function stringToArrayRegEx(string) {
  let pattern = new RegExp(/\w[^,]*/, "g");
  return string.match(pattern);
}

stringToArrayRegEx("abcd, dan,0,30,yo");

// TODO
//Create a Runner class that has the properties, name, distance and place
//Create a method that adds distance to an instance of runner and modifies their place and the other runners places
//Create a method on the Runner class that shows the names of the runners in order from first place to last

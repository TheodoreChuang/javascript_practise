("use strict");
//
// CALLBACKS
function adder(x, y, callback) {
  let answer = x + y;

  if (callback) {
    return callback(answer);
  }

  return answer;
}

function shout(input) {
  console.log(`${input}!`);
}

function unrelated() {
  console.log("I'm just here");
}

adder(1, 2, shout); // 3!
adder(1, 2, unrelated); // answer is not defined

//
// BLOCKING EXAMPLE
function wait(ms) {
  let start = Date.now();
  let now = start;

  while (now - start < ms) {
    now = Date.now();
  }
}
// wait(5000);
// console.log("finished");

// document.getElementById("button").addEventListener("click", () => {
//   wait(2000);
//   alert("ran!");
// });

//
// NONBLOCKING, async
console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

console.log(3);
// 1, 3 ,2

//
// another async example
console.log("1");

setTimeout(function timer() {
  console.log("3");

  setTimeout(function timer() {
    console.log("5");
  }, 0);

  console.log("4");
}, 0);

console.log("2");

// http://latentflip.com/loupe/
// $.on('button', 'click', function onClick(){
//     setTimeout(function timer() {
//         console.log("clicked!");
//     },2000);
// })

//
// CALLBACK HELL
// AJAX with jquery

// document.querySelector("#button").addEventListener("click", () => {
//   $.get("https://api.chucknorris.io/jokes/random", joke1 => {
//     $.get("https://api.chucknorris.io/jokes/random", joke2 => {
//       $.get("https://api.chucknorris.io/jokes/random", joke3 => {
//         $.get("https://api.chucknorris.io/jokes/random", joke4 => {
//           $.get("https://api.chucknorris.io/jokes/random", joke5 => {
//             let jokes = [
//               joke1.value,
//               joke2.value,
//               joke3.value,
//               joke4.value,
//               joke5.value
//             ];
//             console.log(jokes);
//           });
//         });
//       });
//     });
//   });
// });

// Decomposition + Recursive Function
function compileJokes(num, callback, arry = []) {
  let url = "https://api.chucknorris.io/jokes/random";

  $.get(url, data => {
    arry.push(data.value);

    if (num === arry.length) {
      return callback(arry);
    }

    return compileJokes(num, callback, arry);
  });
}

document.querySelector("#button").addEventListener("click", () => {
  compileJokes(5, data => {
    console.log(data);
  });
});

//
// another example
function eraser(text, callback) {
  text = text.substring(0, 3);

  return callback(text);
}

function checkText(text) {
  console.log(`What happened to: ${text}`);
}

eraser("javascript is awesome", checkText);

console.log("--------Challenge--------");
// create a function that adds all arguments given (number unknown)
// then calls a callback that answer
// in the callback log the answer

function sumAll(...sumNums) {
  return sumNums.reduce((acc, cur) => acc + cur);
}
function logSomething(callback, ...args) {
  let thing = callback(...args);
  console.log(thing);
}
logSomething(sumAll, 2, 5, 9);

//
console.log("--------Challenge Beast--------");
// create a function that takes in a string and return a callback that is the reverse
// of that string, in the callback log the string, reverse it again (should be original)
// log that string
function reverseString(string, callback) {
  return callback(
    string
      .split("")
      .reverse()
      .join("")
  );
}

reverseString("coffee", string => {
  console.log(string);
  reverseString(string, string2 => {
    console.log(string2);
  });
});

//
console.log("--------Challenge Beast++--------");
// Decompose the function below
function addAndThenHalveAtSomePoint(a, b, callback) {
  setTimeout(() => {
    let answer = a + b;

    setTimeout(() => {
      answer = answer / 2;
      return callback(answer);
    }, 2000);
  }, 3000);
}

let calculation = addAndThenHalveAtSomePoint(10, 20, value => {
  console.log(value);
});

// Solution
function addNums(callback) {
  return function(a, b) {
    setTimeout(() => {
      let answer = a + b;
      return callback(answer);
    }, 1000);
  };
}

function halveNum(callback) {
  return function(num) {
    setTimeout(() => {
      let answer = num / 2;
      return callback(answer);
    }, 1000);
  };
}

function logSomething(something) {
  console.log(something);
  return something;
}

function shallowAddAndThenHalveAtSomePoint(a, b, callback) {
  addNums(halveNum(callback))(a, b);
}

shallowAddAndThenHalveAtSomePoint(4, 8, logSomething);

// // Garret's Version Shallow Code
// function addAndThenHalveAtSomepoint(a, b, callback) {
//   return addAtSomePoint(halveAtSomePoint(callback))(a, b);
// }

// function addAtSomePoint(callback) {
//   return function(a, b) {
//     setTimeout(function() {
//       let answer = a + b;

//       return callback(answer);
//     }, 1000);
//   };
// }

// function halveAtSomePoint(callback) {
//   return function(a) {
//     setTimeout(function() {
//       let answer = a / 2;

//       return callback(answer);
//     }, 1000);
//   };
// }

// addAndThenHalveAtSomepoint(10, 20, function(answer) {
//   console.log(answer);
// });

// // David Armour's Answer
// function addNum(a, b, callback) {
//   return () => {
//     let answer = a + b;
//     setTimeout(halveNum(answer, callback), 2000);
//   };
// }

// function halveNum(answer, callback) {
//   return () => {
//     answer = answer / 2;
//     return callback(answer);
//   };
// }

// function addAndThenHalveAtSomePoint(a, b, callback) {
//   setTimeout(addNum(a, b, callback), 3000);
// }

// function logAnswer(value) {
//   console.log(value);
// }

// let calculation = addAndThenHalveAtSomePoint(10, 20, logAnswer);

// Javascript Challenges

// Challenge 1
// Make a terminal script that will create a journal with a short-term memory. Weird, I know.
// Prompt a user for any content. What they did yesterday, what their favourite colour is, whatever. Store the user input in an array.
// Print out all entries in the array.
// Loop back and prompt the user for the next journal entry.
// The journal can only contain a maximum of 5 entries, but can loop forever.
let input = undefined;
let arr_foods = [];
do {
  input = prompt("What are your favorite foods?");
  if (arr_foods.length > 4) {
    arr_foods = arr_foods.slice(1);
  }
  arr_foods.push(input);
  console.log(arr_foods);
} while (input.toLowerCase() !== "exit");

// Challenge 2
// Atomic Blonde Number:
// a number is an atomic blonde number if the sum and product of its digits are equal.
// For example, 123 is an atomic blonde number, as the sum of its digits (1+2+3) is 6, which is equal to the product of its digits (1*2*3).
// Write a program to check if a number is an atomic blonde number or not.

function isAtomicBlondeNumber(num) {
  let ints = num.toString().split("");
  let sum = ints.reduce((acc, curr) => parseInt(acc) + parseInt(curr));
  let products = ints.reduce((acc, curr) => parseInt(acc) * parseInt(curr));
  return sum === products;
}
// isAtomicBlondeNumber(123);

// Challenge 3
// Pick any four digit number and do the following:
// Rearrange the string of digits to form the largest and smallest 4-digit numbers possible.
// Take these two numbers and subtract the smaller number from the larger.
// Suppose we choose the number 8082.
// 8820−0288=8532
// 8532−2358=6174
// 7641−1467=6174
// It hits 6174 and then stops.
// Count also how many iterations loops are required to get to this point.
// Bonus points for recognising what 6174 is.

// Kaprekar's Constant: 6174
function kaprekarDiff(num) {
  let ints = num
    .toString()
    .split("")
    .map(str => parseInt(str));
  bigNum = parseInt(ints.sort((a, b) => b - a).join(""));
  smallNum = parseInt(ints.sort((a, b) => a - b).join(""));
  diff = bigNum - smallNum;
  return diff;
}

function kaprekarLoop(num) {
  let diff = num;
  let previousDiff = 0;
  let counter = 0;
  do {
    previousDiff = diff; // assigns previous diff
    diff = kaprekarDiff(diff); // calc new diff
    counter++;
  } while (diff !== previousDiff);
  return counter;
}
// kaprekarLoop(8082)  // => 3
// kaprekarLoop(3141)  // => 6

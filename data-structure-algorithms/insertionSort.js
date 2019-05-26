// https://github.com/kyleshevlin/intro-to-data-structures-and-algorithms/blob/master/insertionSort/index.js

// Insertion sort is another sorting algorithm that closely resembles how we might sort items in the physical world. We start at the second item in our collection and make the assumption that this item is a sorted list of length 1. We then compare all the items before it and determine if it needs to be "inserted" to the left or right of our item. We then move onto the second item, again comparing it to every item before it in the list, inserting those items correctly.

// Because this algorithm requires two loops, one inside the other, the worst case scenario of our algorithm still requires a time complexity of O(n^2). This is also an inefficient sorting algorithm, but if our list is mostly sorted already, it will perform a slight bit better than bubble sort.

function printArray(array) {
  console.log(array.join(" "));
}

function insertionSort(array) {
  let i;
  let j;
  let count = 0;

  for (i = 1; i < array.length; i++) {
    for (j = 0; j < i; j++) {
      printArray(array);
      count++;

      if (array[i] < array[j]) {
        const [item] = array.splice(i, 1);
        array.splice(j, 0, item);
      }
    }
  }

  printArray(array);
  console.log(`Iterations: ${count}`);

  return array;
}

let numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1];

insertionSort(numbers);

exports.insertionSort = insertionSort;

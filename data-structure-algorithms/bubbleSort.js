// https://github.com/kyleshevlin/intro-to-data-structures-and-algorithms/blob/master/bubbleSort/index.js

// Bubble sort works by looping over the array many times. Each time we iterate over the array, we check if the current item is greater than the next item. If it is, we swap it in place and we indicate that we have made a swap in this loop. Then, if we've made a swap, we loop through the array again. We continue looping until we make a pass where no items have been swapped.

function bubbleSort(array) {
  let swapped = false;
  let i;
  let count = 0;

  do {
    swapped = false;

    array.forEach((item, index) => {
      printArray(array);
      count++;

      if (item > array[index + 1]) {
        const temporary = item;

        array[index] = array[index + 1];
        array[index + 1] = temporary;

        swapped = true;
      }
    });
  } while (swapped);

  printArray(array);
  console.log(`Iterations: ${count}`);

  return array;
}

function printArray(array) {
  console.log(array.join(" "));
}

let numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1];

bubbleSort(numbers);

exports.bubbleSort = bubbleSort;

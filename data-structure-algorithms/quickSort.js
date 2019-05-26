// https://github.com/kyleshevlin/intro-to-data-structures-and-algorithms/blob/master/quickSort/index.js

// Quick sort is another "divide and conquer" algorithm, calling itself recursively to sort our list. With quick sort, we pick an index of our array to be the "pivot". Every item is compared to the pivot, and pushed into a left or right array depending on that comparison. Quick sort is then called on these left and right arrays.

// This is an efficient algorithm and uses less memory than merge sort. The time complexity of quick sort is  O(n log(n)). Sorting any list requires at least one pass through the entire list, hence n, but increasing the size of our list doesn't lead to a linear or quadratic increase in operations. Each doubling in size only results in one more level of operations.

function printArray(array) {
  console.log(array.join(" "));
}

function quickSort(array) {
  printArray(array);

  if (array.length < 2) {
    return array;
  }

  const pivotIndex = array.length - 1;
  const pivot = array[pivotIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < pivotIndex; i++) {
    const item = array[i];
    item < pivot ? left.push(item) : right.push(item);
  }

  let result = [...quickSort(left), pivot, ...quickSort(right)];

  printArray(result);

  return result;
}

let numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1];

quickSort(numbers);

exports.quickSort = quickSort;

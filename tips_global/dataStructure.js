/**
 * Data Structures and Algorithms
 */

//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Bubble Sort: a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if the are in the wrong order
// ----------------------------------------------------------------------------------------
console.debug("Bubble Sort");
const bubbleSortFunction = (arrayInValue) => {
  const n = arrayInValue.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arrayInValue[j] > arrayInValue[j + 1]) {
        const temp = arrayInValue[j];
        arrayInValue[j] = arrayInValue[j + 1];
        arrayInValue[j + 1] = temp;
      }
    }
  }
  return arrayInValue;
};

console.debug(bubbleSortFunction([64, 34, 25, 12, 22, 11, 90]));

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Quick Sort: a fast sorting algorithm that uses a divide-andconquer strategy to sort elements.
// ----------------------------------------------------------------------------------------
console.debug("Quick Sort");
const quickSort = (arrayInValue) => {
  if (arrayInValue.length <= 1) return arrayInValue;

  const pivotValue = arrayInValue[0];
  const leftArray = [];
  const rightArray = [];

  for (let i = 1; i < arrayInValue.length; i++) {
    arrayInValue[i] < pivotValue
      ? leftArray.push(arrayInValue[i])
      : rightArray.push(arrayInValue[i]);
  }

  return quickSort(leftArray).concat(pivotValue, quickSort(rightArray));
};

console.debug(quickSort([64, 34, 25, 12, 22, 11, 90]));
// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Binary Search: An efficient search algorithm that finds the position of a target value within a sorted array.
// ----------------------------------------------------------------------------------------
console.debug("Binary Search");
const binarySearch = (arrIn, targetIn) => {
  let low = 0;
  let high = arrIn.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = arrIn[mid];

    if (guess === targetIn) return mid;
    if (guess > targetIn) high = mid - 1;
    else low = mid + 1;
  }

  return -1;
};

console.debug(binarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 15));
// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);
// ----------------------------------------------------------------------------------------
console.debug("Linear Search");
// ----------------------------------------------------------------------------------------
// Linear Search: a simple search algorithm that finds the position of a target value within a list.
// ----------------------------------------------------------------------------------------

const linearSearch = (arrIn, targetIn) => {
  for (let i = 0; i < arrIn.length; i++) {
    if (arrIn[i] === targetIn) return i;
  }
  return -1;
};

console.debug(linearSearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 15));

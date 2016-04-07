/*
* Shell Sort is an optimized version of Insertion Sort.
* It takes advantage of the fact that Insertion Sort is
* effecient for nearly sorted arrays by partially sorting
* elements in gaps before sorting through every element
* in the final pass.
*
* Its worst-case time complexity is O(n^2) depending on the 
* particular implementation of the "gap" sequence. An optimized
* "gap" computation would yield a performance of O(n^3/2).
*
* Note: This implementation of Shell Sort requires O(n^2) time.
*/

"use strict";

const gapInsertionSort = (array, start, gap) => {
  for (let i = start + gap; i < array.length; i += gap) {

    let currentValue = array[i],
        position = i;

    while (position >= gap && array[position-gap] > currentValue) {
      array[position] = array[position-gap];
      position = position - gap;
    }

    array[position] = currentValue;
  }
};

const shellSort = array => {
  let sublistCount = Math.floor(array.length - 1 / 2);

  while (sublistCount > 0) {

    for (let startPosition = 0; startPosition < sublistCount; startPosition++) {
      gapInsertionSort(array, startPosition, sublistCount);
    }

    sublistCount = Math.floor(sublistCount / 2);
  }
};
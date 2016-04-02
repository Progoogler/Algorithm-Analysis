/*
* Insertion Sort is an elementary sorting algorithm that
* performs particularly fast for:
*   1. Nearly sorted arrays.
*   2. Arrays of length 20 or less.
*
* It's a stable algorithm with low overhead compared
* to sorting algorithms with better worst case asymptotic
* runtime complexities such as Merge Sort or Quick Sort.
*
* Note: Due to these properties and its tight loop that
* accesses memory in increasing order only, Insertion Sort
* is often used as the recursive base case for higher
* overhead divide-and-conquer algorithms when the
* problem size is small.
* 
* Test:
* let arr = [];
* for (let n = 0; n < 100; n++) {
* 	arr.push(Math.ceil(Math.random() * 100));
* }
* insertionSort(arr);
*/
"use strict";

const insertionSort = array => {
	const swap = (a,m,n) => {
		let temp = a[m];
		a[m] = a[n];
		a[n] = temp;
	};

	let index,
	    len = array.length;

	for (let j = 1; j < len; j++) {
		if (array[j] < array[j-1]) {
			index = j;
			while (array[index] < array[index-1]) {
				swap(array, index, index-1);
				index -= 1;
			}
		}
	}
	return array;
};

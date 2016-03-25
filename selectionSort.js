/*
* Selection Sort is an exhaustive iterative approach to
* sorting an array of elements. It begins by finding the
* smallest element in the array and swapping it with the
* first index, then the second smallest with the second index,
* and so on. It's time complexity of O(n^2) makes it less
* ideal for arrays of lengths greater than 20, otherwise for
* small inputs it can be extremely fast sorting algorithm.
*
* Selection Sort is favored in terms of its write operations,
* which only utilizes O(n) times in its swap routine.
*
* Note: Selection Sort is also favored for small arrays
*  		  that are nearly sorted.
*/
"use strict";
const selectionSort = array => {
	const swap = (a,n,m) => {
		let temp = a[n];
		a[n] = a[m];
		a[m] = temp;
	};
	let smallestInt,
			index,
	    len = array.length;

  for (let i = 0; i < len-1; i++) {
  	smallestInt = array[i];
  	for (let j = i+1; j < len; j++) {
  		if (array[j] < smallestInt) {
  		  smallestInt = array[j];
  		  index = j;
  		}
  	}
  	if (smallestInt !== array[i]) swap(array, i, index);
  }
  return array;
};
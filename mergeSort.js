/*
* MergeSort is a comparison sort algorithm that recursively
* sorts halved-sized subarrays of the orginal input array
* in its 'merge' subroutine. It effectively utilizes 
* a divide-and-conquer approach to algorithm design,
* operating comparisons on 'left' and 'right' halves of
* subarrays and conjoining the smaller values first to the 'return' array.
*
* The consecutive halvings of the input array and its subsequent
* subarrays until the length of 1, as the base case, imposes 
* a logarithmic running time over the course of halving
* its operation inputs while its comparison operations in
* the 'merge' subroutine take linear time. Thus, MergeSort
* is upper bounded by O(n log n) in its worst-case performance.
*
* Note: Although the highly performant QuickSort operates in constant
* space complexity and is faster on average cases than
* MergeSort, QuickSort's worst-case bound is O(n^2). Therefore,
* in mission-critical cases where a result is absolutely 
* necessary depite space overhead and slight performance
* costs, MergeSort is more practical due to its worst-case
* performance being bounded by O(n log n) compared to O(n^2).
* 
* - However, when space is a premium, keep in mind the inapplicability
* of Moore's law to batteries and the blazing speed of QuickSort.
*
* Test case:
*
* function randomArray(num) {
* 	var result = [];
* 	for (var i = 0; i < num; i++) {
* 		result.push(Math.floor(Math.random() * 100));
* 	}
* 	return result;
* };
* var sortMe = randomArray();
* mergeSort.sort(sortMe);
*
*/
var mergeSort = (function(){

	function sort(array) {
		var left, right, mid;
		// Declare variables to store subarrays.		

		mid = Math.floor(array.length / 2);
		// Use the 'mid' index of the array/subarray to consequently
		// divide the array in half.
		left = array.slice(0, mid);
		// Store the left half in 'left' and vice versa below.
		right = array.slice(mid, array.length);
		// NOTE: Array.slice() requires linear time operations,
		// therefore a faster method should be swapped in place.
		// *****************************************************

		if (array.length < 2) {
			// When the length of the subarray reaches 1, return the array.
			return array;
		} else {
			return merge(sort(left), sort(right));;
			// Recursively sort left and right halves and 'merge' both sides.
		}

	};

	function merge(left, right) {
		var result = [], i = 0, j = 0;

		while (left.length && right.length) {
			// If both arrays have elements to compare, keep doing
			// sort comparisons.
			if (left[i] < right[j]) {
				result.push(left[i]);
				left.shift(i);
			} else {
				result.push(right[j]);
				right.shift(j);
			}
		}
		while (left.length || right.length) {
			// Push the remaining elements in either arrays into the
			// result array.
			if (left.length) {
				result.push(left[i]);
				left.shift(i);

			} else {
				result.push(right[j]);
				right.shift(j);
			}
		}

		return result;
		// Returns the 'result' to the 'merge' function call in 'sort'.
	};

	return {
		sort: sort
	}

})();

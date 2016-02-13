/* QuickSelect, RandomizedSelect, or RSelect, is a an algorithm
* that aims to compute the i'th order statistic from an unsorted array.
*
* Thus, given an array of distinct elements, quickSelect returns the
* position of the i'th sized element.
*
* The benefit of quickSelect in comparison to sorting an array via
* Mergesort or Quicksort and then accessing the i'th order at Array[i],
* is that quickSelect runs in linear time. It's an elegant factor
* hidden inside the algorithm that allows this speed of computation
* despite the 2 recursive algorithms embedded. 
*
* Test case:
* var arr;
* for (var i = 0; i < 25; i++) {
*	  arr.push(Math.random() * 100);
* }
* quickSelect.randomizedSelect(arr, 0, arr.length-1, 10);
*
* quickSelect.randomizedQuickSort(arr);
* arr[10];
*/
var quickSelect = (function() {

	function swap(array, firstIndex, secondIndex) {
		var temp = array[firstIndex];
		array[firstIndex] = array[secondIndex];
		array[secondIndex] = temp;
	}

	function random(base, limit) {
		var randomResult = Math.random() * 10;
		if (randomResult <= 4) {
		  return randomResult = base + Math.ceil((limit - base) / 2);
		} else if (randomResult > 8) {
			return 	randomResult = base + Math.ceil((limit - base) / 4);
		} else {
			return randomResult = base + Math.ceil((limit - base) / 8);
		}
	}

	function partition(array, low, high) {
		var i = low;

		for (var j = low; j < high; j++) {
			if (array[j] < array[high]) {
				swap(array, j, i);
				i++;
			}
		}
		swap(array, i, high); console.log(array)
		return i;
	}

	function randomizedQuickSort(array, low, high) {
		if (typeof low !== 'number') {
			low = 0;
		}
		if (typeof high !== 'number') {
			high = array.length-1;
		}
		if (low < high) {
			pivot = randomizedPartition(array, low, high);
			randomizedQuickSort(array, low, pivot-1);
			randomizedQuickSort(array, pivot+1, high);
		}
	}

	function randomizedSelect(array, low, high, order) {
		
		if (order > array.length) {
	  	throw "That 'order' does not exist within the array of " + array.length + " elements."
	  }

	  var pivot, count;
	  // The 'count' variable will keep track of the current
	  // order statistic depending if the 'order' is on
	  // the left or right subarray.

	  if (low === high) {
	  	// When the 'partitioning' array length is 1, return
	  	// that element as the edge case order retrieval. 
	  	return array[low];
	  }
	  pivot = partition(array, low, high); 
	  // Return the index location of the 'pivot' element.
	  count = pivot - low + 1;
	  // Compute the current order of statistic at the 'pivot'
	  // index. This computation works on the GREATER half of
	  // the pivot because of the differencing in the recursive call.
	  if (count === order) {
	  	// The saught order is found at this 'pivot' index if equality is true.
	  	return array[pivot];
	  } else if (order < count) {
	    return randomizedSelect(array, low, pivot-1, order);
	    // Recurse on left half of the array.
	  } else {
	  	return randomizedSelect(array, pivot+1, high, order - count);
	  	// Recurse on right half of the array, locating a "lesser"
	  	// order because the LESSER half of the array is the 'counted'
	  	// order, thus only the difference of indices from the new 'low' is
	  	// where the 'order' exists.
	  }
	}

	return {
		randomizedSelect: randomizedSelect,
		randomizedQuickSort: randomizedQuickSort
	}

})();
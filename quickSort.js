// Swap element at 'firstIndex' with 'secondIndex'.
var swap = function(array, firstIndex, secondIndex) {
	var temp = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
};

// Swap all elements less than the pivot to the left
// of the pivot and all elements greater than the pivot
// to the right. Pivot gets swapped last from the 'high'
// position into its correct position after the loop.
var partition = function(array, low, high) {
	// Var 'i' points to the border between all elements
	// less than and greater than the pivot.
	var i = low
	    , j = low
	    // The 'pivot' variable is the middle index between high and low.
	    , pivot = low + Math.ceil((high - low) / 2);

	// Swap the 'pivot' element into the 'high' index position to the right.
	swap(array, pivot, high);

	while (j < high) {

		if (array[j] < array[high]) {
			// Swap elements at 'j' index with 'i' when elements less than 
			// the pivot are found, shifting all elements less than pivot to
			// the left of the subarray. 
			swap(array, i, j);
			i++;
		}
		j++;
	}
	// Swap the pivot with 'i' so that all elements
	// less than it are to the left of the 'pivot' and all elements
	// greater than the 'pivot' are to the right.
	swap(array, i, high);
	// Return the index value of 'i' to the recursive call.
	return i;
};

// Sort all elements of an array in place without a new array.
// Quicksort's wort-case running time is 0(n^2) though its
// average running time is O(n logn). It is preferred over
// mergeSort because of the small constants in space complexity.
// Note : Sorts the order of the original array reference
// therefore it returns undefined. 
var quickSort = function(array, low, high) {

	if (typeof low !== 'number') {
		low = 0;
	}
  // Cases for missing arguments on initial sort call.
	if (typeof high !== 'number') {
		high = array.length - 1;
	}

	if (low < high) {
    // Store the return value of 'i' from partition which holds
    // the pivot index and recurse on the left and right sides
    // of the 'pivot'.
		var pivot = partition(array, low, high);
		quickSort(array, low, pivot-1);
		quickSort(array, pivot+1, high);

	} else {
		return;
	}

};


// Test case.
var arr;
for (var n = 0; n < 20; n++) {
	arr.push(Math.ceil(Math.random() * 100));
}
quickSort(arr);
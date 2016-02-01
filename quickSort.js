// Swap element at 'firstIndex' with 'secondIndex'.
var swap = function(array, firstIndex, secondIndex) {
	var temp = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
};

// Assign a random pivot to array lengths greater than 100
// otherwise use the middle element despite any possbile event 
// of worst-case running time.
var randomPivot = function(array) {
	if (array.length < 100) {
		return array.indexOf(array[Math.ceil(array.length / 2)]);
	}
	var random = [];
	var num = Math.ceil(Math.random() * 10);
	random.push(array[Math.ceil(array.length / num)]);
	random.push(array[array.length - (Math.ceil(array.length / num))]);
	random.push(array[Math.ceil(array.length / num) + Math.ceil(array.length / num)]);
	random.sort(function(a,b) {
		return a+b;
	});
	// Return the median of the 3 randomly chosen elements' index.
	return array.indexOf(random[1]);
};

// Swap all elements less than the pivot to the left
// of the pivot and all elements greater than the pivot
// to the right. Pivot gets swapped last from the array.length - 1
// position after each loop.
var partition = function(array, low, high) {
	// Var 'i' points to the border between all elements
	// less than and greater than the pivot.
	var i = low
	, j = low
	, pivot = randomPivot(array);
	swap(array, pivot, high)

	// Loop through array or subarray
	while (j < high) {

		if (array[j] <= array[high]) {
			// When current element is less than pivot,
			// swap it with the pointer "i".
			swap(array, i, j);
			// Increment 'i' to point at the next
			// element greater than the pivot 
			i++;
		}
		j++;
	}
	// Swap the pivot with 'i' so that all elements
	// less than it are to the left and all elements
	// greater than it are to the right.
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
	if (low < high) {
		var key = partition(array, low, high);
		quickSort(array, low, key-1);
		quickSort(array, key+1, high);
	} else {
		return;
	}
};

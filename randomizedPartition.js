// Random selection of an index value between the 'base' and 'limit'
// parameters based on the output of a Math.random() number.
var random = function(base, limit) {
	var randomResult = Math.random() * 10;
	if (randomResult <= 4) {
		// The caveat of this random index generator is that either
		// the 'base' or 'limit' must change, such as during recursive calls. 
	  return randomResult = base + Math.ceil((limit - base) / 2);
	} else if (randomResult > 8) {
		return 	randomResult = base + Math.ceil((limit - base) / 4);
	} else {
		return randomResult = base + Math.ceil((limit - base) / 8);
	}
};

var swap = function(array, firstIndex, secondIndex) {
	var temp = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
};

var partition = function(array, low, high) {
	var i = low;

	for (var j = low; j < high; j++) {
		if (array[j] < array[high]) {
			swap(array, j, i);
			i++;
		}
	}
	swap(array, i, high);
	return i;
};

// The randomizedPartition is really the key difference in
// randomizedQuickSort. It fluctuates the index of the 'pivot'
// on each recursive call so that good expected performance
// of the sorting algorithm is likely over all inputs.
var randomizedPartition = function(array, low, high) {
  var pivot = random(low, high);
  swap(array, pivot, high);
  return partition(array, low, high);
};

// Randomized Quicksort is regarded as the de facto standard
// for all large inputs of unsorted arrays. Its *average* run-time
// performance being bounded within 0(nlogn) and a constant
// bound of memory usage due to sorting in place, makes Quicksort
// preferable to the predecessor, Mergesort. Especially when
// a good randomization algorithm is involved.
var randomizedQuickSort = function(array, low, high) {
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
};

// Give it a test run!
var arr;
for (var i = 0; i < 100; i++) {
	arr.push(Math.ceil(Math.random() * 100));
}
randomizedQuickSort(arr);
console.log(arr);
// The binary search algorithm effectively searches for a single 
// element in a sorted numeric or alphabetic array in O(log n) time.
// Its upper bound on a logarithmic scale is confirmed by its
// halving of each length of inputs on every recursive call.

var binarySearch = function(array, target, beg, end) {

  // Set the parameter value of 'beg' on recursive calls
  // otherwise set its value to 0 if undefined.
  beg = beg || 0;

  // Similar to above pattern without explicitly
  // stating that 'end' might equal a new value.
  if (end === undefined) {
  	end = array.length-1;
  }

  // Use the index values of 'beg' and 'end' to
  // find the middle index in the current array.
  var mid = beg + Math.floor((end - beg) / 2);
  var num = array[mid];

  // Base case: return the index of the 'target'
  // when it matches the 'num' element.
  if (target === num) {
	return mid;
	
	} else if (beg >= end) {
		// If the beginning index becomes greater than
		// the end value, the 'target' element is either
	  // not found or array may not be sorted.
    return -1
            
	} else if (target > num) {
	    // Recursively search right half of the array
	    // starting from the middle of the right half.
	    return binarySearch(array, target, mid+1, end);
	    
	} else {
	    // Recursively search left half of the array
	    // starting the middle of the left half.
		return binarySearch(array, target, beg, mid-1);	
	};
}

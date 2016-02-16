/*
* The omega bound of comparison sorts such as Quick Sort
* and Merge Sort are Ω(n log n), and from the applicability
* of those types of sorts on certain data structures such
* as linked-lists for Merge Sort or low memory overhead
* costs for Quick Sort, makes them highly useful and quite
* fast enough for sorting large inputs. 
*
* However, outside of comparison sorting, there are even
* faster sorting algorithms, one namely Count Sort, that
* boasts an impressive running-time of O(n)!
* 
* Despite its space overhead and multiple for-loop
* iterations with miniscule amounts of operations in each loop
* keeping constants at bare minimums, Count Sort runs in
* linear time with its single-loop variant operations.
*
*
* var randomArray = function(num) {
*   var result = [];	
*	  for (var n = 0; n < num; n++) {
*	    result.push(Math.ceil(Math.random() * num));
*   }
*   return result;
* };
* var arr = randomArray(100);
* countSort.sort(arr);
*/
var countSort = (function(){
  
  function sort(array) {
  	// An 'aux' array is used to keep count of registered numbers 
  	// and their subsequent recurrences in the input 'array'.
    var aux = [],
        result = [],
        max = array[0];

    // Find the maximum number in 'array'.
    for (var i = 1; i < array.length; i++) {
    	// This function breaks the rule of absolutely no comparisons
    	// by comparing 'length' elements to find the largest number, 'max'.
    	// This step can be circumvented by adding an additional argument 'max'
    	// to sort(array, max), but that requires knowing the maximum value without
    	// first sorting the array, which may not always be readily available.
      if (max < array[i]) {
      	max = array[i];
      }
    }

    // Initialize every index in 'aux' up to 'max' as 0.
    for (i = 0; i <= max; i++) {
    	aux[i] = 0;
    }

    // Every time a number in 'array' is traversed, add one to
    // its index location in 'aux'.
    for (i = 0; i < array.length; i++) {
    	aux[array[i]] = aux[array[i]] + 1;
    }

    // Start from zero up to the 'max' indice in 'aux'.
    for (i = 0; i < aux.length; i++) {
    	// When a position in 'aux' contains a number greater than zero,
    	// its number is the number of repititions in the input 'array'.
    	while (aux[i] > 0) {
    		result.push(i);
    		aux[i] -= 1;
    	}
    }

    return result;
  }

  return {
  	sort: sort
  };

})();
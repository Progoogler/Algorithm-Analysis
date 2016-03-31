/*
* Interpolation Search is an alternative to Binary Search.
* It performs faster under certain conditions, namely:
*   1. There is a uniform distribution of the data
*      i.e., [1,3,5] not [1,300,5000].
*   2. Performant on sorted but unindexed on-disk datasets.
*
* If the above conditions are met, Interpolation Search
* is lower bounded by o(log log n) and upper bounded by O(n).
*
* The trade-off between using this and not Binary Search is
* the above condition #1, more comparisons, a tricky 
* computation for finding 'mid', and the possibility of
* linear time rather than a guaranteed upper bound of O(log n).
*/

"use strict";

const interpolationSearch = (array, key) => {
  let len = array.length,
      low = 0,
      high = len - 1,
      mid;

  while (array[high] !== array[low] && key >= array[low] && key <= array[high]) {

    mid = low + ((key - array[low]) * (high - low) / (array[high] - array[low]));

    if (array[mid] < key) {
      low = mid + 1;
    } else if (key < array[mid]) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  if (key === array[low]) {
    return low;
  } else {
    return -1;
  }
};
/**
* Write a JavaScript function to apply Bubble Sort algorithm. Go to the editor 
* Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, 
* is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, 
* comparing each pair of adjacent items and swapping them if they are in the wrong order". 
*
* Sample array : [345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 200]
*
* Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
*/
"use strict"

// Recursive solution -- space and time expensive
let bubbleSort = (array, index) => {
  index = index || 0;
  
  if (index === array.length - 1) {
    return array;
  }

  for (let i = 0; i < array.length; i += 1) {
    //traverse array, comparing numbers next to each other
    if (array[i] > array[i + 1]) {
        //shift larger number to the left of the array in descending order
        swap(array, i, i+1);
        return bubbleSort(array, i);
        //recurse function passing in value of i as 'index'
    } else if (array[i] === array[array.length - 1]) {
        return array;
    }
  }
};

let test = [345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 200];
bubbleSort(test);


// Solution without recursion.
// O(n^2) with unpredictable coefficients.
let bubbleSort = array => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i + 1]) {
      swap(array, i, i+1);
      i = -1;
    }
  }

  return array;
};

let test = [345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 200];
bubbleSort(test);


// Nested for-loop -- most optimal solution.
// Run time is O(n^2) and blazingly fast for all 
// inputs less than 10!
let bubbleSort = array => {
  let swapped;
  for (let i = array.length; i > 0; i--) {
    swapped = false;
    for (let j = 0; j < i; j++) {
      if (array[j] < array[j+1]) {
        swap(array, j, j+1);
        swapped = true;
      }
    }
    // Optimization -- return if inner loop does not swap an element
    if (!swapped) return;
  }
  
  return array;
};

function swap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

let test = [345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 200];
bubbleSort(test);

// W3Resource solution:
function bubble_Sort(a)
{
  var swapp;
  var n = a.length-1;
  var j = 0;
  var x=a;
  do {
      swapp = false;
      for (var i=0; i < n; i++)
      {
          if (x[i] < x[i+1])
          {
             var temp = x[i];
             x[i] = x[i+1];
             x[i+1] = temp;
             swapp = true;
          }
      }
      n--;
  } while (swapp);
return x; 
}

console.log(bubble_Sort([345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 200]));

/*
* The Sieve of Eratosthenes, created by Eratosthenes of Cyrene,
* a Greek mathematician whose sieve was survived in the works
* of Nicomachus who attributed its authorship to Eratosthenes,
* is an algorithm for finding all prime numbers between 1 and 'n'.
*
* The complexity of this algorithm is O(n(logn)(loglogn)) with a space
* complexity of O(n). For example, computing all primes under 2,000,000
* requires >500ms. If a faster algorithm is desired, the Seive of Atkins
* would be preferable, or if a slower yet more space effecient algorithm
* is preferred, the Seive of Sorenson would be used.
*/

var primeSieve = function(n) {
	"use strict"; console.time("wow")
  let bools = [];

  for (let i = 2; i <= n; i++) bools.push(true);

  for (let i = 2; i < Math.sqrt(n); i++) {
  	// For index values which remain true in the set of 'bools'
  	// after the while loops (below) -- those are primes.
  	if (bools[i] === true) {
  		// 'i' is a prime number.
  		let j = i*i,
  		    x = 1;
  		bools[j] = false;
  		while (j <= n) {
  			// Set every multiple of 'i' to false.
  			j = i * i + x * i;
        bools[j] = false;
        x++;
  		}
  	}
  } 
  let primes = [];
  for (let i = 2; i <= n; i++) {
  	if (bools[i] === true) primes.push(i);
  } console.timeEnd("wow")

  return primes;
};


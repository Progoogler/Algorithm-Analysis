/*
* Considered one of computer science's greatest hits,
* Dijkstra's Shortest Path algorithm, developed by
* Edsger Dijkstra in 1956, performs a linear graph search
* similar to Breadth First Search except instead of
* compiling unit edge weights, it compiles non-negative
* edge weights.
*
* The algorithm's output is an elegantly devised
* summation of traveling costs from a 'source' vertex
* to every subsequent connected vertice in the graph;
* known as a shortest path tree (spt).
*
* The running-time of Dijkstra's algorithm is 
* upper-bounded by O(V^2), where V is the number of nodes.
* This is due to the nested for-loops in the graph traversal,
* which can be circumvented by utilizing a Fibonacci Heap
* for obtaining minimum edge values. The following
* version of Dijkstra's Shortest Path algorithm
* does not utilize a heap data structure, therefore,
* it will run in O(V^2) rather than the most efficient
* single-source shortest path algorithm bound of O(E + V log V).
*
*
* var graph = [
* [0, 6, 1, 0, 0, 1, 0, 0, 9,  0],
* [6, 0, 0, 3, 0, 0, 0, 7,  0, 0],
* [0, 1, 0, 7, 0, 4, 0, 0,  2, 0],
* [0, 3, 7, 0, 9, 0, 100, 0, 0,0],
* [0, 0, 0, 9, 0, 10, 0, 5, 9, 0],
* [1, 0, 4, 0, 10, 0, 2, 0, 0, 8],
* [0, 0, 0, 100, 0, 2, 0, 9, 6,0],
* [0, 7, 0, 0, 5, 0, 9, 0,  7, 0],
* [9, 0, 2, 0, 9, 0, 6, 7,  0,11],
* [0, 0, 0, 0, 0, 8, 0, 0, 11, 0]
* ];
* 
* dijkstras.shortestPath(graph, 0);
*
*/
var dijkstras = (function() {

  // Helper function for finding the vertex with
  // the shortest distance not yet discovered.
	function minDistance(distance, sptSet) {
		// Initial comparison for minimum distance value in 'distance' set.
    var min = Number.POSITIVE_INFINITY,
        minIndex = -1;

    for (var v = 0; v < distance.length; v++) {
    	// Retrieve the vertex that has not been discovered yet whose
    	// distance value is the lowest of all other undiscovered vertices.
      if (sptSet[v] === false && distance[v] <= min) {
      	min = distance[v];
      	// Save the vertex index 'v' for traversal.
      	minIndex = v;
      }
    }
    // Return the vertex 'v' with minimum distance value.
    return minIndex;
	}

  function shortestPath(graph, src) {
  	// 'sptSet' = shortest path tree set, is a boolean array that keeps track
  	// of whether vertices have been discovered yet or not.
    var sptSet = [],
        // 'dist' = distance, is an array for storing the minimum distance
        // values from the vertex, dist[vertex] to 'src'.
        dist = [];

  // A helper function for determining whether the current path to 'v' is greater
  // than the known path to 'u' + the newly discovered edge between (u,v). 
	function relax(u, v) {
	  if (dist[v] > dist[u] + graph[u][v]) {
	  	// Update the shortest path to 'v' if the known path to 'u' + (u,v)
	  	// is less than the currently shortest path to 'v'.
	    dist[v] = dist[u] + graph[u][v];
	    }
		}

    // Set all vertices in both arrays to their initial values.
    for (var i = 0; i < graph.length; i++) {
    	sptSet[i] = false;
    	dist[i] = Number.POSITIVE_INFINITY;
    }
    // The distance from 'src' to itself is 0.
    dist[src] = 0;

    // Traverse the graph.
    for (var count = 0; count < graph.length - 1; count++) {
    	// On each loop, obtain the vertex with the shortest distance value
    	// that has not already been discovered.
      var currentVertex = minDistance(dist, sptSet);
      // Set the vertex boolean value to true after discovery.
      sptSet[currentVertex] = true;

      // Traverse the vertex.
      for (var v = 0; v < graph.length; v++) {
      	// Only 'relax' vertices that have not been discovered, whose
      	// edge values are greater than 0, and whose distance is 
      	// not still labeled infinity.
      	if (!sptSet[v] && graph[currentVertex][v] !== 0 &&
      		dist[currentVertex] !== Number.POSITIVE_INFINITY) {
      		// Check if the shortest path distance of 'v' needs to be updated
          // with the new path of dist[currentVertex] + edge between (currentVertex, v).
      		relax(currentVertex, v);
      	}
      }
    }

    printDistances(dist);
    return dist;
  }

  // A pretty print output of the shortest paths.
  function printDistances(distance) {
  	console.log("Vertex", "----", "Distance from Source")
    for (var i = 0; i < distance.length; i++) {
      console.log(i + " --------- " + distance[i]);
    }
  }

  return {
  	shortestPath: shortestPath
  };

})();
// Recursive Depth First Search solution.
// Both the recursive and iterative solutions 
// are bounded by the constants m and n where
// m = the number of edges in the graph and
// n = the number of vertices. They are both O(m + n).
var DFS = function(graph, source) {
	// Initialize an array for each corresponding
	// element in the graph at given indices. 
	var DFSlog = [];

	for (var i = 0; i < graph.length; i++) {
		// At each corresponding index add an object
		// with the following properties.
		DFSlog[i] = {
			discovered: false,			
			vertex: null
		};
	}
	// Set the root source vertex as already discovered.
	DFSlog[source].discovered = true;
	DFSlog[source].vertex = 'root';

	// Declare recursive function passing in the same
	// parameters as the outer function with the
	// source argument updating on each recursive call.
	var doDFS = function(graph, source) {
	
		// For every vertex connected to the current vertex,
		// perform the following operations on vertices 
		// not already discovered.
		for (var j = 0; j < graph[source].length; j++) {
			var neighborVertex = graph[source][j];
			// If vertex has not been discovered before, 
			// look at its edges in the recursive call.
			if (DFSlog[neighborVertex].discovered === false) {
				DFSlog[neighborVertex].discovered = true;				
				DFSlog[neighborVertex].vertex = neighborVertex;
				// Recurse on this vertex and any other vertex
				// that remains undiscovered until it exhausts the graph.
				doDFS(graph, neighborVertex);
			}
		}
	};
	// Call the recursive funtion on the graph
	// passing in the original source argument.
	doDFS(graph, source);
	// Return an array with every vertice which
	// has an edge connecting back to the source
	// with the discover property of true.
	return DFSlog;
}; 

// Utilize a stack to iterate over each neighbor's
// vertex without backtracking by applying'LIFO'. 
var Stack = function() {
	this.stack = [];
};

Stack.prototype.push = function(obj) {
	this.stack.push(obj);
};

Stack.prototype.pop = function() {
	return this.stack.pop();
};

Stack.prototype.isEmpty = function() {
	return this.stack.length === 0;
};

// Iterative Depth First Search runs in an equivalent
// amount of time for same values of m and n.
// It can be noted that because we are dealing with
// constants, that the lower order constant can be
// dropped leaving a run time of O(Max(m, n)), or
// if |m| > |n| then it is 0(m) else vice versa.
var iterativeDFS = function(graph, source) {
	var DFSlog = [];

	for (var i = 0; i < graph.length; i++) {
		DFSlog[i] = {
			discovered: false,			
			vertex: null
		};
	}

	var stack = new Stack();
	stack.push(source);

	while (!stack.isEmpty()) {
		// Visit the next edge of each adjacent vertice
		// until no other vertex can be reached, then backtrack
		// through the vertices skipped over.
		var currentVertex = stack.pop();
		if (DFSlog[currentVertex].discovered === false) {
			DFSlog[currentVertex].discovered = true;
			DFSlog[currentVertex].vertex = currentVertex;
			// Stack each neighboring vertex from the edges of the currentVertex.
			for (var j = 0; j < graph[currentVertex].length; j++) {
				var neighborVertex = graph[currentVertex][j];
				stack.push(neighborVertex);
			}
		}
	}

	return DFSlog;
};

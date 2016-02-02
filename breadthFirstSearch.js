// BFS utilizes a queue to traverse down the graph elements,
// accessing only neighboring elements first by its 'FIFO' implementation.
var Queue = function() {
	this.queue = [];
};

Queue.prototype.enqueue = function(obj) {
	this.queue.push(obj);
};

Queue.prototype.dequeue = function() {
	return this.queue.shift();
};

Queue.prototype.isEmpty = function() {
	return this.queue.length === 0;
};

// BFS takes two arguments, graph and source where graph is
// an array of directed or undirected chain of arrays
// that relate to each other by each individual arrays' elements.
// The running time of BFS is O(m + n) where m is the number of 
// edges (pointers connecting vertices in the graph) and n is
// the number of vertices (individual vertex points).
var doBFS = function(graph, source) {
	// BFSlog stores information about each vertex in the graph array.
	var BFSlog = [];

	// Instantiate the queue and enqueue the beginning point of the search
	// from the source argument.
	var queue = new Queue();
	queue.enqueue(source);

	// For every index in the graph array, plot a similar index
	// in BFSlog that corresponds to the element at either indices.
	// Each vertex in the graph therefore has a distance property
	// (the distance of edges between itself and the source)
	// and a predecessor property (the vertex that points to
	// this neighboring vertex).
	for (var i = 0; i < graph.length; i++) {
		BFSlog[i] = {
			distance: null,
			predecessor: null
		};
	}
	// Log the source index correspondingly in the BFSlog
	// setting its distance property to 0.
	// Note that source does not have any predecessors,
	// so its predecessor value is null.
	BFSlog[source].distance = 0;

	// While there are vertices in the graph array that
	// remain unsearched, find all the vertices that have edges
	// which remotely link back to the source and count its
	// distance from the source and keep track of its
	// predecessor vertex.
	while (!queue.isEmpty()) {
		// Assign the vertex to be operated on in the loop.
		var currentVertex = queue.dequeue();

		// Each vertex that is linked to the source has vertices
		// within its array that point to other vertices. Therefore,
		// find all neighboring vertices within the 'currentVertex'.
		for (var j = 0; j < graph[currentVertex].length; j++) {
			var neighborVertex = graph[currentVertex][j];

			// If neighboring vertex already has a distance value then
			// it already has been visited by a preceding vertex and knows how far
			// it is away from the source vertex following its predecessor.
			if (BFSlog[neighborVertex].distance === null) {

				// Increment its distance with the current distance.			
				BFSlog[neighborVertex].distance = BFSlog[currentVertex].distance + 1;

				// Set its predecessor value to the 'currentVertex'.
				BFSlog[neighborVertex].predecessor = currentVertex;

				// Push the neighboring vertex to the back of the queue 
				// where its vertices will be traversed after the neighboring
				// vertices of the 'currentVertex' have been logged.
				queue.enqueue(neighborVertex);
			}
		}
	}
	// Return the BFSlog with the information of all the vertices
	// so that the shortest-path to each vertex from the source
	// can be evaluated by their distance property.
	return BFSlog;
};

// Short-functional linked list for displaying topological results.
var LinkedList = function() {
    this.head = null;
    this.tail = null;
  }

  LinkedList.prototype.node = function() {
    return {
      data: null,
      next: null
    };
  };

  LinkedList.prototype.insertAsFirst = function(value) {
    var node = this.node();
    node.next = this.head;
    this.head = node;
    node.data = value;
  };

var DFS = function(graph, source) {
	var TIMESTAMP = 0;
	// Global/shared variable to keep track of when a vertex
	// was first discovered and when it was finished traversing
	// its edges.
	var DFSlog = [];
	var topologicalList = new LinkedList();

	for (var i = 0; i < graph.length; i++) {
		DFSlog[i] = {
			color: 'white',
			predecessor: null,
		};
	}

	var doDFS = function(graph, source) {
		TIMESTAMP += 1;
		DFSlog[source].startTime = TIMESTAMP;
		DFSlog[source].color = 'gray';
		for (var j = 0; j < graph[source].length; j++) {
			var neighborVertex = graph[source][j]; 
			if (DFSlog[neighborVertex].color === 'white') {				
				DFSlog[neighborVertex].predecessor = source;
				doDFS(graph, neighborVertex);
			}
			DFSlog[source].color = 'black'; console.log(source)
			TIMESTAMP += 1;
			DFSlog[source].finishingTime = TIMESTAMP;
		}
		if (DFSlog[source].color === 'black') {
			topologicalList.insertAsFirst(source);
		// After source has returned from traversing its edges,
		// add it to the topological list so it reads from 
		// top to bottom, or first vertex to last vertex.
		}
	};

	for (var m = 0; m < graph.length; m++) {
		if (DFSlog[m].color === 'white') {
			doDFS(graph, m);
		}
	}

	return topologicalList; 
};

var adjList = [
    [1],
    [0, 4, 5],
    [3, 4, 5],
    [2, 6],
    [1, 2],
    [1, 2, 6],
    [3, 5],
    []
];

DFS(adjList, 0);
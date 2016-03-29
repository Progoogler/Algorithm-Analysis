/*
* The Bellman Ford algorithm finds the shortest path
* between all acyclic vertices from the source vertex.
* It differs from the famous Djikstra's shortest path
* algorithm by evaluating negative weight edges as well.
*
* Both algorithms share similarities in memory management
* and processes of 'relaxing' the computed shortest path
* with shorter paths found from other vertices. Despite
* its similarities, Bellman Ford's algorithm runs in
* O(VE) whereas Djikstra's runs in O(V log E).
*
* The trade-off of this slower performance is its increased
* application in computing various graphs that contain
* negative weights and its better applicability in
* computing shortest distances in distributed systems.
*/
"use strict";

class Graph {
  constructor(vertices, edges) {
    this.V = vertices;
    this.E = edges;
    this.edge = [];
  }
  addEdge(src, dest, weight) {
    this.edge.push({
      src: src,
      dest: dest,
      weight: weight
    });
    if (this.edge.length > this.E) {
      this.E += 1;
      console.log("Graph contains", this.V, "vertices and", this.E, "edges.");
    }
  }
  BellmanFord(graph, source) {

    let dist = [];
    for (let i = 0; i < graph.V; i++) {
      dist.push(Number.POSITIVE_INFINITY);
    } console.log(dist)
    dist[source] = 0;

    for (let i = 1; i < graph.V; i++) {

      for (let j = 0; j < graph.E; j++) {
        let u = graph.edge[j].src,
            v = graph.edge[j].dest,
            w = graph.edge[j].weight;

        if (dist[u] !== Number.POSITIVE_INFINITY &&
          dist[u] + w < dist[v]) {
          dist[v] = dist[u] + w;
        }
      }
    }

    for (let j = 0; j < graph.E; j++) {
      let u = graph.edge[j].src,
          v = graph.edge[j].dest,
          w = graph.edge[j].weight;

      if (dist[u] !== Number.POSITIVE_INFINITY &&
        dist[u] + w < dist[v]) {
        console.log("Graph contains negative weight cycle.")
      }    
    }

    return dist;
  }
}

// Test:
let graph = new Graph(5,8);
graph.addEdge(0,1,-1);
graph.addEdge(0,2,4);
graph.addEdge(1,2,3);
graph.addEdge(1,3,2);
graph.addEdge(1,4,2);
graph.addEdge(3,2,5);
graph.addEdge(3,1,1);
graph.addEdge(4,3,-3);

graph.BellmanFord(graph, 0)

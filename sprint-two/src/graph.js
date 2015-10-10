

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.storage = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this...
  var Node = function(node) {
    var newNode = {};
    newNode.value = node;
    newNode.edges = [];
    return newNode;
  };
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  var result = false;
  if ( this.node ) {
    result = true;
  }
  return result;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  delete this.node;
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
// does fromNode and toNode have an edge?  check if the key value association exists? how do you do thta?
  var result = false;
  if ( fromNode.edge === toNode.edge ) {
    result = true;
  } 
  return result; 
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  fromNode.edges.push(toNode);
  toNode.edges.push(fromNodes);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */




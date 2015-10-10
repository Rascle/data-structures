

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.storage = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.storage.push(Node(node));
  
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  var result = false;
  if ( this.storage[0] ) {
    result = true;
  }
  return result;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  delete this.storage[0];
  // also need to call removeEdge method eventually
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
// does fromNode and toNode have an edge?  check if the key value association exists? how do you do thta?
  var result = false;
  var to;
  var from;
  //check each node's edges
    //if the node's edges array contains fromNode
      //to = the nodes value
    //if the node's edges array contains toNode
      //from = the nodes value
  //if to === from result is true
  _.each(this.storage, function(node) {
    if (_.contains(node.edges, fromNode)) {
      from = node.value;
    }
    if (_.contains(node.edges, toNode)) {
      to = node.value;
    }
  });

  if ( to === fromNode && from === toNode) {
    result = true;
  } 
  return result; 
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){  
  //find nodes with the values "fronNode" and "toNode"
  //set push fromNodes value to toNodes edges and vice versa
  _.each(this.storage, function(node){
    if (node.value === fromNode) {
      node.edges.push(toNode);
    } 
    if (node.value === toNode) {
      node.edges.push(fromNode);
    }
  });

  // _.each(this.storage, function(node){
  //   if (node.value === toNode) {
      
  //   }
  // });

  
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
    _.each(this.storage, function(node){
        if (node.value === fromNode) {
          node.edges.splice(toNode);
        } 
        if (node.value === toNode) {
          node.edges.splice(fromNode);
        }
    });
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  // var args = Array.prototype.call(arguments);
  _.each(this.storage, function(node) {
    // _.each(args, function(arg) {
      cb(node.value, "satsumas");
    // });
  });
};

var Node = function(node) {
  var newNode = {};
  newNode.value = node;
  newNode.edges = [];
  return newNode;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



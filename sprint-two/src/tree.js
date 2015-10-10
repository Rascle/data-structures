var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me ...  property, an array containing a number of subtrees
  _.extend(newTree, treeMethods);
  return newTree;
}


//Each new node is actually an new instantiation of Tree(value);


var treeMethods = {};

//takes any value, sets that as the target of a node, and adds that node as a child of the tree
//whenever we create a new child of the Tree class, every node needs have access to the addChild method
treeMethods.addChild = function(value){
  // var node = {};
  // node.value = value;  // value: 5
  this.children.push(Tree(value));  // {value: 5}
};

//takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
treeMethods.contains = function(target){  
  var result = false;
  if ( this.children[0].value === target ) {
    result = true;
  }
  return result;
  //we already added one node with the value of 5, where is it? INSIDE "node" object, its node.value
  //how do we make this function return true when you pass in the target of 5 to contains?

};


/*
 * Complexity: What is the time complexity of the above functions?
 */

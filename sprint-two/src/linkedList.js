var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.head === null) { 
      list.head = Node(value);
      list.tail = list.head;
    } else if (list.tail === list.head) {
      list.head.next = Node(value);
      list.tail = list.head.next;
    } else {
      // var newNode = Node(value) having a variable for newNode at beginnning of function
      list.tail.next = Node(value);
      list.tail = tail.next.next;
    }
  };

  list.removeHead = function(){
    var prevHead = list.head;
    // delete list.head;
    list.head = list.tail;
    return prevHead.value;
  };

  list.contains = function(target){
    var result = false; 
    _.each(list, function(node) {
      if (node.value === target) {
        result = true;
      }
    });
    return result;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

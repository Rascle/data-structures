var Queue = function(){
  var someInstance = {};
  var num = 0;
  var frontNum = 0; 

  // Use an object with frontNumeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[num] = value;
    num++;
  };

  someInstance.dequeue = function(){
    if ( num > frontNum ) {  
      //store storage[frontNum] in variable
      var dequeued = storage[frontNum];
      delete storage[frontNum];
      frontNum++;
      return dequeued;
    }
  };

  someInstance.size = function(){
    return num - frontNum;
  };

  return someInstance;
};

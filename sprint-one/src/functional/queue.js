var Queue = function(){
  var someInstance = {};
  var num = 0;
  var frontNum = 1; 

  // Use an object with frontNumeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    num++;
    storage[num] = value;
  };

  someInstance.dequeue = function(){
    if ( someInstance.size() > 0 ) {  //does this need to change?
      //store storage[frontNum] in variable
      var dequeued = storage[frontNum];
      frontNum++;
      delete storage[frontNum];
      
    }
  };

  someInstance.size = function(){
    return num - frontNum;
  };

  return someInstance;
};

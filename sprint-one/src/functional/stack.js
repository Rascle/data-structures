var Stack = function(){
  var someInstance = {};
  var num = 0;
  
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[num] = value;
    num++;
  };

  someInstance.pop = function(){
    if (num > 0) {
      var popped = storage[num]; 
      conosle.log(storage[num]);
      delete storage[num];
      num--;
      return popped;
    }
  };

  someInstance.size = function(){
    return num;
  };

  return someInstance;
};

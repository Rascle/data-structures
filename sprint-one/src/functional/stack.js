var Stack = function(){
  var someInstance = {};
  var num = 0;
  
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage.num = value;
    num++;
    console.log(storage.num);
  };

  someInstance.pop = function(){
    if (num > 0) {
      // Store storage.num key in new popped variable
      var popped = storage.num;

      // Remove storage[num] from storage
      delete storage.num;

      // Decrement num variable
      num--;

      // Then return value
      return popped;
    }
  };

  someInstance.size = function(){
    return num;
  };

  return someInstance;
};

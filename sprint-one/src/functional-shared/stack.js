var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.num = 0;
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  //This is a method container - all instances share these methods through the extend function
};

stackMethods.push = function (value) {
  this.num++;
  this.storage[this.num] = value;
}

stackMethods.pop = function () {
  if (this.num > 0) {
    var popped = this.storage[this.num];
    delete this.storage[this.num];
    this.num--;
    return popped; 
  }
}

stackMethods.size = function () {
  return this.num;
}
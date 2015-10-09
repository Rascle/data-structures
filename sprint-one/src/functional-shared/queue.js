var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.num = 0;
  someInstance.frontNum = 0;
  _.extend(someInstance, queueMethods)
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.num++;
  this.storage[this.num] = val;
};

queueMethods.dequeue = function() {

};

queueMethods.size = function() {
  return this.storage[this.num] - this.storage[this.frontNum];
};


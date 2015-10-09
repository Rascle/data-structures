var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.num = 0;
};


Stack.prototype.push = function(val) {
  this.num++;
  this.storage[this.num] = val;
};

Stack.prototype.pop = function() {
  if ( this.num > 0 ) {
    var popped = this.storage[this.num];
    delete this.storage[this.num];
    this.num--;
    return popped;
  }
};

Stack.prototype.size = function() {
  return this.num;
};
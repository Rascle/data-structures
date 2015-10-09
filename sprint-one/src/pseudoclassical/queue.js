var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.num = 0;
  this.frontNum = 0; //represents the number before the first element in storage
};

Queue.prototype.enqueue = function(val) {
  this.num++;
  this.storage[this.num] = val;
};

Queue.prototype.dequeue = function() {
  if ( this.num > this.frontNum ) {
    this.frontNum++;
    var dequeued = this.storage[this.frontNum];
    delete this.storage[this.frontNum];
    return dequeued;
  }
};

Queue.prototype.size = function() {
  return this.num - this.frontNum;
};
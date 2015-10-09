var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.num = 0;
  return someInstance;
};

var stackMethods = {};

  stackMethods.push = function(value) {
    this.num++;
    this.storage[this.num] = value;
  };

  stackMethods.pop = function() {
    if ( this.num > 0 ) {
      var popped = this.storage[this.num];
      delete this.storage[this.num];
      this.num--;
      return popped;
    }
  };

  stackMethods.size = function() {
    return this.num;
  };



// var Stack.prototype.stackMethods = {
//   Stack.prototype.push = function(value) {
//     this.num++;
//     this.storage[this.num] = value;
//   };

//   Stack.prototype.pop = function() {
//     if ( this.num > 0 ) {
//       var popped = this.storage[this.num];
//       delete this.storage[this.num];
//       this.num--;
//       return popped;
//     }
//   };

//   Stack.prototype.size = function() {
//     return this.num;
//   };
// };
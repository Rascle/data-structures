var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

//create a bucket (an array) 
//beofre you insert the tuple in the bucket, check to see 


HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit); //i will always be 0;
  //if the key at the ith index is the same as the k value being passed
  if (this._storage[i] && this._storage[i][0] === k) {
    //overwrite the value in the ith index with the key
    this._storage[i][1] = v;
  }
  if(i in this._storage) {
        //store the current value at i;
        var cache = this._storage[i];
        //set this ith index in storage bot be an empty array
        this._storage[i] = [];
        //set this._storage[i][j] = [k,v]
        this._storage[i][0] = cache;
        this._storage[i][1] = [k,v];
        //set  
  } else {
    this._storage[i] = [k,v];
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //we need to return the value located in the array at the ith index
  return this._storage[i][1];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i][1] = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

// hash table = [[[k,v],[k,v]],[[k,v],[k,v]],[[Z,v],[Z,v]],[k,v]]
// collisions = if collision
                //store tuple
                //turn index of tuple into an arr
                //set random index for each tuple in new array
                //(run hashing function on just those two tuples for the size 2 array)
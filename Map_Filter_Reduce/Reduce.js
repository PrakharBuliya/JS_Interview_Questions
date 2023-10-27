//Reduce polyfill
//
// Arr.reduce((acc,curr,i,arr) => {}, initialvalue)

Array.prototype.myReduce = function (cb, initialvalue) {
  var accumulator = initialvalue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

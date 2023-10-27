//Map, Filter, Reduce

//Map - returns a new array
//Polyfill of Map

// Array.map((num, i, arr) => {});

Array.prototype.myMap = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

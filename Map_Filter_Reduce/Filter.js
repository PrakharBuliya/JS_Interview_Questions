//Polyfill of Filter

Array.prototype.myFilter = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }

  return temp;
};

//Example

const nums = [1, 2, 4, 8, 34, 65];

const res = nums.myFilter((num) => {
  return num > 4;
});

console.log(res);

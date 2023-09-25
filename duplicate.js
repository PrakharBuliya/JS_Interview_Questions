//There is an array, make it duplicate and add
//eg arr- [1,2,3,4,5] updatedArr = [1,2,3,4,5,1,2,3,4,5]

function duplicate(arr) {
  return arr.concat(arr);
}

console.log(duplicate([1, 2, 3, 4, 5]));

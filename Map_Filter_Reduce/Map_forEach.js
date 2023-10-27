//foreach vs map

const arr = [2, 5, 3, 4, 7];

const mapRes = arr
  .map((ar) => {
    return ar + 2; //this will return a new array adding 2 to each value
  })
  .filter(); //We can chain other methoda after map

const forEachRes = arr.forEach((ar, i) => {
  arr[i] = ar + 3; // same this with forEach will return undefined, but we can make changes to the main array using forEach
}); //Since it dosent return an array, we can not chain any other methods in forEach

console.log(mapRes, forEachRes, arr);

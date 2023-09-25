function reverse(num) {
  //   return Number(num.toString().split("").reverse().join(""));

  while (num > 0) {
    num = num / 10;
  }
}

console.log(reverse(21));

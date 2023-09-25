//Reverse every word in string

var str = "Hello Everyone how are you";

var updatedString = str
  .split(" ")
  .map((word) => {
    return word.split("").reverse().join("");
  })
  .join(" ");

console.log(updatedString);

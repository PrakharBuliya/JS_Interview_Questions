// console.log(a);

// const a = 10;

//Temporal dead zone untill it is declared

// var a = 5;
// function test() {
//   console.log(a);
//   var a = 10;
// }
// test();

// sayHi(); // Error: sayHi is not a function

// function sayHi() {
//   console.log("Hi, hoisting!");
// }

// function hoistingExample() {
//     console.log(x);   //Undefined
//     if (true) {
//       console.log(x); // undefined
//       var x = 5;   // x = 5
//     }
//     console.log(x); // x = 5
//   }
//   hoistingExample();

// var x = 10;
// if (true) {
//   console.log(x);
//   let x = 20;
// }
// console.log(x);

// function outer() {
//   console.log(inner()); // ???

//   function inner() {
//     return "I am an inner function!";
//   }
// }

// outer();

// var a = 10;
// function hoistExample() {
//   if (true) {
//     console.log(a); // Undefined
//     var a = 20;
//   }
//   console.log(a); // 20
// }
// hoistExample();

// console.log(b); // ???
// let b = 15;

// let x = 5;
// if (true) {
//   console.log(x);
//   let x = 10;
// }
// console.log(x);

// function outer() {
//     console.log(inner()); // ???
//     var inner = function() {
//       return "I am an inner function!";
//     };
//   }

//   outer();

//  Lexical Scoping

// function init() {
//   let name = "Mozilla";

//   function displayName() {
//     console.log(name);
//   }

//   displayName();
// }

// init();

function outer() {
  let name = "Prakhar";

  function inner() {
    console.log(name);
  }
  inner();
}
outer();

//Closures = you return a function where lexical scope is also returned

// function makeFunc() {
//   const name = "Prakhar";

//   function displayName() {
//     console.log(name);
//   }

//   return displayName;
// }

// const myFunc = makeFunc();

// myFunc();

//Example

function outer() {
  var message = "Hello, ";

  function inner(name) {
    console.log(message + name);
  }

  return inner;
}

var greet = outer();
greet("Alice");
greet("Bob");

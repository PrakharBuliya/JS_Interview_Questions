// const promiseOne = new Promise((resolve, reject) => {
//   //Do async Task eg- DB calls, Cryptography tasks, file access, Network calls etc.
//   setTimeout(function () {
//     console.log("async task is completed");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(() => {
//   console.log("promise consumed");
// });

// new Promise((resolve, reject) => {
//   setTimeout(function () {
//     console.log("Async Part 2");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("Async 2 resolved");
// });

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       username: "Prakhar",
//       email: "eg@gmail.com",
//     });
//   }, 1000);
// }).then((user) => {
//   console.log(user);
// });

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({
        username: "Prakhar",
        password: "123",
      });
    } else {
      reject("Error : Something went wrong");
    }
  }, 1000);
})
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  });

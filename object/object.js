//Singleton

// const obj = {
//   name: "Prakhar",
//   age: 22,
//   location: "Gurgaon",
//   gmail: "abc@gmail.com",
//   isLoggedIn: "True",
//   lastLoginDays: ["Monday", "tuesday"],
// };

const regularUser = {
  email: "sun@gmail.com",
  fullname: {
    isPresent: true,
    userFullname: {
      firstname: "Prakhar",
      lastName: "Buliya",
    },
  },
};

console.log(regularUser.fullname.userFullname);

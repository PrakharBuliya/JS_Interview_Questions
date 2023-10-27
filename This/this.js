const user = {
  username: "Prakhar",
  price: 199,

  welcomeMessage: function () {
    console.log(`${this.username} welcome to the website`);
  },
};

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

console.log(this);

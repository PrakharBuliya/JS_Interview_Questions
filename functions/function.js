// function calculatePrice(...num1) {
//   return num1;
// }

// console.log(calculatePrice(200, 300, 400, 500, 600));

const user = {
  book: "Prakhar",
  price: 199,
};

function handleObj(anyObject) {
  console.log(`Book name is ${anyObject.book} and price is ${anyObject.price}`);
}

handleObj({
  book: "Hello JS",
  price: 3000,
});

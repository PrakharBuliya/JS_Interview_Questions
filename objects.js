const person = {
  name: "Prakhar",
  age: 30,
};

// console.log(Object.entries(person));

const getObjectEntries = (obj) => {
  const objKeys = Object.keys(obj);
  console.log(objKeys);

  objKeys.map((key) => {
    const value = obj[key];
  });
};

getObjectEntries(person);

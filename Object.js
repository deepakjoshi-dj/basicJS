// Object : collection of key and value pairs.
const key = "state";
const person = {
  name: "Aman",
  age: 23,
  isStudent: true,
  hobbies: ["reading", "music"],
  greet: function () {
    console.log("Hello World!");
  },
  "nick name": "Ammu",
};
person.key = "Telangana";
person[key] = "Telangana";
person.country = "India";
person.name = "Sumit";
delete person.isStudent;

// console.log(person);

// console.log(person["nick name"]);
// console.log(person.name);
// console.log(person["age"]);
// console.log(person.hobbies);
// person.greet();

// Nested Object;
const user = {
  name: "Bob",
  address: {
    city: "Delhi",
    zip: 100203,
  },
};

// console.log(user.address.city);
// console.log(user["address"]["zip"]);

// Object Destructuring.
const person1 = { userName: "Alice", age: 45 };
const { userName, age } = person1;
console.log(userName, age);

const car = { brand: "Tesla", model: "Model 3" };
const mobile = { brand: "Apple", model: "iPhone 16" };

const { brand: carBrand, model: carModel } = car;
const { brand: mobileBrand, model: mobileModel } = mobile;

console.log(carBrand);

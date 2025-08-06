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

// Destructuring with different variable name
const car = { brand: "Tesla", model: "Model 3" };
const mobile = { brand: "Apple", model: "iPhone 16" };

const { brand: carBrand, model: carModel } = car;
const { brand: mobileBrand, model: mobileModel } = mobile;

console.log(carBrand);

// Nested Destructuring
const employee = {
  id: 1,
  name: "Charlie",
  address: {
    city: "Mumbai",
    country: "India",
  },
};
const {
  name,
  address: { city, country },
} = employee;
console.log(name, city, country);

function printUser({ name, age }) {
  console.log(`${name} is ${age} years old.`);
}

// function printUser(prop) {
//   console.log(`${prop.name} is ${prop.age} years old.`);
// }

printUser({ name: "John", age: 34 });

function myFun({ name, age, city }, secondProp) {
  console.log(name, secondProp);
}

myFun({ name: "TJ", age: 34, city: "HYD" }, "hello world");

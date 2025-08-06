// Template Literals : a new way to create string using backticks (``)

const userName = "Alice";
const age = 25;

console.log(
  "Hello, my name is " + userName + " and I am " + age + " years old"
);
console.log(`Hello, my name is ${userName} and I am ${age} years old`);

// Default Parameter

function greet(name = "Guest") {
  console.log(`Hello ${name}!`);
}

greet();
greet("Alice");

// Optional Chaining (?.) (ES11)
const obj = { userName: "Alice", age: 34 };
console.log(obj.userName);
console.log(obj?.address?.city?.splice?.());

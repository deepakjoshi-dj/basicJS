// Basic Function

function greet(name) {
  return `Hello ${name}!`;
}
// const greet1 = name => `Hello ${name}!`;

console.log(greet("Shiva"));
// Function Expression

const Multiply = function (a, b) {
  return a * b;
};
console.log(Multiply(10, 20));

// Arrow Function

const add = (a, b) => a + b;
const multiplication = (a, b) => {
  return a * b;
};
const myObjectFun = (name) => ({ userName: name });

// const myObjectFun = (name) => {
//     return { userName: name };
// };

console.log(add(10, 20));

// Callback Function.
function processUserInput(callback) {
  const name = "Bob";
  return callback(name);
}

console.log(processUserInput(greet));

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
console.log(obj?.address?.city);
console.log(obj?.contact?.phone);
console.log(obj?.address?.city?.splice?.());

const obj1 = { greet: () => "Hello" };
console.log(obj1.greet());
console.log(obj1?.sayHi?.());

// Nullish Coalescing Operator (??)
// Provides a default value only if the left-hand side is null or undefined.
// Does not target for false, 0, "", or NaN

let employeeName = null;
let displayValue = employeeName ?? "Guest";
console.log(displayValue);

// ex OR(||) vs ??

const count = 0;
console.log(count ?? 10);
console.log(count || 10);

// with optional chaining;
const student = {
  profile: { name: "Bob" },
};

console.log(student?.profile?.age ?? 24);

// chaining with multiple defaults

const result = null ?? undefined ?? "Default";
console.log(result);

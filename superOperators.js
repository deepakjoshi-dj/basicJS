// Spread Operator: Expands(spread) elements of array, object or string, into individual elements.
// Think of it as unpacking.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4, e: 5, a: 10 };

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);

// const userName = "Bob";
// console.log([...userName]);
// console.log({ ...userName });

// spread for copying.
const array = [1, 2, 3, 4, 5, 6];
const array2 = [...array]; // shallow copy.
array2[0] = 10;

console.log(array, array2);

// Spread Operator.: Collects remaining values into an array/object
// Think of it as packing
// mostly used in function parameter or destructuring.

// Rest in function parameter.

function sum(...numbers) {
  // numbers = [10, 20, 23, 24, 45, 12, 55, 65]
  const finalValue = numbers.reduce((acc, curr) => {
    return (acc += curr);
  }, 0);
  console.log(finalValue);
}

sum(10, 20, 23, 24, 45, 12, 55, 65);

// Rest in array Destructuring.
const newArray = [10, 23, 543, 545, 223, 33, 54, 6, 6, 2, 622];
const [num1, num2, num3, ...num4] = newArray;
console.log(num1, num2, num3, num4);

// Rest in Object Destructuring.
const users = { id: 1, employeeName: "John", age: 24, country: "India" };
const { employeeName, ...otherDetails } = users;
console.log(employeeName, otherDetails);

// map() Create a new array by transforming each element.
const nums = [1, 2, 3, 4, 5];
const squares = nums.map((num, index, array) => num * num);
const squares1 = nums.map(function (num, index, array) {
  return num * num;
});
console.log(squares1);

// filter() creates a new array with elements that pass a condition
// Returns an empty array if none match.
const nums1 = [10, 15, 20, 25, 30];
const evens = nums1.filter((num, index, array) => num % 2 === 0);
console.log(evens);

// reduce() : Reduce array to a single value, (sum, product, object);
// Takes an accumlator, current value

let nums2 = [2, 3, 5, 6, 9, 10];
// let finalValue = 0;
// for (let num of nums2) {
//   finalValue += num;
// }

const finalValue = nums2.reduce((acc, curr, index, array) => {
  return acc + curr;
}, 0);

console.log(finalValue);

const values = ["hello", 13, "how", 14, "are", "you"];
// const obj = {"hello":0, 13:1, "how":2, 14:3, "are":4, "you":5};

const obj = values.reduce((acc, curr, index, arr) => {
  acc[curr] = index;
  return acc;
}, {});

console.log(obj);

// find() : Returns the first element that matches a condition.
// returns undefined if not match found.

const users = [{ id: 1 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];
const user_id_5 = users.find((user, index, array) => {
  if (user.id === 5) return user;
});
console.log(user_id_5);

// some() : Returns true if at least one element matches the condition.
const nums3 = [1, 3, 5, 7, 8, 11, 12];
const hasEven = nums3.some((num) => num % 2 === 0);
console.log(hasEven);

// every() : Returns true only if all elements match the condition.
const nums4 = [2, 4, 6, 8, 10, 12];
const allEven = nums4.every((item) => item % 2 === 0);
console.log(allEven);

const originalObj = {
  personName: "Alice",
  age: 24,
  address: { city: "Delhi" },
};
const originalArray = [2, 3, 4, 5, 6, [10, 29, 32, 54, 34]];

// Shallow Copy: Copies only the first level of the array/object.
// Nested objects/arrays are still reference, not actual copies.
// changes in nested object affect the original.

const shallowCopyObj = { ...originalObj };
shallowCopyObj.personName = "Bob";
shallowCopyObj.address.city = "Mumbai";

console.log(originalObj, shallowCopyObj);

const shallowCopyArray = [...originalArray];

shallowCopyArray[5][2] = 23;
shallowCopyArray[0] = 100;

console.log(originalArray, shallowCopyArray);

// Deep Copy : Copies all levels, including nested objects/array
// completely independent copy (changes in one don't affect in another)

const deepCopyObj = JSON.parse(JSON.stringify(originalObj));
deepCopyObj.address.city = "Delhi";

console.log(originalObj, deepCopyObj);

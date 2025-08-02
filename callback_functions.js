const x = 10;
const y = 2;

function add(a, b) {
  console.log(`sum of ${a} and ${b} is : ${a + b}`);
}
function sub(a, b) {
  console.log(`sub of ${a} and ${b} is : ${a - b}`);
}
function mul(a, b) {
  console.log(`mul of ${a} and ${b} is : ${a * b}`);
}
function div(a, b) {
  console.log(`div of ${a} and ${b} is : ${a / b}`);
}

function calculator(addFun, subFun, mulFun, divFun, num1, num2) {
  addFun(num1, num2);
  subFun(num1, num2);
  mulFun(num1, num2);
  divFun(num1, num2);
}

calculator(add, sub, mul, div, x, y);

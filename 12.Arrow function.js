//Normal function
function summation(a, b) {
  return a + b;
}

// arrow function or anonymous function
product = (a, b) => {
  return a * b; // {} is used for multiple statements inside a block
};

remainder = (a, b) => a % b;

console.log(`Summation of 3,4 =${summation(3, 4)}`);
console.log(`Product of 3,4 =${product(3, 4)}`);
console.log(`Remainder of 4/3 =${remainder(4, 3)}`);

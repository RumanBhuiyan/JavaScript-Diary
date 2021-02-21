//Template literals => `${variable_name}`
let name = "Ruman";

function summation(a, b) {
  return a + b;
}

// showing output using template literals
console.log(`My Name is ${name}`);
console.log(`Summation of two number is ${summation(2, 3)}`);
console.log(`Product of two number is ${2 * 3}`);

// showing output without using template literals
console.log("My name is " + name);
console.log("Summation of two number is ", summation(2, 3));
console.log("Product of two number is", 2 * 3);

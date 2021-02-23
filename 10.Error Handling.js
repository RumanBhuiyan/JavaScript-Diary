// try-catch block
//Using variable before declaration is called Hoisting
let a = 5,
  b = 2;
try {
  // All operations are done inside this block
  //if any error is occoured then goes inside catch{} block
  result = a / b; // Hoisting
} catch (error) {
  console(`An Error occoured error: ${error}`);
} finally {
  //error happens or not this block is executed always
  // for happening error default value is printed otherwise exact value
  // get printed here
  console.log(result);
}

// Base convertion
let number = 5;
console.log("Binary of 5: ", number.toString(2)); //converts into binary
console.log("Octal of 5: ", number.toString(8)); //converts into octal
console.log("hexadecimal of 5: ", number.toString(16)); //converts into hexadecimal
console.log("4 base of 5: ", number.toString(4)); //converts into 4 base numbers

//Some Math functions
let keep = 0.9656;
let x = 9.656;

console.log(keep.toExponential(3)); //output: 9.656e-1
console.log(x.toFixed()); // prints x+1 if x>9.5 else 9
console.log(x.toFixed(2)); // prints only 2 digits after . notation
console.log(x.toPrecision()); // output: 9.656
console.log(x.toPrecision(2)); // output: 9.7 make precision on 2 digits after .

//type conversion
console.log(Number(x)); //converting into number
console.log(parseInt(x)); //converting into Integer
console.log(parseFloat(5)); // converting into float

//Number MAX_VALUE and MIN_VALUE
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

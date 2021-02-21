// if,if-else, if-else-if, switch
let number = -5;

//if else ladder
if (!number) {
  console.log(number);
} else if (number > 0) {
  console.log("positive number");
} else {
  console.log("Negative number ");
}

// switch case ladder
switch (number) {
  case 0:
    console.log("zero");
    break;
  case number > 0:
    console.log("Positive number");
    break;
  default:
    console.log("Negative number");
}

//ternary operator
console.log(
  !number ? "Zero" : number > 0 ? "Positive number" : "Negative number"
);

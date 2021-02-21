let myNumbers = [1, 2, 3, 4, 5, 6];

// map()
myNumbers.map((value, index, array) => {
  console.log(`${index} : ${value} numbers : ${array}`);
});

//filter() returns the items that satisfy condition inside callback function
let another = myNumbers.filter((value, index, array) => {
  return value < 4;
});
console.log(another);
//shorter way
let other = myNumbers.filter((value) => value >= 4);
console.log(other);

//reduce() returns final result of calculation inside callback function
let result = 0;
myNumbers.reduce((prevValue, currentValue, currentIndex, array) => {
  prevValue ? (result += prevValue + currentValue) : (result += currentValue);
});
console.log(result);

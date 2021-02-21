//Arrays
// Initializing in good manner
let seasons = []; // empty array
let fruits = ["Mango", "Apple", "Banana"]; // array with elements

//below process creates complexity and provide unexpected result
let flowers = new Array("Rose", "Lily");

// inserting elements into array
seasons.push("Summer");
seasons[1] = "Winter";

// Accessing array elements
console.log(seasons);
console.log(seasons[0]);

//keeping number,string,function,object etc inside array
let keep = [
  23,
  "Ruman",
  function () {
    return "Bhuiyan";
  },
  { a: 1, b: 2 },
];
//accessing array elements
console.log(keep[2]());
console.log(keep[3].a);
console.log(keep[3]["b"]); // object_name.key or object_name['key']

//sorting array
let myNumbers = [3, 2, 20, 1];

console.log("Before Sorting : ", myNumbers);
myNumbers.sort((a, b) => a - b);
console.log("After sorting : ", myNumbers);
myNumbers.reverse();
console.log("After reversing : ", myNumbers);

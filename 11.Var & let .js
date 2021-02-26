//var doesn't follow block scope but let follows

var i = 10;

for (var i = 1; i < 5; i++) {
  // just print the last value of the loop
  i % 4 ? 1 : console.log(`last value of the loop: ${i}`);
}
console.log(`Outside block i value: ${i}`); // output : 5
//becuase it forgets previous reference

let j = 10;

for (let j = 1; j < 5; j++) {
  j % 4 ? 1 : console.log(`last value of the loop : ${j}`);
}
console.log(`Outside block j value: ${j}`); //output: 10

//var shows hoisting property but let doesn't
//var x=2 ,var x=3 allowed but let x=2 let x=3 not allowed

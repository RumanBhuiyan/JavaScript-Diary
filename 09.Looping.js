//for,for-in,for-of,while,do-while
//Normal for loop

for (let i = 0; i < 3; i++) console.log("Ruman Bhuiyan");

//for-in loop
let names = ["Adnan", "Adi", "Babu", "Ruman"];
for (index in names) {
  console.log(names[index]);
}

//for-of loop
for (name of names) {
  console.log(name);
}

//while loop
let i = 3;
while (i--) {
    console.log('Hello world')
}

//do-while loop
let j = 3;
do {
    console.log('Happy Coding ')
} while (j--);

# JavaScript-Diary

>  ## [Hackerrank Certificate](https://www.hackerrank.com/certificates/de4f8f626d07)
 <img src="https://github.com/RumanBhuiyan/JavaScript-Diary/blob/master/Certificates/javascript_certificate.png" /> <br >

> ## Variables 
```javascript
    //Printing anything in javascript
    // use ; at end of statement or you can neglect it
    console.log("Hello world");

    /*Declaring variables in javascript
    variables naming procedure follows camelCase */
    // var & let is pretty similar but let is recommended to use rather than var
    var first_number = 4;
    let second_number = 5;

    //accessing variables value
    console.log(first_number);
    console.log(second_number);

    //type checking
    console.log(typeof first_number);
    console.log(typeof second_number);

```
> ## Template Literals
```javascript
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

```
> ## Objects 
```javascript
    // Object Object_name={ key : value ,}

    //Decalaring object
    let person = {
      first_name: "Ruman",
      last_name: "Bhuiyan",
      age: 23,
      values: function () {
        return this.last_name + " " + this.last_name;
      },
    };

    //Accessing key values
    console.log(person.first_name);
    console.log(person["first_name"]);
    console.log(person.values());

```
> ## Numbers 
```javascript
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

      //Adding Two binay string 
      let binary1 = '1011' // decimal : 11
      let binary2 = '1111'  // decimal : 15
      let decimalResult = parseInt(binary1,2)+parseInt(binary2,2)
      console.log('Decimal of 1011: ' + parseInt(binary1, 2));
      console.log(`Binary Result after addition : ${decimalResult.toString(2)}`)
```
> ## Arrays 
```javascript
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

```
> ## Map Filter Reduce 
```javascript
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

```
> ## Math Functions 
```javascript
    // Some math functions
    console.log(Math.PI);
    console.log(Math.round(4.7));
    console.log(Math.floor(4.7));
    console.log(Math.ceil(4.7));
    console.log(Math.pow(2, 2));
    console.log(Math.sqrt(64));
    console.log(Math.abs(-1));
    console.log(Math.sin(3.1416));
    console.log(Math.cos(3.1416));
    console.log(Math.max(1, 2, 3, 4));
    console.log(Math.min(1, 2, 3, 4));
    console.log(Math.random()); // selects random number between 0 and 1

```
> ## Conditional Statements
```javascript
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

```
> ## Looping 
```javascript
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

```
> ## Error Handling 
```javascript
    // try-catch block
    //Using variable before declaration is called Hoisting
    // variable declared with let/const keyword doesn't show hoisting
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

```
> ## var & Let
```javascript
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

```
> ## Arrow Function 
```javascript
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

    //Nesting function which is seen only in javascript
    function addName(first_name) {

        function fullname(fname) {

            return `${fname} Bhuiyan`;
        }

        return fullname(first_name);
    }

    console.log(addName('Ruman'));

```
> ## Promises
```javascript

    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Resolve Finished!!")
            resolve("Good")
        }, 1000)
        console.log("Waiting......")
    }).then((response) => {

        console.log(response)
        return "luck"

    }).then((response) => {

        console.log(response)

    }).catch((reject) => {
        console.log(reject)
    })
```
```javascript
   const fetch = require('node-fetch')

   let info ;

   async function getData (){
     try{
           const response = await fetch('https://jsonplaceholder.typicode.com/posts')
           const data = await response.json()

           info = data 

           data.map(({id,title})=>{
             console.log(`${id} : ${title}`)
           })

           console.log('end of getData()')

       }catch (error){

          console.log(error)

       }finally{

         console.log(info)
       }
   }

   getData()
```

> ## Asynchronous Programming 
```javascript
      // firstly install the package:  npm install node-fetch
      const fetch = require('node-fetch')

      const first = async () => {
          try {
               await fetch("https://jsonplaceholder.typicode.com/posts")
                   .then((response) => {
                       response.json().then(data => {
                           data.map(({id,title}) => {
                               return console.log(`${id} : ${title}`);
                           })
                       })   
                 })
                 .catch((error) => {
                   console.log(error);
                 });
          } catch (error) {
              console.log(error);
          }
          console.log("Api Served")
      }
      first()
```
> ## Rest and Spread Operator 
```javascript
    // rest opertor is used to pass  variable arguments in function
    // rest operatior is denoted as ...variable_name
    function printValues(...names) {
        let combinedNames = ''
        names.forEach((item) => {
            combinedNames +=item +' '
        })
        return combinedNames
    }
    console.log(printValues('Ruman', 'Robi', 'Ontor'))
    console.log(printValues("Ruman", "Robi", "Ontor","Parbez"));

    // Spread Operator 
    let first_object = {
        name: 'Ruman',
        age: '24',
        country : 'Bangladesh',
    }

    let second_object = {
        ...first_object, // spread operator
        occupation : 'student'
    }

    console.log(second_object)

```
> ## Destructuring 
```javascript
    //firstly define the object 
    let Biodata = {
        name : 'Ruman',
        age: '24',
        country : 'Bangladesh'
    }
    // Destructuring is widely used at the time of importing from another file
    // Destructuring 
    const { name, country } = Biodata

    console.log(`${name} : ${country}`)

```
> ## Class and Object
```javascript
      class Rectangle {
          constructor(length, width) {
              this.length = length
              this.width = width
          }
          setLength=(length)=>{
              this.length = length;
          }
          setWidth = (width) => {
              this.width = width;
          }
          getArea=()=> {
              return this.length * this.width;
          }
          getPerimeter = () => {
              return 2*(this.length +  this.width)
          }
      }

      first_rectangle = new Rectangle(2, 3)
      console.log(`Area is ${first_rectangle.getArea()}`)
      console.log(`Perimeter is ${first_rectangle.getPerimeter()}`);

      first_rectangle.setLength(8)
      first_rectangle.setWidth(9)
      console.log(`Area is ${first_rectangle.getArea()}`);
      console.log(`Perimeter is ${first_rectangle.getPerimeter()}`);
```
> ## Inheritance
```javascript
      class Circle {
          constructor(radius) {
              this.radius = radius;
          }
          getArea = () => {
              return Math.PI*(this.radius)**2
          }
      }
      class Sphere extends Circle {
          constructor(radius) {
              super(radius);
          }
          getArea = () => {
              return 4 * Math.PI*(this.radius)**2;
          }
          getVolume = () => {
              return (4 / 3) *Math.PI*(this.radius)**3;
          }
      }

      circle = new Circle(5)
      console.log(`Circles Ares : ${circle.getArea().toFixed(2)}`)

      sphere = new Sphere(5)
      console.log(`Surface Area of the Sphere is : ${sphere.getArea().toFixed(2)}`)
      console.log(`volume of the Sphere is : ${sphere.getVolume().toFixed(2)}`);

```
> ## Date
```javascript
      let dateString = '4-6-2021'

      let dayIndex = new Date(dateString).getDay()
      let monthName = new Date(dateString).getMonth() + 1
      let year = new Date(dateString).getFullYear()

      let dayName = ''
      if (dayIndex == 0) dayName = 'Sunday';
      else if (dayIndex == 1) dayName = 'Monday';
      else if (dayIndex == 2) dayName = 'Tuesday';
      else if (dayIndex == 3) dayName = 'Wednesday';
      else if (dayIndex == 4) dayName = 'Thursday';
      else if (dayIndex == 5) dayName = 'Friday';
      else    dayName = "Saturday";

      console.log(`${dayName} ${monthName} ${year}`)

```
> ## SetTimeout and setTimeOut Function
```javascript
      // setTimeout just run once after calling
      console.log("Hello")
      // print world after 2000 miliseconds time 
      setTimeout(() => {
          console.log("World")
      }, 2000)

      // setInterval calls its function after every mentioned second  
      for (let i = 0; i < 5; i++){
          setInterval(() => {
             console.log(`i: ${i}`)
          }, 1000);
      }

```
> ## Regular Expression (RegEx)
```javascript
       //Learning from : https://www.youtube.com/watch?v=5ckmCW8png0&ab_channel=LearnwithSumit


      // 1. // ;javascript treats it as Regular Expression

      // 2. //g ;g flag menas search globally

      // 3. //gi ;i flag means search without case sensitivity

      // 4. /color/ ;find exact match of 'color'

      // 5. '/color | Color/' ;here | (OR operator is also valid)

      // 6. /(color | Color) blind/ ; firstly find 'color' or 'Color' then space then 'blind'

      // 7. /\w/ ; small 'w' find All words

      // 8. /\W/ ; capital 'W' find everything except words

      // 9. /\d/ ; finds digits only

      // 10. /\D/ ; finds everything except digits

      // 11. /\s/ ; finds space only

      // 12. /\S/ ; finds everything except Spaces

      // 13. /\n/ ; finds newline

      // 14. /\t/ ; finds tabs

      // 15. /[a-z]/ ; Select any sequence that starts with any character within a to z 

      // 16. /[a-gA-Z]/ ; select a-g or A-Z

      // 17. /[^a-z]/ ; select any sequence that doesn't have a-z

      // 18. /colou?r/ ; ? means finds 0 or one occurance of 'u' 

      // 19. /colou*r/ ; * means find 0 or multiple occurance of 'u'

      // 20. /colou+r/ ; + means find 1 or multiple occurance of 'u'

      // 21. /colour{2}/ ; finds those strings which hold 2 'r's at end

      // 22.  /colour{2-5}/ ; finds those string which hold minimum 2 'r's and maximum 5 'r's 

      // 23. /colours\?/ : \? escape ? as keyword ,treat it as a character

      // 24. /color/m ; m flag search in multiline

      // 25.  /^my/gim ; find the strings in multiline that starts with 'my'

      // 26.  /my$/gim ; find those strings that ends with my 

      // Four Methods are used in Javascript to find strings by RegEx

        const text = '#2A2A2A' 
        const regex = /#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g

        const matches =text.match(regex) ; // returns an array of matches

        const index = text.search(regex) ; // return the index where founded

        const replaced = text.replace(regex,'#000000') ; //find and replace

        const testing = regex.test(text); //returns true or false

      // Lets check any zip code of america is valid or not
      // some valid zip code of america from internet : 
      // 35801 thru 35816  99501 thru 99524  85001 thru 85055	72201 thru 72217 83254

      let code = "35801 thru 35816";
      let regularExp = /(\d{5}) (thru)? (\d{0,5})|\d{5}/g;

      console.log(regularExp.test(code))

```

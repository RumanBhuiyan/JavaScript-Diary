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

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

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

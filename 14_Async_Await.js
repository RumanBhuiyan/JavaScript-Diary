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
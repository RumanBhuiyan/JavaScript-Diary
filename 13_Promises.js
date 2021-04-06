
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
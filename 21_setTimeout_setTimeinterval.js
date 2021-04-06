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

/**
 *  global Promise
 * */ 

let message = "";
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        message += "my";
        resolve(message);
    }, 2000)
})


let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        message += " first";
        resolve(message);
    }, 2000)
})

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        message += " promise";
        resolve(message);
    }, 2000)
})
 

const printResult = (results) => {console.log("Results = ", results, "message = ", message)}

// function main() {
//     // See the order of promises. Final result will be according to it
//     Promise.all([promise3, promise2, promise1]).then(printResult);
//     // Promise.all([promise1, promise2, promise3]).then(printResult);
//     // Promise.all([promise2, promise1, promise3]).then(printResult);

//     console.log("\"\"" + message);
// }

// main();
// Promise.all([promise1, promise2, promise3]).then(res => console.log(res, "message: " + message))
Promise.all([promise3, promise2, promise1]).then(res => console.log(res, "message: " + message))
// Promise.all([promise2, promise3, promise1]).then(res => console.log(res, "message: " + message))
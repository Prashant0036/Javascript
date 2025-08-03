// /* • Promises are used to conquer call back hells
//    • Promise is for "eventual" completion of task. It is an object in JS.
//    • It is a solution to callback hell.
//         let promise = new Promise((resolve, reject) => { ... })
//    • it takes an arrow function as an argument.
//    • resolve & reject are callbacks provided by JS */

// /*

//   promise is an object in javascript which have three states :
//    1. Pending
//    2. Resolve
//    3. Reject

//    resolve and reject are two handlers in this promise object created by JS itself

//    Every Promise state has PromiseResult with it.
//    Mainly we don't create promise objects, it's an API which resond in form of promises when
//    we send a request, whether it is pending, resolve or rejected.

// */

// let promise = new Promise((resolve, Reject) => {
//   console.log("Promise is created");
//   // resolve("Promise is resolved");
//   // Reject("Promise is rejected");
// });

// // Let's take an API like example which give data in 10 sec and how it returns a promise

// function APIdataset(id, nextData_callback) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//        console.log(" Data ", id);
//       // here we can return
//       // resolve is successful
//       resolve("Data has been sent successfully");
//       // reject("Some Error Occured");

//       if (nextData_callback) {
//         nextData_callback();
//       }
//     }, 10000);
//   });

// }

// // function/API call
// let returnPromise= APIdataset(5, () => {
//   APIdataset(6);
// });

// //

// console.log(returnPromise);

// // A JavaScript Promise object can be:
// // • Pending: the result is undefined
// // • Resolved: the result is a value (fulfilled)       resolve(result)
// // • Rejected: the result is an error object           reject( error )

// // Handle returned promises from API

// // If promises is resolved, we can use promise.then() function, and there is a default argument called res,
// // which stores the success message. promise.then() function will only execute when promise is fulfilled or resolved
// // If promises is rejected, we can use promise.catch() function, and there is a default argument
// // called err, which stores the error message. promise.catch() function will only execute when promise is
// // rejected or failed

// // .then() and .catch() both take an arrow function as an argument and that arrow function take res and err argument
// // respectively

// // Let's create a function that returns a promise
// function getPromise(){

//   return new Promise((resolve, reject)=>{
//   //  console.log("Data");
//   //  resolve("Data has been sent successfully");
//     reject("Some Network Error Occured");

//   })
// }

// // handle returned promise

// // store that return promise
// let returnedPromise = getPromise();

// // if promise is fulfilled
// returnedPromise.then((res)=>{
//   console.log("Promise is resolved and message is -> ",res);
// })

// // if promise is rejected
// returnedPromise.catch((err)=>{
//   console.log("Promise is rejected and error is -> ",err);
// })

// ** Promise Chaining **
// We can chain multiple promises together using .then() function. The result of the previous promise will
// be passed to the next promise as an argument. This is called promise chaining.
// We can also use .catch() function to handle the error in the promise chain. If any
// promise in the chain is rejected, the error will be caught by the .catch() function and
// will not be propagated to the next promise in the chain.
// We can also use async/await syntax to handle promise chaining. This is a more readable way
// to handle promise chaining.

// Let's create a Asynchronous function(having setTimeout function) that returns a promise

function AsyncFunction1() {
  // returns a data1 with a promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data 1..");
      resolve("Data1 has been sent successfully");
    }, 5000);
  });
}

function AsyncFunction2() {
  // returns a data2 with a promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data 2..");
      resolve("Data2 has been sent successfully");
    }, 5000);
  });
}

function AsyncFunction3() {
  // returns a data2 with a promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data 3..");
      resolve("Data3 has been sent successfully");
    }, 5000);
  });
}

console.log("Fetching Data 1....");

// Now let's chain these two promises together using .then() function
let p1=AsyncFunction1();

// if returned promise p1 is resolved

p1.then((res)=>{
    console.log("Data 1 fetched");
console.log("Fetching Data 2....");

    let p2=AsyncFunction2();
    // if returned promise p2 is resolved
    p2.then((res)=>{
      console.log("Data 2 fetched");
      console.log("Fetching Data 3....");
      let p3=AsyncFunction3();
      p3.then((res)=>{
        console.log("Data 3 fetched");
      })
    })
})

// // or we can also write this

// console.log("Fetching Data 1....");
// AsyncFunction1()
//   .then((res) => {
//     console.log("Fetching Data 2....");
//     return AsyncFunction2();
//   })
//   .then((res) => {
//     console.log("Fetching Data 3....");

//     return AsyncFunction3();
//   }).then((res)=>{
//     console.log(res)});


// // async function getAPIdata(){
//   await AsyncFunction1();
//   await AsyncFunction2();
//   await AsyncFunction3();
//   }
//   getAPIdata();
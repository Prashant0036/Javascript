/*
Let's understand the hierarchy, 
1. we were able to achieve async programming using call back hells but it was too complicated
2. Promises were introduced to make it easier to handle async programming but it was still complicated
3. Then came async/await which made it even easier to handle async programming and it's the
most widely used method today
Let's see how we can use async/await in our code. We will use the same example

we can make any normal function async function and async function always returns a promise

Await - meaning of await is to wait for someone, means if any function is async and we used await keyword before the 
function call then it will wait for the function to complete its execution and then it will execute the next line


*/
async function getData(id){
    setTimeout(()=>{
        console.log("Data : ",id);
    },5000);
      
}

// calling the function, it will return a promise along with it
//  getData(5);


// Achieve the same thing that we do using call backs and promise chaining

async function APIdatabase1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data 1");
            resolve("Success");

            // reject("Error");
        },5000)

    })
    
}
async function APIdatabase2(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Data 2");
       
            resolve("Success");
        },5000)
        }
    )}
// calling without await
// APIdatabase1();
// APIdatabase2();
// Data 1 and Data 2 will print simultaneously

// calling with await
async function getAPIdata(){
// await APIdatabase1();
// await APIdatabase2();
}
getAPIdata();


// Another example that how async await ease the asynchronous flow of program

async function dataBase (id) {
    return new Promise((resolve,reject)=>{
          setTimeout(()=>{
             console.log("Data : ",id);
             resolve("Success");
          },3000);
    })
}

async function getDataFromDatabase() {
    
    console.log("Fetching Data 1.....")
    await dataBase(1);
    console.log("Fetching Data 2.....")
    await dataBase(2);
    console.log("Fetching Data 3.....")
    await dataBase(3);
    console.log("Fetching Data 4.....")
    await dataBase(4);
    console.log("Fetching Data 5.....")
    await dataBase(5);
}
// getDataFromDatabase(); // To remove that function call we can use IIFE (Immediately Invoked Function Expression) 

(async function () {
    
    console.log("Fetching Data 1.....")
    await dataBase(1);
    console.log("Fetching Data 2.....")
    await dataBase(2);
    console.log("Fetching Data 3.....")
    await dataBase(3);
    console.log("Fetching Data 4.....")
    await dataBase(4);
    console.log("Fetching Data 5.....")
    await dataBase(5);
})();

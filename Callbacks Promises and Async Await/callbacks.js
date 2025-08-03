/* 
Call Back:
A callback is a function,
passed as an argument to another function.
*/

// Call back in synchronous programming
function add(n1, n2) {
  return n1 + n2;
}

function avg(addFun, n) {
  // addFun is a function which refer the add function
  return addFun(5, 3) / n; // here we are calling addFun()
}

console.log(avg(add, 2)); // here we are only passing the above written add function
// or we can simply pass the arrow function
console.log(
  avg((a, b) => {
    return a + b;
  }, 2)
); // here we are only passing the arrow function

// Call back in Asynchronous programming
function printHello() {
  console.log("Hello");
}
setTimeout(printHello, 4000); // pass the printHello function to already programmed setTimeout Function
// setTimeout is a function which is already programmed and it is a callback function
// because it takes a function as input

// Callback Hell
// Callback Hell: Nested callbacks stacked below one another forming a pyramid structure.
// (Pyramid of Doom)
// This style of programming becomes difficult to understand & manage.

// To understand call back Hell let's assume a scenario:

// we have a database, when we pass a ID we get a Data of that particular ID
// but it takes 2 sec delay to fetch data of ID.

// now we want data of ID 1 then data of ID 2 and then data of
// ID 3 and so on..

function SampleDataBase(id) {
  setTimeout(() => {
    console.log(id, ": Data");
  }, 2000);
}

// get data of ID 1
SampleDataBase(1);
// get data of ID 2
SampleDataBase(2);
// get data of ID 3
SampleDataBase(3);

// Now there is a problem :
// it will fetch all the data concurrently because when SampleDataBase(1); will execute it take 2 sec
// delay and in that 2 sec delay it will execute SampleDataBase(2), again SampleDataBase(2) will take 2 sec time so SampleDataBase(3)
// will execute before SampleDataBase(2) finishes its execution.
// and it will print all the data at the same time

// but we want Data 1 first, then 2 sec gap, Data 2 then then 2 sec gap
// then Data 3 then 2 sec gap and so on..
// so we need to make it sequential not concurrent.

// we can do this by using callback hell
// we will pass a callback function to SampleDataBase function and it will call that callback function after
// it finishes its execution.

function sampleDataBase(id, nextData_callback) {
  // nextData_callback ek function store karega jo tab call
  // hoga jab phle data print ho jayega iska matlb nextData_callback
  // m isi SampleDataBase() function ko store kara lenge aur tab
  // call karenge jab phle data print ho jayega

  setTimeout(() => {
    console.log(id, " : Data");
    // phli id ka data print ho gya ab nextData_callback
    // m jo SampleDataBase(2) ko store kiya h use call kar denge
    // note : nextData_callback m function parameters k sath store hota h
    if (nextData_callback) {
      // first time to humne sampleDataBase m 2 arguments pass kar diye
      // lekin last m sirf ek hi argument pass kiya h i.e. id isiliye tabhi
      // nextData_callback call ho jab isme humne koi function call
      // pass kari h as an argument
      nextData_callback();
    }
  }, 2000);
}

sampleDataBase(1, () => {
  sampleDataBase(2);
}); // phle maine 1 ID ko call kar liya aur sath
// hi SampleDataBase(2) function ko SampleDataBase m pass kar diya
// taaki ye tab call ho jab phli ID ka data print ho jaye

// Like that------, It becomes a call back hell
console.log("Getting Data 1...")
sampleDataBase(1, () => {
console.log("Getting Data 2...")
  
  sampleDataBase(2, () => {
    console.log("Getting Data 3...")
    sampleDataBase(3, () => {
      sampleDataBase(3);
    });
  });
});

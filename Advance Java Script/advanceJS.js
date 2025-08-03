// 1. IIFE Immediately invoked Function Expressions
(async function runOnce(){

    setTimeout(()=>{

        return new Promise((resolve,reject)=>{
               resolve("Promise is resolved and Data is Sent");
               console.log("Data is sent");
        })
    },2000)
   


})();





// 2. Destructuring

// on Array

let [a,b,...restOfTheElements]=[5,3,7,4,3,6,6,3];
console.log(a,b,restOfTheElements); 

// on Objects
let obj ={
    x :1,
    y :2,
    z :3
}


let {x,y}=obj; // x and y ko object m se bahar nikal lo
console.log(y)




// 3. Spread

function sum(n1,n2,n3){
return n1+n2+n3;
}
let Arr = [3,4,7];

console.log(sum(Arr[0],Arr[1],Arr[2]))

// same thing we can do with 
console.log(sum(...Arr));



// Array to object having index no. as keys
let Arr1=["Me","You","No one"];
let ArrToObj =  {...Arr1};
console.log(ArrToObj);

const p="the";
const q='no';
const obj1 ={p,q};
console.log(obj1);  // {p:'the', q:'no'}

let name="Prashant"
let strToArray =[...name];
console.log(strToArray);


// Hosting 

function fun1(){

// var num; it's pretended to do that 
console.log(num); // although num is not declared before but still it will not
// throw any error, it will print undefined because it is var type;
// will throw an error if it's let and const type

}
fun1();

var num =5;














// Note 
// if any function is called before, and implemented below will work 
hello("Prashant");

function hello(name){
    console.log("Hello",name);
}

// but it will not work for let and const type function

helloLet("Prashant");

let helloLet=(name)=>{
    console.log("Hello",name);
}
helloConst("Prashant");

const helloConst=(name)=>{
    console.log("Hello",name);
}





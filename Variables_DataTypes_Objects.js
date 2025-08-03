// var variables have global scope it means change in local scope of var varibles will reflect in global scope

var a=5;
var b=5.4;
var c="Prashant";
var d=true;

var x=12;
if (true){
    var x=20;
    console.log("Value of x inside block is "+x) //20
}
console.log("Value of x outside block is "+x); //20


// let variables have local scope it means change in local scope of let varibles will not reflect in global scope

let y=12;
if (true){
    let y=20;
    console.log("Value of y inside block is "+y); //20
}
console.log("Value of y outside block is "+y); //12


// Different Datatypes in JS

let num1=10;
let num2=10.5;
let str="Prashant";
let bool=true;
let nullVar=null;
let undefVar=undefined;
console.log(typeof(num1)); //number
console.log(typeof num2); //number
console.log(typeof str); //string
console.log(typeof bool); //boolean
console.log(typeof nullVar); //object
console.log(typeof undefVar); //undefined
console.log(typeof bigIntVar); 
//BigInt is a primitive data type in JavaScript that can represent arbitrarily large integers. It is used to
console.log(num1+5+str);
console.log(num1+str+5);



// Different ways to declare Variables names
let var1;
let Var1;
let _var1;
let $var1;


// JS Objects
// Objects are collection of key value pairs
// key is string and value can be any data type
const person={
    name:"Prashant",
    age:20,
    address:{
        city:"Pahasu",
        state:"Uttar Pradesh",
        country:"India"
        },
        hobbies:["Cricket","Football","Reading"],
        isMarried:false
        }
        console.log(person);
        console.log(person.name); //Prashant
        console.log(person.age); //20
        console.log(person.address)
        console.log(person.isMarried) //false
        console.log("Type of person is "+typeof person);


        // Modify values of person Object
        person.name="Prashant Saraswat";
 
 console.log("Updated name is "+person.name);

 // Add more keys in Objects 
 person.occupation="Software Engineer";
 console.log(person.occupation);
 console.log(person);


 // Delete keys from Objects
 delete person.isMarried;
 console.log(person.isMarried); //undefined



 console.log(Object.keys(person));// return all keys as an array
 console.log(Object.entries(person));// return list of list having key and value separated by comma
 console.log(Object.values(person));// return all values as an array




let a=58786;
let aStr=a.toString()
console.log(aStr);

let s = "Hello";
let len = s.length; // Output: 5

let s1 = "Hello";
let c = s.charAt(1); // Output: 'e'

let s2 = "Hello";
let sub = s.substring(1, 3); // Output: "el"
let sub1=s2[1,4];
console.log(sub1);

let b="India";
console.log(b.slice(1, 5)) 
console.log(b.slice(1)) 
console.log(b.substring(1,5))

let s3 = "Hello";
let lower = s3.toLowerCase(); // Output: "hello"
let upper = s3.toUpperCase(); // Output: "HELLO"


let s4 = "Hello";
let replaced = s4.replace('l', 'p'); // Output: "Heppo"

let s5 = "  Hello  ";
let trimmed = s5.trim(); // Output: "Hello"

let s6 = "Hello World";
let parts = s6.split(" "); // Output: ["Hello", "World"]


let s7 = "Hello World";
let contains = s7.includes("World"); // Output: true

let s8 = "Hello World";
let index = s8.indexOf("World"); // Output: 6


console.log(b.concat(s, "Aishwariya", "Rahul", "Priya"))

let name="Prashant";
let age=20;
console.log(`My name is ${name} and my age is ${age} .`)

// endsWith
console.log(name.endsWith("nt")); //true

//starts with
console.log(name.startsWith("Pra")); //true

// Reverse a String


let revStr=name.split('').reverse().join('');
console.log(revStr);


let strRev =[...name].reverse().join('');
console.log(strRev);


// ASCII of a character
console.log('a'.charCodeAt()); // Output: 97

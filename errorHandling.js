let a = parseInt(prompt("Enter First Number"));
let b = parseInt(prompt("Enter Second Number"));

if (isNaN(a) || isNaN(b)) {
  throw new Error("Enter a valid Number");
//   throw SyntaxError("Enter a valid Number");
}  
else {
  alert(a + b);
}


try{

let a=4;
let b=0;
console.log(a/n);


}
catch(e){
    console.log("ye kya ho gya bhai "+e);
    console.log("Error ka name "+e.name);
    console.log("Error ka message "+e.message);
    console.log("Error kaha aaya h "+e.stack);

}
finally{
console.log("Finally will always execute");
//finally block is especially to be used in functions.
// suppose you are writing try and catch block in a function, you are returning true in try block
// and returning false in catch block, in both of the case function will return and rest of the code will not be executed
// but if your code is inside finally block it will always executed even after return of function

}

console.log("rest of the code...........")
// 1. Synchronous Programming :

//Next instrunction executes after the completion of previous instruction
//It is also known as sequential programming
//It is the most basic form of programming
//It is used in real time systems where the output depends on the input of the previous instruction

console.log("One")
console.log("Two")
console.log("Three")
console.log("Four")
//Output: One, Two, Three, Four




// 2. Aynchronous Programming :

/*Due to synchronous programming, sometimes imp instructions get
blocked due to some previous instructions, which causes a delay in the UI.
Asynchronous code execution allows to execute next instructions
immediately and doesn't block the flow.
It is also known as concurrent programming
It is used in web development, where the UI should not be blocked
It is used in real time systems where the output does not depend on the input of the previous
instruction
Ex. hamara phle kuchh code likha hua then ek API call ka code h phir other code h
ab maan lo for instance API se data fetch hone m 10 sec ka time lag gya to niche ka code
10 sec wait thode hi karega execute hone k liye, It will lead to big delay in UI

isiliye according to the concept of Async Prog., agar koi instruction jyada time le rha h
to use parallely execute hone do aur next inst. ko bhi execute kar do


*/

console.log("I'm written first");
console.log("I'm written second");

setTimeout(

    ()=>{
    console.log("I'm inside setTimeout function")},4000
)

console.log("I'm in the end");


// order of print
// "I'm written first"
// "I'm written second"
// "I'm in the end"
// "I'm inside setTimeout function"
/*
because of the asynchronous nature of JS, 
it pushes the setTimeot function in the end to execute.


Script will continue the execution, if any function like setTimeout
waits, no matter what the waiting time is, even the waiting time
is 0

*/
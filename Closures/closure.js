// In other words, a closure gives a function access to its outer scope


// global variable

let GlobalA = "Gloabal Variable 10";


function meet(){

    let localVariable = "localVariable of meet 20";

    function aFunctionInsideMeet(){
    // aFunctionInsideMeet apne andar localVariable ka address bhi store krke rakhega
        return localVariable;
    }

    return aFunctionInsideMeet;
}


let returnMeet = meet();


let return_FunctionInside_meet = returnMeet();

console.log(return_FunctionInside_meet); //localVariable of meet 20
// although scope of function meet() has ended but we are able to access the varibles of it
// using closure

// meet() function stack m se to pop ho chuka h execution k baad 
// lekin uska reference humne save kar liya h heap m 

// meet ne return kiya uske andar k function ka ref 
// uske andar k function k ref se uske anadar k function tak pahunche, phir uske andar k
// function ne return kiya meet() k local variable ka ref 
// local variable ka ref humne save kr liya return_FunctionInside_meet m, jise hum access kr sakte h kabhi bhi

// mtlb m ek function ko bhi return kar sakta hu kisi function se
// us function ko return karne ka mtlb h, reference address us function 
// is reference address ki help se hum is function ko dobara call kar skte h


// Summary : 
// aFunctionInsideMeet is working as closure jiske pass khud k sath sath outer scope wale variables ka bhi address h 
console.log("I am a tutorial on Loops");
// For Loop

let a = 1;


for (let i = 0; i < 100; i++) { 
    console.log(a + i); 
}




// let i = 0;
// while (i<60000) {
//     console.log(i)
//     i++;
// }

let i = 10;
do {
    console.log(i)
    i++;
} while (i<6);


let obj = {
    name: "Harry",
    role: "Programmer",
    company: "CodeWithHarry AI"
}
 
// For in Loop
// For keys or objects
for (const key in obj) {  
    let value=obj[key];
        console.log(key+"-"+value);
}

const numbers = [45, 4, 9, 16, 25];


for (let x in numbers) {
  console.log( numbers[x]);
}



// For of Loop
// For values or iterables like Array and String
for (const c of "Harry") {
    console.log(c)
}

let language = "JavaScript";


for (let x of language) {
console.log(x);
}

const cars = ["BMW", "Volvo", "Mini"];

;
for (let x of cars) {
  console.log(x);
}

// R06621285 
// For Each Loop
 let fruits = ["Apple","Banana","Grapes"];
 fruits.forEach((x)=>{
    console.log(x);
 })

// While loop
let k=0;
while(k<10){
console.log(k);
k++;
}


// do while loop
do{
    console.log("Hello"+k);
    k++;
}while(k<20);

let prop = {
    name:"Pra",
    age : 30
}

// for(let x of prop){
//      console.log(x);
// }
console.log(prop.age);
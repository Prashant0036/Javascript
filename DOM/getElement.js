// 1- Get Element by class Name

let boxes=document.body.getElementsByClassName("box")
console.log(boxes)
// document.body.getElementsByClassName("box").style.backgroundColor='red' 
// can't set the property of HTML Collection because it contains all the elements having box class

// We can make an array from this HTML Collection
let boxesArray=Array.from(boxes)
// Now we can iterate this using forEach


// 2- Get Element by query
let firstBox=document.querySelector(".box")
console.log(firstBox)
firstBox.style.backgroundColor="yellow"
// Note : inside querySelector() we can pass our CSS Selector syntax like (div>img)

// 3- Get Element by query All
let allBoxes=document.querySelectorAll(".box") // Returns Node List
console.log(allBoxes)
allBoxes[4].style.backgroundColor="green"

// Using for Each Loop
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor='red';
   
})

// 4- Get Element by ID
let box2=document.getElementById("box-2")
console.log(box2)
box2.style.backgroundColor='red'
document.getElementById("box-2").style.backgroundColor='red' // same as above line


// 5- Get Element by Tag Name
let all_h1=document.getElementsByTagName("h1")
console.log(all_h1) //Returns node List of having all the elements of h1 tag
all_h1[2].style.backgroundColor="green"

//Other Functions

// matches
console.log(all_h1[0].matches("#head-1")) //true
console.log(all_h1[0].matches(".head")) //false

//closest
let box3=document.querySelector(".box")
console.log(box3.closest(".container")) // returns the closest element with class container

// contains
// I want to check whether container class div contains .box element and .heading element
let container=document.querySelector(".container") // get Container
console.log(container.contains(document.querySelector(".box"))) //true
console.log(container.contains(document.querySelector(".heading"))) //false
// contains returns true if the element is present in the container otherwise false
console.log(document.body.contains(document.querySelector(".heading"))) //true


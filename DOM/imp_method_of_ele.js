//Get node list of all the containers using query selector
let cont=document.querySelectorAll(".container")
console.dir(cont)

// Get the tag of any element
console.log(cont[0].tagName) //DIV

// Get the node name
console.log(cont[0].nodeName) //DIV

// Get inner HTML
console.log(cont[0].innerHTML) 
/*
<div class="box">Box 1</div>
<div class="box">Box 2</div>
<div class="box">Box 3</div>
<div class="box">Box 4</div>
<div class="box">Box 5</div>
*/

//Get Outer HTML
console.log(cont[0].outerHTML) 
/*
<div class="container">
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
        <div class="box">Box 4</div>
        <div class="box">Box 5</div>
    </div>

*/

console.log(cont[0].innerText) 
// Box 1
// Box 2
// Box 3
// Box 4
// Box 5
console.log(cont[0].outerText) 
// Box 1
// Box 2
// Box 3
// Box 4
// Box 5

console.log(cont[0].textContent)

console.log(document.querySelector(".container").hidden)
document.querySelector(".container").hidden=true
console.log(document.querySelector(".container").hidden)


console.log("----------------------")

//Get node list of all the boxes using query selector
let boxes=document.querySelectorAll(".box")
console.dir(boxes)

// Get the tag of any element
console.log(boxes[0].tagName) //DIV

// Get the node name
console.log(boxes[0].nodeName) //DIV

// Get class names 
console.log(boxes[0].className) //box

// Get class list
console.log(boxes[0].classList) //DOMTokenList {box}

// add or remove class names
boxes[0].classList.add("active")
boxes[0].classList.remove("active")

//toggle class list means if this class name is there it'll remove
// if not there it'll add
console.log(cont[0].classList)
cont[0].classList.toggle("new")
console.log(cont[0].classList)

// check class name 
console.log(boxes[0].classList.contains("box")) //true



// Get inner HTML
console.log(boxes[0].innerHTML) // Box 1

//Get Outer HTML
console.log(boxes[0].outerHTML) // <div class="box">Box 1</div>

//Get inner text
console.log(boxes[0].innerText) // Box 1

//text content- shows raw content regardless any CSS, preserve whitespace
console.log(boxes[0].textContent)

// hidden property
console.log(boxes[0].hidden) // false

// hide element using JS
boxes[0].hidden=true

// Change inner HTML of page
document.querySelector(".box").innerHTML="<h1>Hello World</h1>"

document.querySelector(".box").innerText="<h1>Hello World</h1>"
// This will not work as innerText does not support HTML tags

document.querySelector(".box").textContent="<h1>Hello World</h1>"


// Check whether any element has any particular attribute or not
console.log(boxes[0].hasAttribute("class")) //true
console.log(boxes[0].hasAttribute("id")) //true
console.log(boxes[0].hasAttribute("style")) //false
console.log(boxes[1].hasAttribute("id")) //false

// Get any particular attribute of any tag
console.log(boxes[0].getAttribute("class")) // box
console.log(boxes[0].getAttribute("id")) // box-1

// Set any particular attribute of any tag
boxes[0].setAttribute("class","box") 
boxes[0].setAttribute("id","box--1")
boxes[0].setAttribute("style","display:none") // hide the element

// Get all the attributes of Element
console.log(boxes[0].attributes) //NamedNodeMap {0: class,

// Remove any attribute of Element
boxes[0].removeAttribute("style")

////// Pro Tip ////
document.designMode="on"
// By this you can edit any web page like text editor //

// Fetch Data Attribute 
console.log(document.querySelector(".container").dataset)
// DOMStringMap {createdby: 'Prashant', guidedby: 'Harry'}








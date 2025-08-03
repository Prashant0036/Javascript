console.log("Hiiiiii");
// To get whole body
console.log(document.body)

// To get all the child nodes of body
console.log(document.body.childNodes)

// First child node of body
console.log(document.body.childNodes[0]) // #text

// Second child node of body
console.log(document.body.childNodes[1]) // div#cont.container


// all the inner child nodes of Second child node of body
console.log(document.body.childNodes[1].childNodes) //NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

// Assigning to a variable
let cont=document.body.childNodes[1]
console.log("First child node of container "+cont.firstChild)
console.log("Second child node of container "+cont.childNodes[1])

// If you want to ignore text child nodes of any container 
console.log("First child node ignoring text nodes "+cont.firstElementChild) 
console.log("Last child node ignoring text nodes "+cont.lastElementChild) 
cont.lastElementChild.style.backgroundColor="red";

document.body.childNodes[1].firstElementChild.style.backgroundColor="lime"

// Get Parent node of any element
console.log(window.document.body.childNodes[1].parentNode) // body
console.log(cont.childNodes[1].parentNode) // window is global var

console.log(cont.childNodes[1].parentElementNode) // Parent HTML Element

// Get all html elements of any container
console.log("all child nodes ignoring text nodes and comment nodes"+cont.children) // HTMLCollection(3) [div.box, div.box, div
console.log(cont.children) // HTMLCollection(3) [div.box, div.box, div
console.log(cont.children[1].style.backgroundColor="yellow") 


// sibling node of any element including text or comment
console.log("Next sibling of Box1") ;
console.log(cont.children[0].nextSibling) // #text

console.log("Previous sibling of Box2") ;
console.log(cont.children[1].previousSibling) // #text

// sibling HTML elements of any HTML element
console.log("Next sibling of Box1") ;
console.log(cont.children[0].nextElementSibling) // div.box2

console.log("Previous sibling of Box2") ;
console.log(cont.children[1].previousElementSibling) // div.box1

/* childNodes - all nodes
   children - only HTML element
   firstElementChild - first HTML element
   lastElementChild - last HTML element
   firstChild - first node
   lastChild - last node
   nextSibling - next sibling
   previousSibling - previous sibling
   parentElement - parent HTML element
   parentNode - parent node

   nextElementSibling - next HTML element
   previousElementSibling - previous HTML element

   Element - HTML element
   node - all the nodes


   */

// Control Table elements using DOM
let tab=document.body.children[2];
// Got Table node in tab variable
console.log(tab)
// Get all rows of table
console.log(tab.rows) // HTMLCollection(3) [tr, tr]
console.log(tab.rows[0].cells) // All columns of first row
console.log(tab.rows[0].cells[0].textContent="Cell 1") // Change text of 1 row and 1 col

tab.rows[1].cells[0].style.backgroundColor="yellow" // 2nd row, 1st col

// Fill table of two in second table

// Get second table in a variable
let table2=tab.nextElementSibling;
console.log(table2.children)

// Fill table of 2
for(let i=0;i<10;i++){
table2.rows[i].cells[0].textContent=(i*2)+2;
console.log(i);
}


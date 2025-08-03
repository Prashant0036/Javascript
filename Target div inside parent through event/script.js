// get parent
let parent = document.querySelector(".parent")
console.log(parent) 

let childs=document.querySelectorAll(".childElements")
console.log(childs);

for(let child of childs){
    // console.log(child)

    // capture click event
    child.addEventListener("click",function(){
        console.log(child.textContent)
        })


        // capture hover event
        child.addEventListener("mouseover",function(){
            console.log(child.textContent)
        })
        
    }
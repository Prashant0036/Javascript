// Get node list of all the boxes using query selector
let boxes=document.querySelectorAll(".box")
console.log(boxes)

// Create function to generate random values bw 0 to 255
function getRandomValue() {
    return Math.floor(Math.random() * 256);
    }




function getRandomColor(){
boxes.forEach(e=>{
    let a;
    // let randomColorString="rgb("+getRandomValue()+","+getRandomValue()+","+getRandomValue()+")";
    let randomColorString=`rgb(${getRandomValue()},${getRandomValue()},${getRandomValue()})`;
    e.style.backgroundColor=randomColorString;
    e.textContent=randomColorString;
    e.style.color="white";
})
}

// get button
let button1=document.getElementById("btn1");
console.log(button1);
// add event listener to button

// button.addEventListener("click", ()=>{alert("Hii")})

//Click
button1.addEventListener("click", getRandomColor)

// Double Click
document.getElementById("btn2").addEventListener("dblclick",getRandomColor)

// Hover
document.getElementById("btn3").addEventListener("mouseover",getRandomColor)

// Right Click
document.getElementById("btn4").addEventListener("contextmenu",getRandomColor)

// Get Focus 
document.getElementById("inp1").addEventListener("focusin",()=>{
    document.getElementById("inp1").style.backgroundColor="pink";

})

// Loose Focus
document.getElementById("inp1").addEventListener("focusout",()=>{
    document.getElementById("inp1").style.backgroundColor="";
})
document.getElementById("inp2").addEventListener("focusout",()=>{
    document.getElementById("inp2").style.backgroundColor="yellow";
})

// pointer over
document.getElementById("inp3").addEventListener("pointerover",()=>{
    document.getElementById("inp3").style.backgroundColor="yellow"}) 

// pointer out
document.getElementById("inp4").addEventListener("pointerout",()=>{
    document.getElementById("inp4").style.backgroundColor="yellow"})
    
// pointer out
document.getElementById("inp5").addEventListener("input",()=>{
      document.getElementById("inp5").style.backgroundColor="aqua"})


// Key Down
document.addEventListener("keydown",(e)=>{
    document.getElementById("lbl1").innerText=e.key
    document.getElementById("lbl2").innerText=e.keyCode
})      

// Scroll
document.addEventListener("scroll",()=>{
    document.getElementById("lbl3").innerText=window.scrollY
    })


// Refresh Page
document.getElementById("refBtn").addEventListener("click",()=>{
    location.reload()
})

// Refresh Page using R Button
document.addEventListener('keydown', function(event) {
    if (event.key === 'r' || event.key === 'R') {
        location.reload();
    }
});
    

// Remove any Event Listner
function inputEvent(event){
    document.getElementById("inp6").style.backgroundColor="Blue";
    document.getElementById("inp6").style.color="white";
} 

// add event listner first
document.getElementById("inp6").addEventListener("pointerover",inputEvent);
document.getElementById("inp6").addEventListener("pointerout",()=>{
    document.getElementById("inp6").style.backgroundColor=""
});

// then remove the same event listner on click of button
document.getElementById("removeEventBtn").addEventListener("click",()=>{

    document.getElementById("inp6").removeEventListener("pointerover",inputEvent)
    alert("Event listner removed by button")
});



// setTimeout Function
// do any task after several seconds
// like Remove the event listener after 5 seconds
let returnValueOfSetTimeout=setTimeout(function() {
    document.getElementById("inp6").removeEventListener("pointerover",inputEvent)

    alert("Event listener removed automatically using setTimeout after 10 second");
}, 10000);

// Clear setTimeout
// clearTimeout(returnValueOfSetTimeout);



// Set Interval Function :
// Do any task in repeatative interval like 1 sec, 2 sec 
// pehla argument function lega (jo karna h) aur dusra argument time interval in ms

let returnValueOfSetInterval=setInterval(function(){
    document.getElementById("lbl4").innerText=Date()
    },1000) // updating time at every second

// Clear setInterval Function 

// clearInterval(returnValueOfSetInterval); 



// More on Event Objects
document.addEventListener("keydown",(e)=>{
   console.log(e);
}) 



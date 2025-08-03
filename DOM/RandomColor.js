// Get node list of all the boxes using query selector
let boxes=document.querySelectorAll(".box")
console.log(boxes)

// Create function to generate random values bw 0 to 255
function getRandomValue() {
    return Math.floor(Math.random() * 256);
    }




boxes.forEach(e=>{
    let a;
    // let randomColorString="rgb("+getRandomValue()+","+getRandomValue()+","+getRandomValue()+")";
    let randomColorString=`rgb(${getRandomValue()},${getRandomValue()},${getRandomValue()})`;
    e.style.backgroundColor=randomColorString;
    e.textContent=randomColorString;
    e.style.color="white"
})
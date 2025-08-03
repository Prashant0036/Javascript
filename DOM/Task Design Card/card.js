function createCard(thumbnailLink,duration,title,channel,views,uploadTime){
    
// Format Upload Time
    if(uploadTime<12){
        uploadTime=uploadTime+" months ago";
    }
    else{
        uploadTime=Math.floor(uploadTime/12)+" years ago";
    }
    
// Format views
if(views>=1000 && views <100000){
    views= Math.floor(views/1000) + "K";
}
else if(views>=100000 && views<100000000){
    views = Math.floor(views/1000000) + "M";
}
else if(views>=100000000){
    views = Math.floor(views/100000000) + "B";
}
views=views+" views";


    // Container ki inner HTML jo humko add karni h har baar on every funcion call
    let htmlToAppend =`<div class="card">
    <div class="imageBox">
    <img class="thumbnail" src="${thumbnailLink}">
    <div class="duration">
        ${duration}
    </div>
</div>
    <div class="text">
        <h2 class="title">${title}</h2>
        <div class="metaInfo">
            <p class="channel">${channel} </p>
            &#x2022;<p class="views"> ${views}</p>
            &#x2022;<p class="uploadTime"> ${uploadTime}</p>
        </div>
    </div>
</div>`

// Append matlab jab bhi createCard function call ho tab phle container ki html uthao
// phir usme nayi html string jo bnayi h use append kar do  
container.innerHTML=container.innerHTML+htmlToAppend;

}

// get Container in which we have to add our card html again and again 
let container = document.querySelector(".container");



// get button, on pressing createCard Function will be called once
let button=document.getElementById("btn");
console.log(button);
// button.addEventListener("click",createCard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ","12:30","Your First HTML Website | Sigma Web Development Course - Tutorial #2","Code With Harry","5000000",23));
button.addEventListener("click",()=>{
    createCard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ","12:30","Your First HTML Website | Sigma Web Development Course - Tutorial #2","Code With Harry","5000000",23)
});


// Function Call
// createCard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ","12:30","Your First HTML Website | Sigma Web Development Course - Tutorial #2","Code With Harry","5000000",23)
// createCard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ","09:30","Your First HTML Website | Sigma Web Development Course - Tutorial #3","Code With Harry","132244420",145)
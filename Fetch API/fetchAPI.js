// https://free-apis.github.io/#/

const URL="https://dogapi.dog/api/v2/breeds/"; // URL of API

let promise=fetch(URL); // fetch function take API URL and other optional parameters as arguments and return a promise

console.log(promise);

// create a async function to get the data of API 
async function getDogData(){
    let promise = await fetch(URL); // so that execution of next statement remain pause
    
    
    console.log(promise.status);
    console.log(promise); 


}

// call the function
getDogData();


// or using arrow function 
const getDogInfo = async ()=>{

    let response = await fetch(URL);
    console.log(response.status);
    console.log(response);//JSON format [pehle XML m aata tha]
    // Now to use that response we've to convert this JSON format in to java script objects
   // json() method is used to convert that JSON into java script objects

   let data = await response.json(); // it will also return a promise, 
   // untill the promise is pending, we'll not go below that's why we used await keyword
   console.log("data from json");
   console.log(data);
   console.log(data.data);
   console.log(data.data[0]);
   console.log(data.data[0].attributes);

   let dogName = data.data[2].attributes.name;
   let Description =data.data[2].attributes.description;
   console.log(dogName)
   console.log(Description)


   // get name para
   let namePara = document.getElementById("name");
   namePara.innerHTML=`<h1> Name : ${dogName}</h1>`;


 // get desc para
 let descPara = document.getElementById("desc");
  descPara.innerHTML=`<h5> Description : ${Description}</h5>`;


  }
  getDogInfo()









    


  
  
  
  
  var i=0;
  
  async function printDogInfo(){
    let response = await fetch(URL);
   let data = await response.json(); 

    
    
   // get values
   let dogName = data.data[i].attributes.name;
   let Description =data.data[i].attributes.description;



    // get name para
    let namePara = document.getElementById("name");
      namePara.innerHTML=`<h1> Name : ${dogName}</h1>`;
  
  
    // get desc para
    let descPara = document.getElementById("desc");
     descPara.innerHTML=`<h5> Description : ${Description}</h5>`;
   
   
 
 
 
     // set the values
     namePara.innerHTML=`<h1> Name : ${dogName}</h1>`;
 
     descPara.innerHTML=`<h5> Description : ${Description}</h5>`;
     
    i++;
    if(i==10){
     i=0;
    }

  } 


  // get button 
  
  let button = document.getElementById("btn");
  button.addEventListener("click",printDogInfo)



  // Using Promises
  function printDogInfoUsingPromises(){
fetch(URL).then((response)=>{
return response.json()
}).then((data)=>{
  let dogName = data.data[1].attributes.name;
  let Description = data.data[1].attributes.description;

  console.log("Using Promises");
  console.log(dogName);

  console.log(Description);
})

  }
  printDogInfoUsingPromises();

  

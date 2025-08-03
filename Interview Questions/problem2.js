/*
2. The Double Trouble:
   You are tasked with writing a function that doubles each element in an array. 
   However, there's a catch: if the array contains consecutive duplicate elements, 
   only double one of them.

*/

let Arr=[1,9,3,5,6,4,7,7,8,2,2];

function doubleArrayElements(arr){

let result=[];
for(let i=0;i<arr.length;i++){

    if(Arr[i]==Arr[i-1]){
        result.push(Arr[i]);
        continue;
    }
result.push(Arr[i]*2);
}

return result;

}
let ans = doubleArrayElements(Arr);
console.log(ans);
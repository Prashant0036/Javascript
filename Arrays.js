let arr=[1,4,6,2,3,73];
console.log(arr)

// Length of Array
console.log("Length of array is "+arr.length)

// type of Array is Object
console.log(Array.isArray(arr)); // true
console.log("type of Array is "+typeof (arr))

// Array is mutable 
console.log("First element is "+arr[0]);
arr[0]=23;
console.log("First element is "+arr[0]);

// traverse Array using For in loop
console.log("traverse Array using For in loop");
for (let i in arr){
    console.log(arr[i]);
    // Here i refers the index
}


// traverse Array using For of loop
console.log("traverse Array using For of loop");
for (let i of arr){
    console.log(i);
    // Here i refers the elements
}

// For Each with Array
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

console.log("Sum of Array using For Each"+sum)

function myFunction(item) {
  sum += item;
}



// Array Functions
console.log("Array Functions");

// insertion from last
arr.push(13)
console.log("After Pushing 13 : \n"+arr);

// insertion from first
arr.unshift(5)
console.log("After inserting 5 from first : \n"+arr);

// Deletion from last and return
arr.pop()
console.log("After Poping 13 : \n"+arr);

// Deletion from first and return
arr.shift()
console.log("After deleting 5 from first : \n"+arr);

//find index of any element
console.log("Index of 4 : \n"+arr.indexOf(4));

// Delete any particular element, it creates a hole there
delete arr[3]
console.log("After deleting 3 : \n"+arr[3]);

// Slicing an Array
newArrayAfterSclicing=arr.slice(2,4); // from 2 to 3 index
console.log("New Array after slicing : \n"+newArrayAfterSclicing);

// Concate Two Arrays
console.log(arr.concat([1,2,3,4,5])); // returns new array

// Convert Array to String
console.log("array to string is "+arr.toString()); // Returns a Sring

// Convert into array from String
console.log(Array.from("Prashant")); //['P','r',----,'n','t']

// Join Array Elements with any word
console.log(arr.join("-")); // returns a string with elements separated by dash

// splicing an Array
console.log("splicing an Array");
arr.splice(2,0,10); // insert 10 at index 2 and delete 0 element
console.log(arr); // returns new array
console.log("splicing an Array after inserting 10 at index 2 and delete 3 elements:")
arr.splice(2,3,10); // insert 10 at index 2 and delete 3 element{[2],[3],[4]}
console.log(arr);

// Reverse an Array
arr.reverse()
console.log("Reversed Array :"+arr)

// sorting an Array
arr.sort()
console.log(arr)

// Sort based on first digit of Numbers
function sortAscending (a, b){return a-b};
arr.sort(sortAscending)
console.log(arr) 

// Map - map() creates a new array from calling a function for every array element.
console.log(arr.map(x => x/2)); // returns new array with each element divided by 2
// here x=> x*2 is one liner function

// Using another function to create map twice of previous array
function multiplyBy2(x){return x*2};
console.log(arr.map(multiplyBy2)); // returns new array with each element multiplied by 2


// Filter - filter() creates a new array with all elements that pass the test implemented by the provided function.
console.log(arr.filter(x => x>5)); // returns new array with elements greater than 5 

// Using another function to filter even numbers
function evenFilter(x){if(x%2==0) return true };
let evenNumArray=(arr.filter(evenFilter)); // returns new array with each element multiplied by 2
console.log("Filtered Even Num: "+evenNumArray);



//Reduce  reduce() method is used to apply a function to an array's elements to reduce the array to a single value
// reduce() takes two arguments:
// A callback function (with two parameters: accumulator and currentValue).
// An initial value (in this case, 0).

// The callback function is executed for each element of the array:
// accumulator: stores the cumulative result of the function (in this case, the sum).
// currentValue: is the current element being processed.

const number = [1, 2, 3, 4, 5];
const product = number.reduce(function(accumulator, currentValue) {
    return accumulator * currentValue;
}, 1); // 1 is the initial value

console.log(product); // Output: 120

// num=6, get array from 0 to num-1
let num=6;
console.log(Array.from(Array(5).keys()))
let arr1 = Array.from(Array(num).keys()); // get array from 0 to num-1
console.log(arr1); // [0, 1, 2, 3, 4, 5]
let arr2 = Array.from(Array(num+1).keys()); // get array from 0 to num
console.log(arr2); // [0, 1, 2, 3, 4, 5, 6]
arr2=arr2.slice(1,);
console.log(arr2); // [1, 2, 3, 4, 5, 6]

// factorial using reduce 
function factorial(n) {
    let ans=arr2.reduce((acc,cur_value)=> acc*cur_value,1) // 1 is value of initialization or accumulator
    return ans
}

let fact0=factorial(6)
console.log(fact0); // 720



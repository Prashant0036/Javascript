// 11. The Array Filterer:
//     You are building a search feature for your e-commerce site. 
//     Write a function named filterProducts that takes an array of product objects and a filter criterion.
//     The function should return a new array containing only the products that match the filter criterion.




function filterProducts(productArray, filterCriteria,min,max){
     
    
    let filteredProducts=[];

    
// traverse the array first
for(let productObject of productArray){
    // console.log(productObject);
    // traverse the object
    let values = Object.entries(productObject);
    for(let value_index in values){
        if(values[value_index[0]]==filterCriteria)
    }
    if(productObject.filterCriteria>=max && productObject.filterCriteria<=max)
        {
            filteredProducts.push(productObject);
}

}
return filteredProducts;
}
let productArray=[{productID:1,productName:"Jio Phone",price:1800},
    {productID:2,productName:"Realme 8",price:15000},
    {productID:3,productName:"Realme C12",price:12000},
    {productID:4,productName:"Realme XT",price:18000},
    {productID:5,productName:"One Plus 12",price:64000},
    {productID:6,productName:"Nothing 2A",price:21000}]

let filterCriteria= "price";
let min=10000;
let max=20000;

// console.log(Object.keys(productArray[0]));// return all keys as an array
// console.log(Object.entries(productArray[0]));// return list of list having key and value separated by comma
// console.log(Object.values(productArray[0]));// return all values as an array



console.log(filterProducts(productArray,filterCriteria,min,max)); 
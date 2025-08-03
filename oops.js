let obj={

    name : "Prashant",
    age : 25,
    occupation : "Software Engineer",


}
obj.name=obj.name + " Saraswat";

console.log(obj);

let  animal={
    
    eats : true,
    fly:false
}
let rabbit ={
    jump:true
}

rabbit.__proto__ = animal; // means rabbit is inheriting Animal object's property
console.log(rabbit.eats); 

// Classes and Objects


class Animal {
   constructor (name,color){
    // constructor is used to take input in class
    this.name=name; // making name available for whole class
    this.color=color; // making color available for whole class
    console.log("Object of Animal is created.....");



   }

    color = this.color;

    run() {
        console.log("I'm Runnig...");
    }

    eat(){
        console.log("I'm eating...");
    }
}

class Lion extends Animal{


    // overriding
    run(){
        // calling method of Parent Animal Class
    super.run();
    console.log("I'm running very fast.......");

}

    static roar(){
        console.log("I'm roaring.......");

    }

}
class Dog extends Animal {
     constructor (name,color){
       
            super(name,color); // calling super class construtor passing the received aguments
            console.log("Object of Dog is created.....");
     }
     

    bark(){
        console.log("I'm Barking...");
    }

}

// object creation of Dog
let dog = new Dog("Jerry","White"); // parameters will go in Dog class constructor
console.log(dog) 
dog.bark();
dog.run();// calling parent class function
console.log(dog.name);
console.log(dog.color);

 
// object creation of Lion
let lion =new Lion();
console.log(lion.__proto__) // Animal
console.log(lion)
lion.run()
// lion.roar() // can't because it's staic function
Lion.roar();


// getters and setters

class Flowers{


}

class Rose extends Flowers{
set(color){
if (color != "Red" || color != "Pink" || color != "White"){
    console.log("No varient like this...");
    return;
}
this.color = color;
}

get(){
    return this.color;
}

}


let rose = new Rose();
console.log(rose);

// set the color pink with the help of set method
// rose.set("Pink") // will set the color
rose.set("Green") // will not set the color 


// get the color of rose using get method
console.log(rose.get());



// Instance of 
console.log(rose instanceof Rose)  // true
console.log(rose instanceof Flowers)  // true
console.log(dog instanceof Rose)  // false

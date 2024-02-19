//primitive

//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

//Reference type /Non primitive 

//Array, Objects, Functions

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

console.log(typeof id);

const bigNumber = 1234567798018459569n
console.log(typeof bigNumber);

const fruits = ["apple", "banana", "watermelon"]

let myObj= {
    name : "Prachi",
    age : 29 //everthing inside {} is obj
}

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myFunction);

const temp = null

console.log(typeof temp);

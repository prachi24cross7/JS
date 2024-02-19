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

//Stack memory is for primitive datatype, 
//when stack memory is used, we get the copy of the variable
//Heap memory is for non primitive datatype,
//when heap memory is used, we get the reference of the variable,
//so whatever changes we will do on the variable, the original value would be changed

let myName = "Prachi"

let myLastName = myName

myLastName = "Singh"
console.log(myName);
console.log(myLastName);

let user = {
    email:"prachi@gmail.com",
    upi:"prachi@ybl"
}

let user2 = user

user2.email = "prachi@google.com"

console.log(user.email);
console.log(user2.email);

const myArrays = [0,1,2,3,4,5]
console.log(myArrays[1]);

const myArray2 = new Array(1,2,3,4,5,6,7,8)
console.log(myArray2[2]);

myArray2.push(6)
console.log(myArray2);
console.log(myArrays);
myArrays.pop()
console.log(myArrays);

myArrays.unshift(9) //adds the value 9 in the begining of the array
//which shifts all the existing values of the array to right
console.log(myArrays);
myArrays.shift() 
console.log(myArrays);

myArray2.shift() //removes the value from the begining
console.log(myArray2);

console.log(myArray2.includes(1));
console.log(myArray2.indexOf(1));

const newArr = myArray2.join() 

console.log(newArr);
console.log(typeof newArr);

console.log("A", myArray2);
const myna = myArray2.slice(1,3)
console.log(myna);
console.log("B", myArray2);

console.log("C", myArray2);
const myna2 = myArray2.splice(1,3)
console.log(myna2);
console.log("D", myArray2);



const score = 400
console.log(score);

const balance = new Number(500);
console.log(balance);

console.log(typeof balance.toString());

console.log(balance.toFixed(2));

const otherNumber = 236387.94494
console.log(otherNumber.toPrecision(6));

const hundreds = 1000000000
console.log(hundreds.toLocaleString('en-IN'));


// +++++++ Maths ++++++++ 

console.log(Math);
console.log(Math.abs(-4)); //changes minus values to positive
console.log(Math.round(4.7));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,3,5,2,1));
console.log((Math.max(8,5,3,2,5,7)));
console.log(Math.random()); //values would be between 0 to 1
console.log(Math.random()*10+1); //because value could be 0.01 so adding 1
console.log(Math.round((Math.random()*10) +1));

const min = 1
const max = 6

console.log(Math.round(Math.random()*(max - min ))+min);
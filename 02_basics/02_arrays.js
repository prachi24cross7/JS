const names = ["prachi", "naina", "sunaina"]
const names1 = ["prachi", "naina", "sunaina"]

const lastNames = ["singh", "kumar", "tiwari"]

names.push(lastNames) //it takes the lastNames array as a single value
console.log(names);
console.log(names[3]);
console.log(names[3][2]);

const fullName = names1.concat(lastNames) 
console.log(fullName);

const allNames = [...names1, ...lastNames] //spread operator
console.log(allNames);

const complexArray = [1,2,3,[4,5],6,[7,8,[9,10]]]
console.log(complexArray.flat(Infinity));

console.log(Array.isArray("Prachi"))
console.log(Array.from("Prachi"));

console.log(Array.from({name: "Prachi"})); //can't convert to array from key value

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
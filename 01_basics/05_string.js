const name = "Prachi"
const repoCount = 10

console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const lastName = new String("Singh") //String declaration

console.log(lastName);
console.log(lastName[2]);
console.log(lastName.__proto__);
console.log(lastName.length);
console.log(lastName.toUpperCase());
console.log(lastName.charAt(9));

console.log(lastName.indexOf('M'));

const newString = lastName.substring(0,3)
console.log(newString);

const anotherString = lastName.slice(-3, 4)
console.log(anotherString);

const invalidString = "       Prachi \n\n     "
console.log(invalidString);
console.log(invalidString.trim()); //trim works on whitespace and line terminators

const URLs = "https://localhost.com/Prachi%20Singh"

console.log(URLs.replace('%20',' '));

console.log(URLs.includes('MM'));

console.log(URLs.split('/'));
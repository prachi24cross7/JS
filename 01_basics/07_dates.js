let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let modifiedDate = new Date(2023, 0, 23) //Months starts with 0 in js
console.log(modifiedDate.toDateString());

let updatedDate = new Date(2023, 0, 35)
console.log(updatedDate.toDateString());

let newDate = new Date("2023-02-31") //here month will start from 01
console.log(newDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(modifiedDate.getTime());

console.log(Date.now());

let newDateNow = new Date()
console.log(newDateNow);
console.log(newDateNow.getHours());


console.log(newDateNow.toLocaleString('en-IN', {
    weekday: "short",
    
}))
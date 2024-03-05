//console.log((Math.PI));
const des = Object.getOwnPropertyDescriptor(Math, "PI")
//console.log(des);

const obj = {
    name : "Prachi",
    code : 250,
    isAvailable : true,

    bookCourse: function(){
        console.log(`${this.isAvailable} true`);
    }
}

//console.log(Object.getOwnPropertyDescriptor(obj, "name"));

//Object.defineProperty(obj, "name",{
    // writable:false,
    // enumerable: false})

    //console.log(Object.getOwnPropertyDescriptor(obj, "name"));

for(let [key, value] of Object.entries(obj)){
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);
}}




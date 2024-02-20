const obj = new Object() //singleton

const obj1 = {}
console.log(obj);
console.log(obj1);

obj.id="1"
obj.name="Prachi"
obj.isLoggedIn=false

console.log(obj);

const obj3 = {id: 2, name:"Naina", isLoggedIn:true}
console.log(obj3);

const user ={
    email:"prachi@gmail.com",
    fullname:{
        name:"Prachi",
        lastName:"Singh"
    }
}

console.log(user);
console.log(user.fullname);

const obj4 = {1:"a", 2:"b", 3:"c"}
const obj5 = {4:"d", 5:"e", 6:"f"}
const obj6 = {obj4, obj5}
console.log(obj6);

//const obj7 = Object.assign(obj4, obj5)
//console.log(obj7);
console.log(obj4);
//const obj8 = Object.assign({},obj4, obj5)
//console.log(obj8);
console.log(obj4);

console.log({...obj4, ...obj5});

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(obj.hasOwnProperty('name'));

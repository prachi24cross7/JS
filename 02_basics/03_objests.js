//singleton
//Object.create

//object literals

const mySym = Symbol("key1")



const JsUser = {
    name : "Prachi",
    "full Name":"Prachi Singh",
    [mySym]:"key1",
    age:29,
    location: "Bangalore",
    email:"prachi@gmail.com",
    isLoggedIn:false,

}

console.log(mySym);
console.log(JsUser[mySym]);
console.log(typeof (JsUser[mySym]));
console.log(JsUser["full Name"]);
console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(JsUser);
JsUser.email= "prachi@google.com"
//Object.freeze(JsUser)
JsUser.email="prachisingh@google.com"
//console.log(JsUser);

JsUser.greetings = function(){
    console.log("Namaste");
}

console.log(JsUser.greetings());
console.log(JsUser);

JsUser.greetings2 = function(){
    console.log(`Namaste ,${this.name}`)
}

console.log(JsUser.greetings2());

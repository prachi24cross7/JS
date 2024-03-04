//promise creation
const promiseOne = new Promise(function(resolve, reject){
    //async task
    //db calls
    //cryptography
    //network

    setTimeout(function(){
        //console.log("async task is completed")
        resolve()
    },1000)
})

//promise is an object 

//promise cosume
promiseOne.then(function(){
    //console.log("promise consumed")
})

new Promise(function(resolve, reject){ //other way
    setTimeout(function(){
        //console.log("async task 2")
        resolve()
    },1000)
}).then(function(){
    //console.log("promise consumed")
})

//3rd way
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Prach", email:"prachi@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    //console.log(user)
})

//4th way

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Prachi", password:"1234"})
        }else{
            reject('Something went wrong!')
        }
    },1000)
})

promiseFour.then((user) => {
    //console.log(user)
    return user.username
}).then((username) => {
      //  console.log(username);
}).catch(function(error){
    //console.log(error)
}).finally(() => {
    //console.log("The promise is either resolved or rejected");
})

//prmose 5

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Prach", email:"prach@gmail.com"})
        }else{
            reject('ERROR!!')
        }
    },1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        //console.log(response);
    } catch (error) {
        //console.log(error);
        
    }
}

consumePromiseFive()

////

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        //console.log(data)
    } catch (error) {
        //console.log(error)
    }
}

//getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
        console.log(error);
})
function myName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("C");
    console.log("H");
    console.log("I");
}

//myName()

function addTwoNumbers(){
    const num1=1
    const num2=1
    console.log(num1+num2);
}

addTwoNumbers()

function addNumbers(num1, num2){
    console.log(num1+num2);
}

addNumbers(1,2)

function addNum(num1, num2) {
    let result = num1+ num2
    return result    
}

const result1 = addNum(1,3)
console.log(result1);

function addNumber(num1, num2) {
    return num1+num2
}

console.log(addNumber(1,4))


function userLoggedIn(user) {
    if(!user){
        console.log("please enter an user name");
        return 
    }
    else
        return `${user} logged In`
    
}

console.log(userLoggedIn());
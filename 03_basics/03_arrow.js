const user = {
    name : "Prachi",
    age : 29,

    welcome : function () {
        console.log(`${this.name}, welcome`);
        console.log(this);
        
    }
}

user.welcome()
user.name= "Singh"
user.welcome()

console.log(this);

function thisTry() {
    console.log(this);
    
}

thisTry()

const arrw = function () {
    let user = "Prachi"
    console.log(this.user);
    
}

arrw()

const arrw1 = () => {
    let user = "Prachi"
    console.log(this.user);
}

arrw1()

const addTwo = (num1, num2) => {
    return num1+num2
}

console.log(addTwo(1,2));

const addTwoNumbers = (num1, num2) => num1+num2 //implicit return

console.log(addTwoNumbers(2,3))

const adding = (num1, num2) => ({user:"Prachi"})

console.log(adding(1,2))
let score = true

console.log(typeof score);

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" = 33
//"33abc" =NaN
//null = 0
//undefined = NaN
//true = 1
//false = 0

let isLoggedIn = ""
let booleanLoggedIn = Boolean(isLoggedIn)

console.log(booleanLoggedIn)

//1 => true 0 => false
//"Prachi" => true
//"" => false


//************Operation******************


let value  = 3
let negValue = -value
console.log(negValue)

let str1 = "Prachi"
let str2 = "Singh"

let str3 = str1 + str2
console.log(str3)

console.log("1"+2)
console.log("1"+"2")
console.log("1"+2+2)
console.log(1+"2"+"2")
console.log(1+2+"2");
console.log(1+"2"+2);

console.log((3+4)*5%3)

console.log(+true) //converts to boolean value
class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    getEmail(){
        return this.email
    }

    setEmail(value){
        this.email = value
    }
   

    get password(){
        //return this._password.toUpperCase()
        return `${this._password}Prach`
    }

    set password(value){
        this._password = value
    }
}

const prach = new User("prachi@gmail.com", "abc")
console.log(prach.password);
console.log(prach.email);
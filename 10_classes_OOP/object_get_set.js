const User = {
    _email: 'prachi@gmail.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const prach = Object.create(User)
console.log(prach.email);
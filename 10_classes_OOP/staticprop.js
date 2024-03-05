class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const prachi = new User("Prachi")
//console.log(prachi.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email;
    }
}

const teach = new Teacher("Prachi","prachi@gmail.com");
(teach.logMe());
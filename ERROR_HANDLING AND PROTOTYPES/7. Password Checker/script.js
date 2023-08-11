class user{
    constructor(username,password){
        this.username=username
        this.password=password
    }
    getPassword(){
        return this.password.replace(/./g,"*")
    }

setPassword(newp){
    let cnum=false
    let cucase =false
    for(let i= 0 ; i < newp.length ; i++){
        const char = newp .charAt(i)
        if(!isNaN(char)){
            cnum=true
        }else if(char === char.toUpperCase()){
cucase=true
        }
    }
    if(newp.length >=8 && cnum && cucase){
        this.password = newp
    }else{
        console.log("ERROR");
    }
}
}


const User = new user("sandip","sandip123")
console.log(User.getPassword());
User.setPassword("sandip@123456")
console.log(User.getPassword());
function getname(pepole){
    try{
        if(typeof pepole !=="object" || !pepole.name || pepole.age ){
            throw new Error("Invalid pararameter type");
        }
        return `Hello ${pepole.name}, you are ${pepole.age}`;
    }catch(error){
        return error.message}
    
}
console.log(getname({name : "sandip", age : 21}));
console.log(getname({name : "sandip"}));
console.log(getname(['name', "sandip"]));

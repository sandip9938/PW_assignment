const person ={
    name:"Mithun",
    age:21,
    adress:{
        city:'Bangalore',
        state:'Karnataka' 
    }
}



function exdata(object){
    const {name,adress:{city}}=object
    return {name, city}
}
console.log(exdata(person));
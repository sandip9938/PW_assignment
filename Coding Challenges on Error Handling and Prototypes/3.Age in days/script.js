const person = {
    firstname : "sandip",
    lastname : "pandye",age:22
}
function ageinday(personObject,cback){
 const fname =`${personObject.firstname}${personObject.lastname}`
 const ageinday = personObject.age*365
 cback(fname,ageinday)
}
function logresult(fname,ageinday){
    console.log(`${fname}'s Age in Days is ${ageinday}`)
}
//call the function with callback as parameter
// and pass it to another function
ageinday(person,logresult)
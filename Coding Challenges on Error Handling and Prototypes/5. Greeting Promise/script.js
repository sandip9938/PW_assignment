function greet(name){
    return new Promise((resolve)=>{
        const greeting = `Hello , ${name}!`
        resolve(greeting)
    })


}
greet("sandip").then((message)=>console.log(message))
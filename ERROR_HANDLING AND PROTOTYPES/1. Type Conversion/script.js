function ConvertoWord(string){
    try{
        const num = Number(string)
        if(Number.isNaN(num)){
            throw new Error("Its a Invalid Number ")
        }
        return num
    }
    catch(error){
        return error.message}
    
}
console.log(ConvertoWord("123"));
console.log(ConvertoWord("abc"));
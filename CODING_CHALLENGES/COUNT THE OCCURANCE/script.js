function countWords(string){
    const words= string.split(" ")
    const map = new Map()


    for(let number of words){
        if(map.has(number)){
            map.set(number,map.get(number)+1)
        }else{
            map.set(number, 1);
        }
    }
    return map
}


const sentence = "It seems like you've mentioned the word Could you please provide more context or clarify how you would liksentence.e me to assist you with it? Are you looking for help with generating a sentence, analyzing a sentence, or something else related to sentences?"

console.log(countWords(sentence));
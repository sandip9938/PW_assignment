function countVowels() {
    const textarea = document.getElementById('textarea').value.toLowerCase();
    const vowel = 'aeiou'
    let count = 0
    for(let i=0;i<textarea.length;i++){
        if(vowel.includes(textarea[i])){
            count++
        }
    }
    const resultElement = document.getElementById("result");
  resultElement.innerText = `Total vowels: ${count}`;
}
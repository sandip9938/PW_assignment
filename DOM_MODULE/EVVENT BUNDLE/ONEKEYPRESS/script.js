const display = document.getElementById('displaysomthng')
const text = document.getElementById('text')

text.addEventListener('keypress',function(e){
    display.innerText= "You have pressed the key "+ e.key
})
const dispay = document.getElementById('container')
const head = document.getElementById('display')

document.addEventListener('keyup',function(e){
  
    head.innerText = e.key + " It is Keyup"
   
})
document.addEventListener('keydown',function(e){
   
    head.innerText = e.key + " It is Keydown"
   
})








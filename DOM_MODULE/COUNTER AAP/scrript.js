// HTML CONTENT 

const Increment = document.getElementById('incrementBtn')
const Decrement = document.getElementById('dincrementBtn')
const Reset = document.getElementById('reset')
const countvalue =document.getElementById('counterValue')


// for increment button click

Increment.addEventListener('click', ()=> {
   const value = Number(countvalue.innerText)
   if(value>=10){
    alert("You have reached the maximum limit")
   }
   else{
    countvalue.innerText= value+1
   }
})

// for decrement button click

Decrement.addEventListener('click',()=>{
    let valuess =Number(countvalue.innerText);
    if(valuess>0){
      countvalue.innerText=valuess-1
    }else{
    alert("Negative value not allowed")
    }
})


// for reset button click

Reset.addEventListener('click',function(){
    countvalue.innerText="0"
})
const celinput=document.querySelector('.celcius > input')
const farinput=document.querySelector('.feramhit > input')
const kelinput=document.querySelector('.kelvin > input')


let btn = document.querySelector('.btn')

function number(number) {
    return Math.round(number*100)/100
}
celinput.addEventListener('input',()=>{
    let ctemp = parseFloat(celinput.value)
    let  ftemp = (ctemp*(9/5))+32
    let ktemp = ctemp+273.15
    farinput.value= number(ftemp)
    kelinput.value= number(ktemp)
})
farinput.addEventListener('input',()=>{
    let ftemp = parseFloat(farinputlinput.value)
    let  ctemp = (ftemp-32)*(5/9)
    let ktemp = (ftemp-32)*(5/9)+273.15
    celinputinput.value= number(ctemp)
    kelinputinput.value= number(ktemp)
})
kelinput.addEventListener('input',()=>{
    let ktemp = parseFloat(kelinputinput.value)
    let  ctemp = ktemp-273.15   
     let ftemp = (ktemp-273.15)*(9/5) +32
    celinputinput.value= number(ctemp)
    farinputinputinput.value= number(ftemp)
})
btn.addEventListener('click', ()=>{
    celinput.value = ""
    farinput.value = ""
   kelinput.value = ""
})
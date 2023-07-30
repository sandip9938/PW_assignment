let email= document.forms['form']['email']
let password =document.forms['form']['password']

const emailerror =document.getElementById('emailerror')
const passerror = document.getElementById('passerror')


email.addEventListener('text',emailverify)
password.addEventListener('text',passwordverify)




function validate() {
    if(email.value.length < 9){
        email.style.border= '2px solid red'
    emailerror.style.display='block'
        email.focus()
        return false
    }
    if(password.value.length < 8){
        password.style.border= '2px solid red'
    passerror.style.display='block'
        password.focus()
        return false
    }
}



function emailverify() {
    if(email.value.length >= 8){
        email.style.border= '2px solid green'
        emailerror.style.display='none'
            return true 
    }
  
}
function passwordverify() {
    if(password.value.length >= 5){
        password.style.border= '2px solid green'
        passerror.style.display='none'
            return true 
    }
}


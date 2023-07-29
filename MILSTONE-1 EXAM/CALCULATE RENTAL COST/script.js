let expenses =[]
let totalAmount = 0

const catagoryselect = document.getElementById('Catagory-select')
const name = document.getElementById('name')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addbtn = document.getElementById('Add')
const expensestable =document.getElementById('expensestable')
const totalamont  = document.getElementById('totalamont')
const amounte=document.getElementById('amount')

addbtn.addEventListener('click',()=>{
    const catagory = catagoryselect.value
    const amount = Number(amounte.value)
    const namee = name.value
    const datee =date.value
    const timee = time.value

    if(catagory === ''){
        alert("Please select a Catagory")
        return
    }
    if(isNaN(amount) || amount <=0 ){
        alert("Please enter an name ")
        return
    }

    if(namee === ''){
        alert("Please enter an name ")
        return
    }
    if(datee === ''){
        alert("Please enter an date ")
        return
    }
    if(timee === ''){
        alert("Please enter an time ")
        return
    }
    expenses.push({catagory, amount, namee, datee, timee})
    totalAmount += amount
    totalamont.textContent = totalAmount
    const newRow =expensestable.insertRow()
    const catagorycell= newRow.insertCell()
    const amountycell= newRow.insertCell()
    const namecell= newRow.insertCell()
    const datecell= newRow.insertCell()
    const timecell= newRow.insertCell()
    const deletecell= newRow.insertCell()
    const deletbtn = document.createElement('button')


    deletbtn.textContent = 'Delete'
    deletbtn.classList.add('delete_btn')
deletbtn.addEventListener('click',function () {
    expenses.splice(expenses.indexOf(expens),1)


    totalAmount -= expens.amount
   totalamont.textContent = totalAmount

   expensestable.removeChild(newRow)
})
  
const expens = expenses[expenses.length - 1]
catagorycell.textContent=expens.catagory
amountycell.textContent=expens.amount
namecell.textContent=expens.namee
datecell.textContent=expens.datee
timecell.textContent=expens.timee
deletecell.appendChild(deletbtn)


    })


    for(const expens of expenses){
        totalAmount += expens.amount
        totalamont.textContent=totalAmount
const newRow =expensestable.insertRow()
const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const nameCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const timecell = newRow.insertCell()
    const deleteCell = newRow.insertCell();
    const deletbtn = document.createElement('button')
    deletbtn.textContent ='Delete'
    deletbtn.classList.add ('delete_btn');
    deletbtn.addEventListener('click',function () {
        expenses.splice(expenses.indexOf(expens),1)
    
    
        totalAmount -= expens.amount
       totalamont.textContent = totalAmount
    
       expensestable.removeChild(newRow)
    })
    //create a button to be added in the last cell which will call function that deletes row from

    
    categoryCell.textContent=expens.catagory
    amountCell.textContent=expens.amount
    nameCell.textContent=expens.namee
    dateCell.textContent=expens.datee
    timecell.textContent=expens.timee
    deleteCell.appendChild(deletbtn)





    }
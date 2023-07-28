const dbtn = document.getElementById("dbtn");
const wbtn = document.getElementById("wbtn");
const deposit = document.getElementById("deposit");
const withdraw = document.getElementById("withdraw");
const totalamount = document.getElementById("total");
const dinput = document.getElementById("dm");


dbtn.addEventListener("click", function () {
  const value = dinput.value;
  const depovalue = Number(deposit.innerText) + Number(value);
  const balvalue = Number(totalamount.innerText) + Number(value);
  deposit.innerText = depovalue;
  totalamount.innerText = balvalue;
  dinput.value = " ";
});

wbtn.addEventListener('click',function () {
    const winput = parseFloat(document.getElementById("wm").value);
//   const value = winput.value
  if(isNaN(winput) || winput <= 0){
    alert("You don't have any balance to withdraw")
  }
    else if(Number(winput)>Number(totalamount.innerText)){
        alert("You don't have that much balance to withdraw")
    }
    else{
        const balanceValue = Number(totalamount.innerText) - Number(winput);
                 const withdrawValue = Number(withdraw.innerText) + Number(winput);
                 withdraw.innerText = withdrawValue;
                 totalamount.innerText = balanceValue;
                
    }
  
    
})






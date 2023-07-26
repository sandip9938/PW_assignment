document.getElementById("button").addEventListener("click", function () {
  const totalamount = parseFloat(document.getElementById("totalamount").value);
  const totalpepole = parseInt(document.getElementById("numberpepole").value);

  if (
    isNaN(totalamount) ||
    isNaN(totalpepole) ||
    totalamount <= 0 ||
    totalpepole <= 0
  ) {
    document.getElementById("result").innerHTML = "Please enter valid values.";
    return;
  }
  const peramount = totalamount / totalpepole;
  document.getElementById(
    "result"
  ).innerHTML = `Each person should pay: Rs. ${peramount.toFixed(2)}`;
});

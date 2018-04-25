function euroToPounds(){

  var amount = parseInt(document.getElementById("value1").value);
  var amount = 1;
  var pounds = amount * 0.86;
  var message = amount + ' euros converts to ' + pounds + ' sterling.';
  cansole.log(message);
  doc.getElementById("resultsentence").innerHTML = message;

}
function euroToUSDollars(){
	var amount = parseInt(document.getElementById("Value2").value);
	var amount = 1;
	var usdollars = amount * 1.06;
	var message = amount + ' euro converts to ' + usdollars + ' US Dollars';
	  cansole.log(message);
  doc.getElementById("resultsentence").innerHTML = message;
}

function euroToJapYen (){
	var amount = parseInt(document.getElementById("Value3").value);
	var amount = 1;
	var japyen = amount * 121.12;
	var message = amount + ' euro converts to ' + japyen + ' Japanese Yen';
	  cansole.log(message);
  doc.getElementById("resultsentence").innerHTML = message;
}

function euroToBitcoin (){
	var amount = parseInt(document.getElementById("Value4").value);
	var amount = 1;
	var bitcoin = amount * 0.00082;
	var message = amount + ' euro converts to ' + bitcoin + ' Bitcoin';
	  cansole.log(message);
  doc.getElementById("resultsentence").innerHTML = message;
}


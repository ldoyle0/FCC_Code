
function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var totalcid = 0;
  // Here is your change, ma'am.
  for (var i = 0; i < cid.length; i++){
    totalcid += cid[i][1];
  }
  
  if (totalcid > change){
    
  }
  
  return totalcid.toFixed(2);
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], 
["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
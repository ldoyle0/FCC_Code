
function checkCashRegister(price, cash, cid) {
  var change = +(cash - price).toFixed(2);
  var totalcid = 0;
  var denominations = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];
  
  // Here is your change, ma'am.
  for (var i = 0; i < cid.length; i++){
    totalcid += cid[i][1];
  }
  
  var totalCash = +totalcid.toFixed(2);

//Check to see if there is sufficient cash in the drawer or if the cash in the drawer is equivalent to the change needed  
  if (change > totalCash){
    return 'Insufficient Funds';
  }else if (change === totalCash){
    return 'Closed';
  }
  
  var changeArr = [];
  var cidDenom;
  var currentDenom;
  var changeAmount;
  
  for(var j = +cid.length - 1; j >= 0; j--){
    
    cidDenom = cid[j][1];
    currentDenom = cid[j][0];
    
    if(denominations[j] <= change){
  
      changeAmount = Math.floor(cidDenom/denominations[j]);
      
      if((denominations[j] * changeAmount) >= change){
        
        changeAmount = Math.floor(change / denominations[j]);
      }
      
      cidDenom = +(changeAmount * denominations[j]).toFixed(2);
      change = +(change - cidDenom).toFixed(2);
      cid[j][1] = cidDenom;
    }
    changeArr.push([currentDenom, cidDenom]);    
  }
  
  return changeArr;
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
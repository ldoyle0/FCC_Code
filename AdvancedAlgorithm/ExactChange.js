function checkCashRegister(price, cash, cid) {

  var change = cash - price;
  var denom = [0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00];

  var register = cid.reduce(function(acc, curr) {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, {total: 0});


  //Check to see if there is sufficient cash in the drawer or if the cash in the drawer is equivalent to the change needed  
  if (change > register.total) {
    return 'Insufficient Funds';
  }
  else if (change === register.total) {
    return 'Closed';
  }

  var changeArr = [];
  var value = 0;
  
  for (var i = denom.length - 1; i >= 0; i--){
    var cidDenom = cid[i][0];
    var cidValue = cid[i][1];
    
    if (denom[i] <= change){
      
      value = Math.floor(cidValue / denom[i]);
      
      if((denom[i] * value) >= change){
        
        value = Math.floor(change / denom[i]);
      }
      
      cidValue = Math.floor((denom[i] * value)*100)/100;
      change = Math.floor((change - cidValue)*100)/100;
      
      cid[i][1] = cidValue;
      
      changeArr.push([cidDenom, cidValue]);
    }
  }

  if (changeArr.length < 1 || change > 0) {
    return "Insufficient Funds";
  }


  return changeArr;
}


checkCashRegister(19.50, 20.00, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.10],
  ["QUARTER", 4.25],
  ["ONE", 90.00],
  ["FIVE", 55.00],
  ["TEN", 20.00],
  ["TWENTY", 60.00],
  ["ONE HUNDRED", 100.00]
]);
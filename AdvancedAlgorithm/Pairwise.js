function pairwise(arr, arg) {
  
  var sum1 = 0
  var arrPairs = [];
  
  for (var j = 0; j < arr.length; j++){
    for (var i = 0; i < arr.length; i++){
          sum1 = arr[j] + arr[i]
          if (i !== j && sum1 == arg && arrPairs.indexOf(i) < 0 && arrPairs.indexOf(j) < 0){
             arrPairs.push(j, i);
             break;
          }
    }
  }
  
  var arrSum = arrPairs.reduce(function(a,b){
     return a + b 
  },0);
  
  return arrSum;
}

pairwise([1, 4, 2, 3, 0, 5], 7) //should return 11.
pairwise([1, 3, 2, 4], 4) //should return 1.
pairwise([1, 1, 1], 2) //should return 1.
pairwise([0, 0, 0, 0, 1, 1], 1) //should return 10.
pairwise([], 100) //should return 0.
function smallestCommons(arr) {
  
  arr = arr.sort(function(a,b){
    return a-b;
  });
  
  var firstNumber = arr[0];
  var secondNumber = arr[1];
  var newArr = [];
  
  for (var i = arr[0]; i <= arr[1]; i++){
    newArr.push(i);
  }
  
  var m = 1;
  
  do{
    var multiple = firstNumber * m * secondNumber;
    for (var j = 1; j < newArr.length; j++){
      if (multiple % newArr[j] !== 0){
        break;
      }
    }
    m++;
  }while ( j !== newArr.length);
  
  return multiple;
}

smallestCommons([1,5]);
function steamrollArray(arr) {
  var flatArray=[];
  
  for (var i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      flatArray.push(arr[i]);
    } else {
      flatten(arr[i]);
    }
  }
 
  function flatten(nestedArr) {
    for (var j = 0; j < nestedArr.length; j++) {
      if (!Array.isArray(nestedArr[j])) {
        flatArray.push(nestedArr[j]);
      } else {
        flatten(nestedArr[j]);
      }
    }
  }
    
  return flatArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
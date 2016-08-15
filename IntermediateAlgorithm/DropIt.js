function dropElements(arr, func) {
  var slice = [];
  for(var i = 0; i < arr.length; i++){
    if(func(arr[i])){
      slice = arr.slice(i, arr.length + 1);
      break;
    }
  }
  return slice;
}

dropElements([1, 2, 3], function(n) {return n < 3; });

function truthCheck(collection, pre) {
  
  var results = [];
  
  for (var i = 0; i < collection.length; i++){
    if (collection[i].hasOwnProperty(pre) && collection[i][pre]){
      results.push(true);
    }
    else {
      results.push(false);
    }
  }
  return results.every( function(obj){return obj == true;});
}

truthCheck([{"single": "double"}, {"single": NaN}], "single");
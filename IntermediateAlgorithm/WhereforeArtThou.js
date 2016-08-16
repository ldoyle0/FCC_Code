
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  var keys = Object.keys(source);
  // Only change code below this line
  for (var i = 0; i < collection.length; i++){
    if (collection[i].hasOwnProperty(keys) && collection[i][keys] == source[keys]){
      arr.push(collection[i]);
    }
  }
  // Only change code above this line
  return keys;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
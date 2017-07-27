// JavaScript File

function permAlone(str) {
  
  var splitStr = str.split('');
  var permutations = [];
  var temp;
  
  function swap(i1, i2) {
    temp = splitStr[i1]
    splitStr[i1] = splitStr[i2]
    splitStr[i2] = temp
  }
  
  function heap(int){
    if (int === 1) {
      permutations.push(splitStr.join(''))
    }
    else {
      for (var i = 0; i != int; i++){
        heap(int-1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }
  
  heap(splitStr.length);
  
  var nonRepeats = permutations.filter(function(string) {
    return !string.match(/(.)\1+/g);
  });

  return nonRepeats.length;
}

permAlone('aab');


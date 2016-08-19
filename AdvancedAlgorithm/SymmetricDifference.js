function sym() {
  
  var master = [];
  
  for (var i = 0; i < this.length; i++){
    var current = this[i];
    if(master.indexOf(current) < 0){
      master.push(current);
    }
  }
  
//  var flatArr = master.reduce(function(a,b){
//    return a.concat(b);
//  },[]);
//  
//  return flatArr;
  return master;
}

sym([1, 2, 3], [5, 2, 1, 4]);
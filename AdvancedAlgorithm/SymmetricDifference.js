function sym(args) {
  
  var master = []
  
  for (var i = 0; i < args.length; i++){
    master.push(args[i]);
  }
  
  var flatArr = master.reduce(function(a,b){
    return a.concat(b);
  },[]);
  
  return args.length;
}

sym([1, 2, 3], [5, 2, 1, 4]);
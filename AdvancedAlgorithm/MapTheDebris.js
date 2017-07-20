// JavaScript File
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var T = 0;
  var periodArr = [];
  
  for (var i = 0; i < arr.length; i++){
    T = Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius+arr[i].avgAlt, 3)/GM));
    periodArr.push({name: arr[i].name, orbitalPeriod: T});
  }
  
  return periodArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) 
//should return [{name: "sputnik", orbitalPeriod: 86400}].
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
//should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var arrI = arr1.concat(arr2);

    for (var i = 0; i < arrI.length; i++) {

        arrI[i].reverse();

    }

    var arrR = arrI.sort();
    var totalInv = [];
    var newTotal = 0;

    for (var j = 1; j < arrR.length; j++) {

        if (arrR[j][0].valueOf() == arrR[j + 1][0].valueOf()) {
            
            newTotal = +arrR[j][1] + +arrR[j + 1][1];
            
            totalInv.push([arrR[j][0], newTotal]);

        }
        else {
            totalInv.push(arrR[j]);
        }
    } 

    return totalInv;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

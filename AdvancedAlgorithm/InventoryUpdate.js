function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    
    var fullInv = arr1.concat(arr2);
    
    fullInv.sort(function(item1, item2){
        if (item1[1] > item2[1]) {
            return 1;
        }
        if (item1[1] < item2[1]) {
            return -1;
        }
            return 0;
        });
    
    function makeObject (array) {
        var object = {};
        array.forEach(function(item){
            if (!object[item[1]]){
                object[item[1]] = item[0];
            } else {
                object[item[1]] += item[0];
            }
            
        });
        return object;
    }    
    
    var inventory = makeObject(fullInv);
    
    function createArray(object) {
        var array = [];
        for (var key in object) {
            array.push([object[key], key]);
        }
        return array;
    }
    
    return createArray(inventory);
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
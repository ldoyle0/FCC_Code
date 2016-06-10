// JavaScript File
function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var FnOdd = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            FnOdd += currNumber;
        }
        var added = currNumber + prevNumber;
        prevNumber = currNumber;
        currNumber = added;
    }

    return FnOdd;
}

sumFibs(4);
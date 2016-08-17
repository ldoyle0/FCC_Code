function addTogether() {
    
    function check(input){
        if (typeof input !== 'number'){
            return undefined;
        }
        else{
            return input;
        }
    }
    
    if (arguments.length > 1){
        var number1 = check(arguments[0]);
        var number2 = check(arguments[1]);
        if (number1 && number2){
            return number1 + number2; 
        }
        else {
            return undefined;
        }
    }
    else {
        var altNumber = arguments[0];
        
        if(check(altNumber)){
            
            return function(secondArg){
                if(altNumber && check(secondArg)){
                    return altNumber + secondArg;
                }
                else{
                    return undefined;
                }
            };
        }
    }
    
}

addTogether(2)([3]);
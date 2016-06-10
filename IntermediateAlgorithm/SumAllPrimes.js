function isPrime(num){
    for ( var i = 2; i < num; i++ ){
        if ( num % i === 0 ){
            return false;
        }
    }
    return true;
}

function sumPrimes(n){
    var primes = [2];
    for ( var i = 3; i < n; i++){
        if ( isPrime(i) ){
            primes.push(i);
        }
    }
    var total = primes.reduce(function(a,b){
        return a + b;
    });
    return total;
}

sumPrimes(977);
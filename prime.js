function isPrime(n){
    for(i = 2; i < n; i++){
        if(n%i == 0){
            return "Is not a prime number";
        }
    }
    return "Is a prime number";
}

var result = isPrime(2);
console.log(result);
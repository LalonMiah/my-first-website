function forFactorial(n){
    var fact = 1;
    for(i=1; i <= n; i++){
        fact = fact*i;
        console.log(i,fact);
    }
    return fact;
}

var result = forFactorial(10);
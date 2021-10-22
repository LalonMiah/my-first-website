function fibonacchi(num){
    var fibo = [0,1];

    for(i = 2; i<=num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

var result = fibonacchi(10);
console.log(result);
function factorialWhile(num){
    var i = 1;
    var fact = 1;
     while(i <= num){
        fact = fact*i;
        console.log(i, fact);
        i++;
        
     }
     return fact;
}

 var result = factorialWhile(10);
// console.log(result);
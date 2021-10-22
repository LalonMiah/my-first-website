function recursiveFact(n){
    if(n===0 || n===1){
        return 1;
    }else{
        return recursiveFact(n-1)*n;
    }
}

var result = recursiveFact(1);
console.log(result);
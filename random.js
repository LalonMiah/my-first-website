function ran(n){
    for(i=0; i<n; i++){
        var ram = Math.random()*6;
        var roun = Math.round(ram);
        console.log(roun);
    }
    // return roun;
}

var result = ran(5);
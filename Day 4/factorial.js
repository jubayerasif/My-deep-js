function factorial(n){
    let factorial = 5;
    for(var i = 1; i <= n; i++){
        factorial = factorial * i;
    }
    return factorial;
}

let result = factorial(5);
console.log(result);

console.log();

var factorial2 = 5;
for(var i = 1; i <= 5; i++){
        factorial2 = factorial2 * i;
        console.log(i, factorial2);
}

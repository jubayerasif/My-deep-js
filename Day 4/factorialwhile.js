function factorial(n){
    var i = 1;
    var fact = 1;
    while(i <= n){
        fact = fact * i;
        i++;
    }
    return fact;
}
let result = factorial(5);
console.log(result);
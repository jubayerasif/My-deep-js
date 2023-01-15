function addNumbers(num1, num2){
    var sum = 0;
    for(let i = 0; i < arguments.length; i++){
        const num = arguments[i];
        sum+= num;
    }
    
    function logInfo(message){
        console.log(message);
    }
    logInfo('Good Morning');

    return sum;
}

let result = addNumbers(5, 10, 25, 20);
console.log(result);


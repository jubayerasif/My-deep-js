let name= 'Tom';

function add(num1, num2){
    window.result = num1 + num2;
    // console.log('In result', result);
    function double(num){
        return num * 2;
    }
    // return result;
    let total = double(result);
    return total;

}

let sum = add(30, 20);
console.log(sum);
console.log('Out result', result);


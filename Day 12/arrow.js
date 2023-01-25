// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function myCode(num){
//     return num * 2;
// }

const doubleIt = (num) => num * 2;
const add = (x, y = 0) => x + y;
const get5 = () => 10;
const bigNum = (x, y) => {
    const sum = x + y;
    const diff = x-y;
    const result = sum * diff;
    return result;
};

const result = doubleIt(15);
const result1 = add(15, 25);
const result2 = get5();
const result3 = bigNum(10, 5);

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);

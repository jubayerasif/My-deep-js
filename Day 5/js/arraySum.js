let numbers = [41, 75, 9, 23, 41, 56, 102, 35, 66, 82];
function getArraySum(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        sum+= element;
    }   
    return sum;
}
let result = getArraySum(numbers);
console.log(`Total sum of the numbers is: ${result}`);
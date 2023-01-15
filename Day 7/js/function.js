// function evenify_all(nums){
//     for(let i = 0; i < nums.length; i++){
//         const num = nums[i];
//         if(num % 2 == 0){
//             console.log(num, `: is even number`);
//         }else{
//             console.log(num*2, `: is odd number`);
//         }
//     } 
// }

function evenify(num){
    let result;
    if(num % 2 == 0){
        result = num;
    }else{
        result = num*2;
    }
    return result;
}

let result = evenify(13);
const square = result* result;
console.log(`square: `, square);

function evenify_all(nums){
    let even_array = [];
    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        let result = evenify(num);
        even_array.push(result);
    } 
    return even_array;
}



let nums = [5, 12, 89, 45, 18, 8];
evenify_all(nums);

let friends_age = [13, 17, 19, 20, 18];
// evenify_all(friends_age)


// function evenify(num){
//     if(num % 2 == 0){
//         console.log(num, `: is even number`);
//     }else{
//         console.log(num*2, `: is odd number`);
//     }
// }

// function evenify_all(nums){
//     for(let i = 0; i < nums.length; i++){
//         const num = nums[i];
//         evenify(num);
//     } 
// }

function evenify_all(nums){
    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        if(num % 2 == 0){
            console.log(num, `: is even number`);
        }else{
            console.log(num*2, `: is odd number`);
        }
    } 
}

let nums = [5, 12, 89, 45, 18, 8];
evenify_all(nums);

let friends_age = [13, 17, 19, 20, 18];
evenify_all(friends_age)


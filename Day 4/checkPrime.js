// function checkprime(n){
//     for(i = 2; i < n; i++){
//         console.log(i, n % i);
//         if(n % i == 0){
//             console.log("Not a prime number");
//         }else{
//             console.log("Your number is a prime number");
//         }
//     }
// }
// const result = checkprime(22);
// console.log(result);



function checkprime(n){
    for(i = 2; i < n; i++){
        if(n % i == 0){
            return 'Not a prime number';
        }
    }
    return 'Is a prime number';
}
const result = checkprime(138);
console.log(result);

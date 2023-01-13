// const year = 3688;
// let reminder = year %4;
// if(reminder == 0){
//     console.log("This is a Leap Year");
// } else {
//     console.log("This is not a Leap Year");
// }

function isLeapYear(year) {
    let reminder = year %4;
    if(reminder == 0){
        return true;
    } else {
        return false;
    }    
}
const checkyear = isLeapYear(2000);
console.log(checkyear);
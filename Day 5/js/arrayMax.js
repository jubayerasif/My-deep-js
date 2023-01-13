let marks = [41, 75, 9, 23, 41, 56, 102, 35, 66, 82];
let max = marks[0];
for(let i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log(`Your Highest Value: ${max}`);
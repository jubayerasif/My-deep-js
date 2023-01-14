let numbers = [41, 75, 35, 23, 41, 56, 102, 35, 66, 82];
let uniqueName = [];
for(let i = 0; i < numbers.length; i++){
    let element = numbers[i];
    let index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}

console.log(uniqueName);

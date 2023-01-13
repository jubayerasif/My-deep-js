let speech = `I am a programmer. I can write code`;
let count = 0;
for(let i = 0; i < speech.length; i++){
    var char = speech[i];
    if(char == ` ` && speech[i - 1] != ` `){
        count++;
    }
}
console.log(count);
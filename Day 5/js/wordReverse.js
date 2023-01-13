function reversString(str){
    let reverse = ``;
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
let speech = `I am a programmer. I can write code`;
let reverseSpeech = reversString(speech);
console.log(reverseSpeech);
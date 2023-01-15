function explainCallback(name, age, task){
    console.log(`Your name:`, name);
    console.log(`Your age:`, age);
    task();
}
function studyHard(){
    console.log(`Studies more than 5 hours`);
}
function takeBreak(){
    console.log(`Takes break for only half hours`);
}
function playTime(){
    console.log(`Plays only Cricket`);
}

explainCallback('Asifur Hasan', 17, studyHard);
explainCallback('Asifur Hasan', 17, takeBreak);
explainCallback('Asifur Hasan', 17, playTime);




 

















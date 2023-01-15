function explainCallback(name, age, task){
    console.log(`Name:`, name);
    console.log(`Age:`, age);
    task();
}
function studyHard(){
    console.log(`Task: Studies more than 5 hours`);
}
function takeBreak(){
    console.log(`Task: Takes break for only half hours`);
}
function playTime(){
    console.log(`Task: Plays only Cricket`);
}

explainCallback('Asifur Hasan', 17, studyHard);
explainCallback('Taskin Hasan', 17, takeBreak);
explainCallback('Sakib AL Hasan', 17, playTime);


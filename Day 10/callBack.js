//When and how to use Callback functions

// function welcomeGuest(name) {
//     console.log(name);
// }

// const actorName = 'Bruce Wayne';
// welcomeGuest(actorName);

function welcomeGuest(name, greetHandler) {
  greetHandler(name);
}

const actorName = "Bruce Wayne";

function greetMorning(name) {
  console.log("Good Morning", name);
}
function greetAfternoon(name) {
  console.log("Good Afternoon", name);
}

welcomeGuest(actorName, greetAfternoon);


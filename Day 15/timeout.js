
function doSomething(){
    console.log(3333);
}
console.log(222);
// setTimeout(doSomething, 5000);
console.log(4444);

// setTimeout(function(){
//     console.log('Waiting list');
// }, 4000)
// setTimeout(() => {
//     console.log('Waiting list');
// }, 4000)

setInterval(() =>{
    console.log('Waiting list for Interval');
}, 3000)
console.log(4444);
console.log(4444);

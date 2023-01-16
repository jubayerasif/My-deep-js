// function handleClick(){
//     // console.log("Someone Clicked Me");
//     // console.log(new Date());
//     document.body.style.backgroundColor = 'Pink';
// }
// const secondButton = document.getElementById('second');
// // secondButton.onclick = handleClick;
// // secondButton.addEventListener('click', handleClick)

// const lastButton = document.getElementById('last').addEventListener('click', function(){
//     document.body.style.backgroundColor = 'Yellow';
// })

// cont firstParagraph = document.getElementById('first').addEventListenet('click', function(){
//     document.body.style.Color = 'Red';
//     console.log('item');
// })

document.getElementById('first').addEventListener('click', function(event){
    console.log('first item clicked');
    event.stopPropagation();
});
document.getElementById('mylist').addEventListener('click', function(event){
    console.log('Ul clicked');
});
document.getElementById('container').addEventListener('click', function(event){
    console.log('Container clicked');
});









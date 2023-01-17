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

// document.getElementById('first').addEventListener('click', function(event){
//     console.log('first item clicked');
//     event.stopPropagation();
// });
// document.getElementById('mylist').addEventListener('click', function(event){
//     console.log('Ul clicked');
// });
// document.getElementById('container').addEventListener('click', function(event){
//     console.log('Container clicked');
// });


// let items = document.getElementsByClassName('item');
// for(let i = 0; i < items.length; i++){
//     let item = items[i];
//     // console.log(item);
//     item.addEventListener('click', function(event){
//         // console.log(this)
//         // console.log(event.target.innerText);
//         event.target.parentNode.removeChild(event.target);

//     });
// }

document.getElementById('addNew').addEventListener('click', function(event){
    let itemParent = document.getElementById('mylist');
    let newItem = document.createElement('li');
    newItem.innerText= 'Brand New Item';
    itemParent.appendChild(newItem);
})

document.getElementById('mylist').addEventListener('click', function(event){
    // console.log(this, event.target);
    event.target.parentNode.removeChild(event.target);
});


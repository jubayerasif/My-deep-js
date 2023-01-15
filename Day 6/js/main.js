let authors = document.getElementsByClassName('author');
for(let i = 0; i <authors.length; i++){
    let element = authors[i];
    console.log(element.innerHTML);
    element.innerHTML = 'Writer-' + i;
    element.style.backgroundColor = 'lightblue';
}

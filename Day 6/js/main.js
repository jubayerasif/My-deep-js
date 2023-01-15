let authors = document.getElementsByClassName('author');
for(let i = 0; i <authors.length; i++){
    let element = authors[i];
    console.log(element.innerHTML);
    element.innerHTML = 'Writer-' + i;
    element.style.backgroundColor = 'lightblue';
}
// document.getElementById('best').setAttribute('title', 'You are article-1');

const article = document.getElementById('first-article');
const newP = document.createElement('p');
newP.innerHTML = 'This is a second try';
article.appendChild(newP); 
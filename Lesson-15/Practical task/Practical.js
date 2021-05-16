'Use Strict';

var container = document.getElementById('container'),
    button = document.getElementsByTagName('input')[0];

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

var body = document.getElementsByTagName('body')[0];
body.onload = function () {
    localStorage.clear();
};

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

button.onclick = function () {
    var links = firstPar.children;

    for (var i = 0; i < links.length; i++) {
        links[i].classList.add('links');
    }
};
secondPar.addEventListener('click', setLocalStorage);

function setLocalStorage(event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    var target = event.target;

    if (target.tagName == 'A' && localStorage.getItem(target.innerText) == null) {
        localStorage.setItem(target.innerText, JSON.stringify({ path: target.href }));
        target.href = '#';
        alert('Ссылка была сохранена');
    }
    secondPar.removeEventListener('click', setLocalStorage);
    secondPar.addEventListener('click', setLocalStorage);
}
secondPar.addEventListener('click', getLocalStorage);

function getLocalStorage(event) {
    event.preventDefault();
    var target = event.target;

    if ((target.tagName == 'A' && localStorage.getItem(target.innerText)) != null) {
        var href = JSON.parse(localStorage.getItem(target.innerText));
        alert(href.path);
    }
    secondPar.addEventListener('click', setLocalStorage);
}









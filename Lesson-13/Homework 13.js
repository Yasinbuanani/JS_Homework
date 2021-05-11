'Use Strict';

var tbody = document.getElementsByTagName('tbody')[0],

    table = document.getElementsByTagName('table')[0];

table.addEventListener('click', function makeDelegation(event) {
    var target = event.target;

    if (target.tagName == 'TH') {
        makeClickTh(target);
    }
    if (target.tagName == 'TD') {
        makeClickTd(target);
    }
});

function makeClickTh(elem) {
    var newTr = document.createElement('tr');

    newTr.innerHTML = "<td></td><td></td><td></td>";

    var tr = document.getElementsByTagName('tr')[0];

    tbody.insertBefore(newTr, tr);
}

function makeClickTd(elem) {
    var input = document.createElement('input');

    input.value = elem.innerHTML;

    elem.innerHTML = null;

    elem.appendChild(input).focus();

    input.addEventListener('blur', function () {
        elem.innerHTML = input.value;

        if (elem.innerHTML === '') {
            elem.style.backgroundColor = 'white';
        } else {
            elem.style.backgroundColor = 'antiquewhite';
        }
        elem.addEventListener('click', makeClickTd);
    });
    input.addEventListener('keypress', function (event) {
        if (event.keyCode == 13) {
            elem.innerHTML = input.value;
        }
    });
    elem.removeEventListener('click', makeClickTd);
}






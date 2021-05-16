'Use Strict';

var x = document.getElementById('x'),
    y = document.getElementById('y'),
    create = document.getElementById('create'),
    body = document.getElementsByTagName('body')[0],
    table = document.createElement("table");

create.setAttribute('disabled', true);


x.addEventListener('keyup', makeXKeyup);
function makeXKeyup() {
    if (checkInput()) {
        create.setAttribute('disabled', true);
    } else {
        create.removeAttribute('disabled');
    }
}

y.addEventListener('keyup', makeYKeyup);
function makeYKeyup() {
    if (checkInput()) {
        create.setAttribute('disabled', true);
    } else {
        create.removeAttribute('disabled');
    }
}

function checkInput() {
    if (x.value.length && y.value.length) {
        return false;
    }
    return true;
}

create.addEventListener('click', checkNumber);
function checkNumber(event) {
    event.preventDefault();
    table.innerHTML = null;
    if (x.value > 10 || x.value < 1 || x.value != parseInt(x.value, 10)) {
        alert('Ошибка!!!!!! Введите в поле X целое число от 1 до 10');
        x.value = null;
        makeXKeyup();
        x.focus();
    } if (y.value > 10 || y.value < 1 || y.value != parseInt(y.value, 10)) {
        alert('Ошибка!!!!!! Введите в поле Y целое число от 1 до 10');
        y.value = null;
        makeYKeyup();
        y.focus();
    } else if (x.value && y.value) {
        var xvalue = x.value;

        var yvalue = y.value;

        x.value = null;
        y.value = null;
        makeTable(xvalue, yvalue);
        makeYKeyup();
    }
}

function makeTable(x, y) {
    for (var i = 1; i <= y; i++) {
        var tr = document.createElement('tr');

        for (var j = 1; j <= x; j++) {
            var td = document.createElement('td');

            if (i % 2 == j % 2) {
                td.className = "black";
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    body.appendChild(table);
}

table.addEventListener('click', makeDelegation);
function makeDelegation(event) {
    var target = event.target;

    if (target.tagName == 'TD') {
        makeClickTd(target);
    }
}

function makeClickTd() {
    var tableData = document.getElementsByTagName('td');

    for (var i = 0; i < tableData.length; i++) {
        if (tableData[i].className == "black") {
            tableData[i].className = "white";
        } else {
            tableData[i].className = "black";
        }
    }
}








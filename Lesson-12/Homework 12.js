'Use Strict';

// Задание 1

function makeNamesInObj(arr) {
    var namesArr = [];

    arr.map(function (item) {
        var namesInObj = {
            name: item
        };
        return namesArr.push(namesInObj);
    });
    return namesArr;
}

console.log(makeNamesInObj(['Vasya', 'Petya', 'Kolya', 'Ivan']));


// Задание 2

function makeTime(arr) {
    var time = arr.reduce(function (prev, current) {

        return prev + ' : ' + current;
    }, 'Текущее время');

    return time;
}
console.log(makeTime(['00', '13', '24']));

// Заданbt 3

function countVowels(str) {
    var strArr = str.toLowerCase().split('');

    var vowels = "аеёиоуыэюяaeiouy";

    var result = strArr.reduce(function (sum, val) {
        if (vowels.indexOf(val) !== -1) {
            sum++;
        }

        return sum;
    }, 0);

    return result;
}

console.log(countVowels('hEllo'));
console.log(countVowels('ПрИвет'));

// Задание 4

function countSentencesLetters(text) {
    var textSplit = text.split(/[\.!\?]+/);

    textSplit.map(function (sentence) {
        if (!sentence) {
            textSplit.pop();
        } else {
            var letters = sentence.split(/[' ',]+/).join('');

            console.log(sentence + ': Letters quantity is:' + letters.length);
        }
    });
}

console.log(countSentencesLetters('Привет, студент! Студент... Как дела, студент?'));


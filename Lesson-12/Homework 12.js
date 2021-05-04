'Use Strict';

// Задание 1

var names = ['Vasya', 'Petya', 'Kolya', 'Ivan'];

var namesInObj = [];

var MakeNamesInObj = names.map(function (name) {

    return namesInObj.push({ name });

});

console.log(namesInObj);


// Задание 2

var arr = ['00', '13', '24'];

var time = arr.reduce(function () {
    return ('Текущее время : ' + arr.join(' : '));
});

console.log(time);

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
    textSplit.pop();

    textSplit.map(function (sentence) {
        var letters = sentence.split(/[' ',]+/).join('');

        console.log(sentence + ': Letters quantity is:' + letters.length);
    });
}

console.log(countSentencesLetters('Привет, студент! Студент... Как дела, студент?'));


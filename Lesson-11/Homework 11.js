'Use Strict';

// Задание 1

var arr = [-1, 0, 2, 34, -2];

var positiveArr = arr.filter(function (number) {

  return number > 0;
});

console.log(positiveArr);

// Задание 2

var firstPositiveArr = arr.find(function (number) {

  return number > 0;
});

console.log(firstPositiveArr);

// Задание 3

var isPalindrome = function (word) {
  if (word.toLowerCase() === word.split('').reverse().join('').toLowerCase()) {

    return true;
  }

  return false;
};

console.log(isPalindrome('шалаШ'));
console.log(isPalindrome('привет'));

// Заданеи 4

var areAnagrams = function (word1, word2) {
  if (word1.split('').sort().join('') === word2.split('').sort().join('')) {

    return true;
  }

  return false;
};

console.log(areAnagrams('кот', 'отк'));
console.log(areAnagrams('кот', 'атк'));
console.log(areAnagrams('кот', 'отко'));

// Задание 5

var divideArr = function (arr, size) {
  var arrays = [];

  while (arr.length > 0) {
    arrays.push(arr.splice(0, size));
  }

  return arrays;
};

console.log(divideArr([1, 2, 3, 4], 2));
console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3));

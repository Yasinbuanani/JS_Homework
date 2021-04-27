'Use Strict';

// Задание 1

function Animal(name) {
  this.name = name;

  this.foodAmount = 50;
}

Animal.prototype.formatFoodAmount = function () {

  return this.foodAmount + ' гр.';
};

Animal.prototype.dailyNorm = function (amount) {
  if (!arguments.length) {
    return this.formatFoodAmount();
  } else if (amount < 50 || amount > 500) {
    throw new Error('Невозможное количество корма.');
  }
  this.foodAmount = amount;
};

Animal.prototype.feed = function () {
  console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};

function Cat(name) {
  Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.constructor = Cat;

Cat.prototype.feed = function () {
  var resultFeed = Animal.prototype.feed.apply(this);

  console.log(resultFeed + ' Кот доволен ^_^');

  return this;
};

Cat.prototype.stroke = function () {
  console.log('Гладим кота.');

  return this;
};


var barsik = new Cat('Барсик');

var dog = new Animal('dog');

console.log(dog.feed());
console.log(barsik.feed().stroke().stroke().feed());

barsik = null;

// Задание 2

var initialObj = {
  string: 'Vasya',
  number: 30,
  boolean: true,
  undefined: undefined,
  null: null,
  array: [1, 2, 3],
  object: {
    string2: 'Petrov',
    object2: {
      array2: [{}, {}]
    },
    object3: {}
  },
  method: function () {
    alert('Hello');
  }
};

function deepClone(obj) {
  var clObj = {};

  if (obj.length) {
    clObj = [];

  } else if (typeof obj === 'object' && !obj.lengt && obj !== null) {
    clObj = {};
  } else {

    return obj;
  }

  for (var i in obj) {
    if (typeof obj[i] !== 'object' || obj[i] === null) {
      clObj[i] = obj[i];
    } else if (typeof obj[i] === 'object' && obj[i] !== null) {
      clObj[i] = deepClone(obj[i]);

      continue;
    }
  }

  return clObj;
}

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';

clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);

// Задание 3

function compareObject(a, b) {
  if (a === b) {

    return true;
  }

  if (Array.isArray(a) && Array.isArray(b)) {

    if (a.length !== b.length) {

      return false;
    }

    for (var key in a) {
      if (!compareObject(a[key], b[key])) {

        return false;
      }
    }

    return true;
  }

  if (typeof a === 'object' && typeof b === 'object' &&
    !Array.isArray(a) && !Array.isArray(b)) {

    if (Object.keys(a).length !== Object.keys(b).length) {

      return false;
    }


    for (var i in a) {
      if (typeof a[i] !== 'object' && typeof b[i] !== 'object' &&
        typeof a[i] !== 'function' && typeof b[i] !== 'function') {

        if (a[i] !== b[i]) {

          return false;
        }
      }

      if (typeof a[i] === 'function' && typeof b[i] === 'function') {

        if (a[i].toString() === b[i].toString()) {

          return true;
        }
      }

      if (!compareObject(a[i], b[i])) {

        return false;
      }
    }

    return true;
  }

  return false;
}

console.log(compareObject(initialObj, clonedObj));

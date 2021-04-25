'Use Strict';
function Animal (name){
   
    var self = this;

    self._foodAmount = 50;

    self._formatFoodAmount = function(){
        return self._foodAmount + ' гр.';
    };

    self.dailyNorm = function(amount){
        if(!arguments.length){
            return self._formatFoodAmount();
        }else if(amount < 50 || amount > 500){
            throw new Error('Невозможное количество корма.');
        }
        self._foodAmount = amount;
    };

    self.name = name;

    self.feed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };
}

function Cat(name) {
Animal.apply(this, arguments);

var animalFeed = this.feed;

this.feed = function(){
  console.log(animalFeed() + ' Кот доволен ^_^');
  return this;
    };

this.stroke = function(){
    console.log('Гладим кота.');
    return this;
    };
}

var barsik = new Cat('Барсик');

var dog = new Animal('dog');

console.log(dog.feed());
console.log(barsik.feed().stroke().stroke().feed());

barsik = null;
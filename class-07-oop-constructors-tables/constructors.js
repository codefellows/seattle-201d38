'use strict';

var gregor = {
  firstName : 'Sir Gregor',
  lastName : 'Sanchez',
  favoriteFood : 'Natural Balance Platefulls',
  introduction: function() {
    return 'Hi, my name is ' + this.firstName + ' ' + this.lastName + '. I am a cat, and I like to eat ' + this.favoriteFood;
  }
};

var hound = {
  firstname : 'The Hound',
  lastname : 'Sanchez',
  favoritefood : 'Tuna',
  introduction: function() {
    return 'Hi, my name is ' + this.firstName + ' ' + this.lastName + '. I am a super cute cat, and I like to eat ' + this.favoriteFood;
  },
  likesToEat: function() {
    return 'I like to eat ' + this.favoriteFood;
  }
};
console.log(hound.likesToEat());
console.log(gregor.introduction());
console.log(hound.introduction());

function Cat(firstName, lastName, favoritefood, isCute) {
  if(firstName === undefined || lastName === undefined || favoritefood === undefined
  || isCute === undefined) {
    return undefined;
  }
  // Vinicio - we store here information we want to track about our cats
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteFood = favoritefood;
  this.isCute = isCute;
  this.type = 'Cat';

  this.introduction = function() {
    return 'Hi, my name is ' + this.firstName + ' ' + this.lastName + '. I am a cat, and I like to eat ' + this.favoriteFood;
  };
}

Cat.prototype.likesToEat = function() {
  // Vinicio - `THIS` and prototype BELONG TOGETHER
  return 'I like to eat ' + this.favoriteFood; // Vinicio - this, this!
};

Cat.speak = function() {
  return 'meow  :3';
};

var buddy = new Cat('Buddy', 'Hamm', 'Mice',true);
var gary = new Cat('Gary', 'Grampa', 'Homemade dog food',true);
console.log(buddy.introduction());
console.log(gary.introduction());
console.log(gary.likesToEat());
console.log(Cat.speak());

console.log(buddy instanceof Cat);
console.log(gary instanceof Cat);
console.log(gregor instanceof Cat);
console.log(hound instanceof Cat);
console.log('hound likes to bite' instanceof Cat);
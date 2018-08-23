'use strict'; // Vinicio - this will be in EVERY file I write

function Cat(firstName, lastName, favoriteFood) {
  if(firstName === undefined || lastName === undefined || favoriteFood === undefined) {
    return undefined;
  }
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteFood = favoriteFood;

  this.introduction = function() { // will not be saved
    return 'Hi, my name is ' + this.firstName + ' ' + this.lastName +
      '. I am a cat, and I like to eat ' + this.favoriteFood;
  };
}

var CATS = 'cats';
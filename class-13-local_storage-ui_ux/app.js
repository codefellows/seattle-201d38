'use strict';

function Cat(firstName, lastName, favoritefood) {
  if(firstName === undefined || lastName === undefined || favoritefood === undefined) {
    return undefined;
  }

  // Vinicio - we store here information we want to track about our cats
  this.firstName = firstName; // saved!
  this.lastName = lastName; // saved!
  this.favoriteFood = favoritefood; // saved!
  this.lives = 9;

  this.introduction = function() { // will not be saved
    return 'Hi, my name is ' + this.firstName + ' ' + this.lastName + '. I am a cat, and I like to eat ' + this.favoriteFood;
  };
}

var USER_NAME = 'user-name';
// Vinicio - to use values from local storage, we need to:
//           1) Check if the value is present
//           2) Use the value
//           3) Save the value
if(localStorage.getItem(USER_NAME) === null) {
  // Vinicio - the name is NOT in local storage, let's ask for the name
  var userName = prompt('What is your name');
  document.getElementById(USER_NAME).innerText = userName;
  localStorage.setItem(USER_NAME,userName);
} else {
  // Vinicio - the name IS in local storage, let's use the name
  var userNameFromLocalStorage = localStorage.getItem(USER_NAME);
  document.getElementById(USER_NAME).innerText = userNameFromLocalStorage;
}

var CAT = 'cat';
if (localStorage.getItem(CAT) === null) {
  alert('Let\'s create a cat');
  var catFirstName =  prompt('Enter the cat\'s first name');
  var catLastName = prompt('Enter the cat\'s last name');
  var catFavoriteFood = prompt('Enter the cat\'s favorite food');

  var cat = new Cat(catFirstName, catLastName, catFavoriteFood);
  // Vinicio - stringify WILL NOT save functions
  console.log(JSON.stringify(cat));
  localStorage.setItem(CAT, JSON.stringify(cat));
  document.getElementById('message').innerText = cat.introduction();
} else {
  // DATA
  var catData = JSON.parse(localStorage.getItem(CAT));
  console.log(catData);
  // Vinicio - this line is required becacuse of local storage
  // BEHAVIOR
  var catFromLocalStorage = new Cat(catData.firstName, catData.lastName,
  catData.favoriteFood);
  document.getElementById('message').innerText = catFromLocalStorage.introduction();
}




















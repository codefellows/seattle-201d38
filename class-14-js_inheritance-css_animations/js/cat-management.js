'use strict';

// ------------------------------------------------------------------------------------------------
// USER NAME MANAGEMENT
// ------------------------------------------------------------------------------------------------
var USER_NAME = 'user-name';
if(localStorage.getItem(USER_NAME) === null) {
  var userName = prompt('What is your name');
  document.getElementById(USER_NAME).innerText = userName;
  localStorage.setItem(USER_NAME,userName);
} else {
  var userNameFromLocalStorage = localStorage.getItem(USER_NAME);
  document.getElementById(USER_NAME).innerText = userNameFromLocalStorage;
}
// ------------------------------------------------------------------------------------------------
// CAT MANAGEMENT
// ------------------------------------------------------------------------------------------------
function cleanForm(){
  alert('Your cat has been added to our list. He/She is super happy!');
  document.getElementById('first-name').value = '';
  document.getElementById('last-name').value = '';
  document.getElementById('favorite-food').value = '';
}

function storeCat(cat) {
  var catsData = localStorage.getItem(CATS);
  if(catsData === null) {
    var cats = [];
    cats.push(cat);
    localStorage.setItem(CATS, JSON.stringify(cats));
  } else {
    catsData = JSON.parse(catsData);
    for (var i = 0; i < catsData.length; i++) {
      if (cat.firstName + cat.lastName === catsData[i].firstName + catsData[i].lastName) {
        return alert('This cat already exists in our cat list!. Please enter another cat');
      }
    }
    // Vinicio - if I reach this line, everything is ok.
    catsData.push(cat);
    localStorage.setItem(CATS, JSON.stringify(catsData));
  }
  cleanForm();
}

function handleCommentSubmit(event) {
  event.preventDefault();
  var firstName = document.getElementById('first-name').value;
  var lastName = document.getElementById('last-name').value;
  var favoriteFood = document.getElementById('favorite-food').value;

  if (!firstName || !lastName || !favoriteFood) {
    return alert('Fields cannot be empty!');
  }
  var newCat = new Cat(firstName, lastName, favoriteFood);
  storeCat(newCat);
}

var catForm = document.getElementById('cat-form');
catForm.addEventListener('submit', handleCommentSubmit);

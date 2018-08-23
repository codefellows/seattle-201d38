'use strict';
var catsData = localStorage.getItem(CATS);
var messageElement = document.getElementById('message');
var catListElement = document.getElementById('cat-list');

if (catsData === null) {
  messageElement.innerText = 'We do not have any cats to show :(. Please add some!';
} else {
  messageElement.innerText = 'All your cats want to say hi!. Please read carefully:';

  catsData = JSON.parse(catsData);
  for(var i = 0; i < catsData.length; i++) {
    var cat = new Cat(catsData[i].firstName, catsData[i].lastName,
      catsData[i].favoriteFood);

    var liElement = document.createElement('li');
    liElement.textContent = cat.introduction();

    catListElement.appendChild(liElement);
  }
}

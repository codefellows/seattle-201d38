'use strict';

var imageEl = document.getElementById('some-goat');

var allGoats = [];

function Goat(name) {
  this.name = name;
  this.timesShown = 0;
  this.path = `images/${name}.jpg`;
  allGoats.push(this);
}

var allGoatNames = ['cruisin-goat', 'float-your-goat', 'goat-away', 'goat-out-of-hand', 'kissing-goat', 'sassy-goat', 'smiling-goat', 'sweater-goat'];

allGoatNames.forEach(function(goatName) {
  new Goat(goatName);
});

function showRandomGoat(event) {
  var rando = Math.floor(allGoats.length * Math.random());
  imageEl.src = allGoats[rando].path;
  imageEl.title = allGoats[rando].name;
  allGoats[rando].timesShown++;
}

showRandomGoat();

imageEl.addEventListener('click', function(event) {
  console.log(event.target);
  showRandomGoat(event);
});

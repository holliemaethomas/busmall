'use strict';
//  globals


Product.names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

// DOM munipulation variables
var left = document.getElementById('left')
Product.container = document.getElementById('imageContainer');
var middle = document.getElementById('middle')
var right = document.getElementById('right')
var leftName = document.getElementById('leftName')
var middleName = document.getElementById('middleName')
var rightName = document.getElementById('rightName')

// arrays

Product.viewed = [];
Product.imageDisplay = [left, middle, right] 
Product.nameDisplay = [leftName, middleName, rightName];
Product.all = [];






function Product(name) {
  this.name = name
  this.path = `img/${name}.jpg`
  this.views = 0
  this.votes = 0
  Product.all.push(this)
}
for (var i = 0; i < Product.names.length; i++) {
  new Product(Product.names[i])
};

function shuffle () {
  for (var i = 0; i < Product.all.length; i++) {
  Product.all.sort(() => Math.random() - 0.5)
};
return Product.all[4];
  }

// inspiration to shuffle goes to: https://javascript.info/task/shuffle

var current = [];
function generateProduct () {
  current[0] = shuffle()
  current[1] = shuffle()
  current[2] = shuffle()
  

  while (Product.viewed.indexOf(current[0]) !== -1) {
    current[0] = shuffle()
  }

  current[1] = shuffle()
  while (current[0] === current[1] || Product.viewed.indexOf(current[1]) !== -1) {
    current[1] = shuffle()
  }

  current[2] = shuffle()
  while (current[0] === current[2] || current[1] === current[2] || Product.viewed.indexOf(current[2]) !== -1) {
    current[2] = shuffle()

}
// inserts product images via src
 for (var i = 0; i < 3; i++) {

  Product.imageDisplay[i].src = [current[i].path];
  Product.nameDisplay[i].textContent = [current[i].name];
  Product.imageDisplay[i].alt = [current[i].name];
  Product.viewed[i] = current[i];
  Product.all[i].views++;
} 

}
generateProduct();

function createEvent () {
  for (var i = 0; i < Product.imageDisplay.length; i++) {
    Product.imageDisplay[i].addEventListener("click", trackVotes);
    
  } 
}

createEvent();

function trackVotes(event) {
  var selectedImage = event.target.alt;
   for (var i = 0; i < Product.all.length; i++) {
if (selectedImage === Product.all[i].name) {
  Product.all[i].votes++
  
}
   }
  generateProduct()
}
// Micah helped with the logic for track votes

console.log(Product.all.votes)
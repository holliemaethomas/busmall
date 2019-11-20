'use strict';
//  globals


// credit for shuffle function goes to (https://javascript.info/task/shuffle)


Product.names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

// DOM munipulation variables
var left = document.getElementById('left')
var middle = document.getElementById('middle')
var right = document.getElementById('right')
var leftName = document.getElementById('leftName')
var rightName = document.getElementById('middleName')
var leftName = document.getElementById('rightName')

// arrays
var randomizedArray = [];
var allImages = [];
var allnames = [];
var viewed = [];
var onDisplay = [];
Product.all = [];
Product.container = document.getElementById('imageContainer');

function Product(name) {
  this.name = name
  this.path = `img/${name}.jpg`;
  this.votes = 0
  this.views = 0
  Product.all.push(this)
}
for (var i = 0; i < Product.names.length; i++) {
  new Product(Product.names[i])
};

function shuffle () {
   return Product.all.sort(() => Math.random() - 0.5);
}
// credit to shuffle goes to: https://javascript.info/task/shuffle

var current = [];
function generateProduct () {
  current[0] = shuffle()
  current[1] = shuffle()
  current[2] = shuffle()
}

generateProduct()
console.log(current[0])

var numArr = [1,2,3,4,5];

var shuffledNumArr = [];


function modifiedShuffle() {
return numArr.sort(() => Math.random() - 0.5)
};

function assignRandomIndex () {
  shuffledNumArr[0] = modifiedShuffle()

}

assignRandomIndex()
console.log(shuffledNumArr)

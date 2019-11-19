 'use strict';  
 
 function Product (name, displayName) {
   this.name = name
   this.path = `img/${name}`
   this.votes = 0
   this.views = 0 
   this.displayName = displayName
   Product.all.push(this)
   allImages.push(this.path)
  }
  var allImages = [];
  var viewed = [];
  var onDisplay = [];
  Product.all = [];
  Product.container = document.getElementById('imageContainer');
  
   var left = document.getElementById('left')
   var middle = document.getElementById('middle')
   var right = document.getElementById('right')
  
  // console.log(Product.all, 'I AM HERE!');
  new Product('bag.jpg', 'bag')
  new Product('banana.jpg', 'banana')
  new Product('bathroom.jpg', 'bathroom')
  new Product('boots.jpg', 'boots')
  new Product('breakfast.jpg', 'breakfast')
  new Product('bubblegum.jpg', 'bubblegum')
  new Product('chair.jpg', 'chair')
  new Product('cthulhu.jpg', 'cthulhu')
  new Product('dog-duck.jpg', 'dog-duck')
  new Product('dragon.jpg', 'dragon')
  new Product('pen.jpg', 'pen')
  new Product('pet-sweep.jpg', 'pet-sweep')
  new Product('scissors.jpg', 'scissors')
  new Product('sweep.jpg', 'sweep')
  new Product('tauntaun.jpg', 'tauntaun')
  new Product('unicorn.jpg', 'unicorn')
  new Product('usb.jpg', 'usb')
  new Product('water-can.jpg', 'water-can')
  new Product('wine-glass.jpg', 'wine-glass')

var renderProducts = function () {
  
    left.src = allImages[Math.floor(Math.random() * allImages.length)];
    middle.src = allImages[Math.floor(Math.random() * allImages.length)];
    right.src = allImages[Math.floor(Math.random() * allImages.length)];

  } 
  
  
  


renderProducts();









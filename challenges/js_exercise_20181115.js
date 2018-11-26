"use strict";

// 1-Rewrite code below using ES6 Classes
function Food(calories) {
  this.calories = calories;
}

function Fruit(title, price, calories) {
  Food.call(this, calories);
  this.title = title;
  this.price = price;
}

Fruit.prototype = Object.create(Food.prototype);

Fruit.prototype.priceInfo = function() {
  return `Price of one ${this.title} is $${this.price}`;
};

var apple = new Fruit("Apple", 2, 150);
console.log(apple.priceInfo());

var orange = new Fruit("Orange", 3, 180);
console.log(orange.priceInfo());

// 1-Object Constructor Function version
class Food {
  constructor(calories) {
    this.calories = calories;
  }
}
class Fruit extends Food {
  constructor(title, price, calories) {
    super(calories);
    this.title = title;
    this.price = price;
  }
  priceInfo() {
    return `Price of one ${this.title} is $${this.price}`;
  }
}
var apple = new Fruit("Apple", 2, 150);
console.log(apple.priceInfo());

var orange = new Fruit("Orange", 3, 180);
console.log(orange.priceInfo());

// 2-Rewrite this code without using ES6 Classes
class Mammal {
  constructor(name) {
    this.hair = true;
    this.warmblooded = true;
  }

  breath() {
    console.log("I love O2");
  }

  speak(input) {
    return `I am a ${input}`;
  }
}

class Lion extends Mammal {
  constructor(name) {
    super();
    this.type = "Lion";
    this.name = name;
  }

  roar() {
    return super.speak(this.type) + "! Here me ROAR!";
  }
}

let simba = new Lion("simba");
console.log(simba.roar());

// 2-Class version
function Mammal(hair, warmblooded) {
  this.hair = true;
  this.warmblooded = true;
}
Mammal.prototype.breath = function() {
  console.log("I love O2");
};
Mammal.prototype.speak = function(input) {
  return `I am a ${input}`;
};

function Lion(name, hair, warmblooded) {
  Mammal.call(this, hair, warmblooded);
  this.type = "Lion";
  this.name = name;
}
Lion.prototype = Object.create(Mammal.prototype);
Lion.prototype.roar = function() {
  return this.speak(this.type) + "! Here me ROAR!";
};

let simba = new Lion("simba");
console.log(simba.roar());
